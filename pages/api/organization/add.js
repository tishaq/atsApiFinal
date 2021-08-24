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
        req.query.description &&
        req.query.logoUrl &&
        req.query.phone
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        const name = req.query.name;
        const description = req.query.description;
        const logoUrl = req.query.logoUrl
        const phone = req.query.phone;
        const id = req.query.id;
        if (hash === jsSha512(
            name +
            description +
            logoUrl +
            phone
        )) {
            const createOrganizationInput = {
                input: {
                    id,
                    name,
                    description,
                    logoUrl,
                    phone
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
                            graphqlOperation(mutations.createOrganization, createOrganizationInput)
                        );
                        const organizationResponse = raw.data.createOrganization || {};
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