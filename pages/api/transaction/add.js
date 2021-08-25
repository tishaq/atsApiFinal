import * as mutations from "../../../src/graphql/mutations";
import * as queries from "../../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import Amplify from "aws-amplify";
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
        req.query.agentId &&
        req.query.deviceId &&
        req.query.itemId &&
        req.query.customerId &&
        req.query.quantity &&
        req.query.date &&
        req.query.amount &&
        req.query.id &&
        req.query.timeStamp
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        const agentId = req.query.agentId;
        const deviceId = req.query.deviceId;
        const itemId = req.query.itemId;
        const customerId = req.query.customerId;
        const quantity = req.query.quantity;
        const amount = req.query.amount;
        const date = req.query.date;
        const timeStamp = req.query.timeStamp;
        const id = req.query.id;
        console.log(jsSha512(
            agentId +
            deviceId +
            itemId +
            customerId +
            quantity +
            date +
            amount +
            timeStamp
        ));
        if (hash === jsSha512(
            agentId +
            deviceId +
            itemId +
            customerId +
            quantity +
            date +
            amount +
            timeStamp
        )) {

            const createTransactionInput = {
                input: {
                    id,
                    transactionAgentId: agentId,
                    transactionDeviceId: deviceId,
                    transactionItemId: itemId,
                    transactionCustomerId: customerId,
                    quantity,
                    date,
                    amount,
                    timeStamp,
                }
            }

            try {
                raw = await API.graphql(
                    graphqlOperation(queries.getApiUser, {
                        id: apiUser
                    })
                );
                console.log(raw);
                //check if user exist and authorized
                const apiUserResponse = raw.data.getApiUser || {}
                if (apiUser == apiUserResponse.id &&
                    apiKey == apiUserResponse.apiKey) {
                    try {
                        raw = await API.graphql(
                            graphqlOperation(mutations.createTransaction, createTransactionInput)
                        );
                        const transationResponse = raw.data.createTransaction || {};
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify({ status: "Ok", data: transationResponse }));
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