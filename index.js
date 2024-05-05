const express = require("express");
const dotenv = require("dotenv").config()
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors")
const { NoPage, Error, Check } = require("./handler");
const { index, users } = require("./routes/_main");

// app
const app = express();

// functions
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(Check);
app.use(cors())
app.get("/", index);
app.get("/users", users);
app.use(Error);

// start server
app.listen(3000, async () => {
    console.log("Im live on 3000".blue);
});
