import * as queries from "../../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import Amplify from "aws-amplify";
import configuration from "../../../src/aws-exports";
import jsSha512 from "js-sha512";
Amplify.configure(configuration);
export default async (req, res) => {
    res.statusCode = 200;
    let raw = {}
    let results = [];
    let nextToken = null;
    //to be removed apiUser: ajisaq, apikey: 12345657890
    if (
        req.method === "GET" &&
        req.query.apiUser &&
        req.query.apiKey &&
        req.query.hash
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        if (hash === jsSha512(apiUser + apiKey)) {
            if (apiUser === "ajisaq" && apiKey === "1234567890") {
                try {
                    do {
                        raw = await API.graphql(
                            graphqlOperation(queries.listStocks, {
                                limit: 10000,
                                nextToken: nextToken
                            })
                        );
                        nextToken = raw.data.listStocks.nextToken;
                        raw.data.listStocks.items.map(value => results.push(value));
                    } while (nextToken);

                } catch (errors) {
                    console.log(errors);
                }
                console.log(raw.data);
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ status: "Ok", data: results }));
            } else {
                res.setHeader("Content-Type", "application/json");
                res.end(
                    JSON.stringify({ status: "Error", description: "Unauthorized User" })
                );
            }
        } else {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ status: "Error", description: "Invalid hash" }));
        }
    } else {
        res.setHeader("Content-Type", "application/json");
        res.end(
            JSON.stringify({ status: "Error", description: "Invalid parameters" })
        );
    }

};