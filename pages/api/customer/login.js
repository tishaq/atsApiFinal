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
    //to be removed apiUser: ajisaq, apikey: 12345657890
    if (
        req.method === "GET" &&
        req.query.apiUser &&
        req.query.apiKey &&
        req.query.hash &&
        req.query.username &&
        req.query.password
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        const username = req.query.username;
        const password = req.query.password;
        if (hash === jsSha512(apiUser + apiKey + username + password)) {
            if (apiUser === "ajisaq" && apiKey === "1234567890") {

                try {
                    raw = await API.graphql(
                        graphqlOperation(queries.getManager, {
                            id: username
                        })
                    );
                } catch (errors) {
                    console.log(errors);
                }
                console.log(raw.data);

                if (raw.data.getManager !== null &&
                    raw.data.getManager.username === username &&
                    raw.data.getManager.password === password) {
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ status: "Ok", data: raw.data.getManager }));
                } else {
                    res.setHeader("Content-Type", "application/json");
                    res.end(
                        JSON.stringify({ status: "Error", description: "User doesn't exist" })
                    );
                }
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