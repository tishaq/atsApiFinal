import * as mutations from "../../../src/graphql/mutations";
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
        req.query.id
    ) {
        const apiUser = req.query.apiUser;
        const apiKey = req.query.apiKey;
        const hash = req.query.hash;
        const id = req.query.id;
        if (hash === jsSha512(apiUser + apiKey + id)) {
            if (apiUser === "ajisaq" && apiKey === "1234567890") {
                const deleteSellerInput = {
                    input: {
                        id: id
                    }
                }
                try {
                    raw = await API.graphql(
                        graphqlOperation(mutations.deleteSeller, deleteSellerInput)
                    );
                } catch (errors) {
                    console.log(errors);
                }
                console.log(raw.data);
                const response = raw.data.deleteSeller || {};
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ status: "Ok", data: response }));
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