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
        req.query.code &&
        req.query.deviceId &&
        req.query.category &&
        req.query.name &&
        req.query.measure &&
        req.query.unit &&
        req.query.withQuantity &&
        req.query.withFromTo
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        const code = req.query.code;
        const deviceId = req.query.deviceId;
        const category = req.query.category;
        const name = req.query.name;
        const measure = req.query.measure;
        const unit = req.query.unit;
        const withQuantity = req.query.withQuantity;
        const withFromTo = req.query.withFromTo;
        if (hash === jsSha512(
            code +
            deviceId +
            category +
            name +
            measure +
            unit +
            withQuantity +
            withFromTo
        )) {
            const createItemInput = {
                input: {
                    code,
                    itemDeviceId: deviceId,
                    category,
                    name,
                    measure,
                    unit,
                    withQuantity,
                    withFromTo
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
                            graphqlOperation(mutations.createItem, createItemInput)
                        );
                        const itemResponse = raw.data.createItem || {};
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify({ status: "Ok", data: itemResponse }));
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