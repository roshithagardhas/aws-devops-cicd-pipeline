const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("AWS DevOps CI/CD Pipeline Application");
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.get("/version", (req, res) => {
    res.json({
        version: "1.0.0"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});