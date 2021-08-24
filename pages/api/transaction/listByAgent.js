import * as queries from "../../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import Amplify, { Auth } from "aws-amplify";
import configuration from "../../../src/aws-exports";
import jsSha512 from "js-sha512";
Amplify.configure(configuration);

export default async (req, res) => {
    res.statusCode = 200;
    let raw = {};
    let results = [];
    let nextToken = null;
    if (
        req.method === "GET" &&
        req.query.apiUser &&
        req.query.apiKey &&
        req.query.hash &&
        req.query.agentId &&
        req.query.from &&
        req.query.to
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        const agentId = req.query.agentId;
        const from = req.query.from;
        const to = req.query.to;
        if (hash === jsSha512(agentId + from + to)) {

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
                        do {
                            raw = await API.graphql(

                                graphqlOperation(queries.listTransactions,
                                    {
                                        filter: {
                                            and: {
                                                timeStamp: { between: [from, to] },
                                                transactionAgentId: { eq: agentId }
                                            }
                                        },
                                        limit: 10000,
                                        nextToken: nextToken
                                    }
                                )
                            );
                            nextToken = raw.data.listTransactions.nextToken;
                            raw.data.listTransactions.items.map(value => results.push(value));
                        } while (nextToken);
                        res.setHeader("Content-Type", "application/json");
                        res.end(JSON.stringify({ status: "Ok", data: results }));
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