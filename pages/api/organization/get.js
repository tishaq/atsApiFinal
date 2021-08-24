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
        req.method === "GET" &&
        req.query.apiUser &&
        req.query.apiKey &&
        req.query.hash &&
        req.query.id
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        const id = req.query.id
        if (hash === jsSha512(id)) {
            const getOrganizationInput = {
                id
            }

            try {
                raw = await API.graphql(
                    graphqlOperation(queries.getApiUser, {
                        id: apiKey
                    })
                );
                // console.log(raw);
                //check if user exist and authorized
                const apiUserResponse = raw.data.getApiUser || {}
                if (apiUser == apiUserResponse.apiUsername &&
                    apiKey == apiUserResponse.apiKey) {
                    try {
                        raw = await API.graphql(
                            graphqlOperation(queries.getOrganization, getOrganizationInput)
                        );
                        const organizationResponse = raw.data.getOrganization || {};
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify({ status: "Ok", data: organizationResponse }));
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