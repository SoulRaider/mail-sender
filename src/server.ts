import exp from "constants";
import express from "express";
const port = process.env.port || 5000;
const app = express();
import config from "./config.json";

import gmailService from "./services/gmailService";

app.use(express.static("dist/src"));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/mail", (req, res) => {
    let body = req.body;
    let fromEmail : string;
    let password : string;
    fromEmail = body.fromEmail ? body.fromEmail : config.fromEmail;
    password = body.password ? body.password : config.password;
    const mailService = new gmailService(fromEmail, password);
    mailService.sendMail(body.toEmail, body.title, body.content)
    .then(message => {
        res.status(200);
        res.send(message);
    })
    .then(error => {
        res.status(500);
        res.send(error)
    });
});

app.listen(port, () => {
    console.log("Application started with port ", port);
});