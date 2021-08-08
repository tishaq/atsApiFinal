import Amplify, { Auth } from 'aws-amplify';
import configuration from "../../src/aws-exports";

Amplify.configure(configuration);

export default async (req, res) => {
    res.statusCode = 200;
    if (req.method === "GET" &&
        req.query.username &&
        req.query.password)
        try {
            const user = await Auth.signIn(req.query.username, req.query.password);
            console.log(user);
            const token = user.signInUserSession.idToken.jwtToken;
            console.log(token);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ status: "Ok", data: { token } }));

        } catch (error) {
            console.log('error signing in', error);
        }
};