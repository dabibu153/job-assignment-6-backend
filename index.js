const express = require("express");
const cors = require("cors");
const app = express();
const canvasToPdf = require("./canvasToPdf");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.all("/", (req, res) => {
  res.send("backend running...");
});
app.use("/api", canvasToPdf);

let port = 5000;

app.listen((PORT = process.env.PORT || port));
console.log("server started...");
