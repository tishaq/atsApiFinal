import * as mutations from "../../../src/graphql/mutations";
import * as queries from "../../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import Amplify, { Auth } from "aws-amplify";
import configuration from "../../../src/aws-exports";
import jsSha512 from "js-sha512";
Amplify.configure(configuration);

export default async (req, res) => {
    res.statusCode = 200;
    let raw = {}
    if (
        req.method === "POST" &&
        req.query.apiUser &&
        req.query.apiKey &&
        req.query.hash &&
        req.query.name &&
        req.query.agentId &&
        req.query.phone &&
        req.query.code
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        const name = req.query.name
        const agentId = req.query.agentId
        const phone = req.query.phone
        const code = req.query.code
        const id = req.query.id
        if (hash === jsSha512(
            name +
            agentId +
            phone +
            code
        )) {
            const createCustomerInput = {
                input: {
                    id,
                    name,
                    customerAgentId: agentId,
                    phone,
                    code
                }
            }

            try {
                raw = await API.graphql(
                    graphqlOperation(queries.getApiUser, {
                        id: apiUser
                    })
                );
                // console.log(raw);
                //check if user exist and authorized
                const apiUserResponse = raw.data.getApiUser || {}
                if (apiUser == apiUserResponse.id &&
                    apiKey == apiUserResponse.apiKey) {
                    try {
                        raw = await API.graphql(
                            graphqlOperation(mutations.createCustomer, createCustomerInput)
                        );
                        const customerResponse = raw.data.createCustomer || {};
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify({ status: "Ok", data: customerResponse }));
                    } catch (errors) {
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify({ status: "Error", description: errors }));
                        console.log(errors);
                    }


                } else {
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ status: "Error", description: "Unauthorized User" }));
                }

            } catch (errors) {

                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ status: "Error", description: errors }));
                console.log(errors);
            }

        } else {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ status: "Error", description: "Invalid hash" }));
        }
    } else {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ status: "Error", description: "Invalid parameters" }));
    }

};