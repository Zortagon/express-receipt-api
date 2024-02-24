const express = require("express");
const path = require("path");

const app = express(); // Simplify the instantiation

app.get("/", (_, response) => {
    response.status(200).send("Express Application");
});

module.exports = app;
