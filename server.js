import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import Task from "./api/models/todoListModel";

const port = process.env.PORT || 3002;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes/todoListRoutes");
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("todo list RESTful API server started on: " + port);