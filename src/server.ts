import * as express from "express";
import * as cors from "cors";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";

import { default as routes } from "./routes/todoListRoutes";
import TaskSchema from "./models/todoListModel";

const port = process.env.PORT || 3002;
const app = express();

const Task = mongoose.model("Tasks", TaskSchema);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
