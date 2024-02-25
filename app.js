const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome To Kendra's Gallery");
});

// const paintingController = require("./controllers/paintingController");

// app.use("/paintings", paintingController);

app.get("*", (re, res)=> {
    res.status(404).send("Page Not Found");
});

module.exports = app;