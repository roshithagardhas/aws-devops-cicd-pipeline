const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;
const APP_VERSION = process.env.APP_VERSION || "1.0.0";
const APP_NAME = process.env.APP_NAME || "AWS DevOps CI/CD Pipeline Application";

app.get("/", (req, res) => {
    res.send(APP_NAME);
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.get("/version", (req, res) => {
    res.json({ version: APP_VERSION });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});