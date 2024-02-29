const express = require("express");
const path = require("path");
const helmet = require("helmet");

const { generateHash } = require("./utils/helpers");

const app = express(); // Simplify the instantiation

// app.use(helmet());
app.use(express.json());

app.get("/", (request, response) => {
    console.info(request.headers);
    response.status(200).send("Express Application");
});

module.exports = app;
