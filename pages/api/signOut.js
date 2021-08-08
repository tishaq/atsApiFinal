import Amplify, { Auth } from 'aws-amplify';
import configuration from "../../src/aws-exports";

Amplify.configure(configuration);

export default async (req, res) => {
    res.statusCode = 200;

    try {
        await Auth.signOut();
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ status: "Ok", data: { "result": "success" } }));

    } catch (error) {
        console.log('error signing in', error);
    }
};