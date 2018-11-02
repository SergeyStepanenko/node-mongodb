"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Task = mongoose.model("Tasks");
function listAllTasks(request, response) {
    Task.find({}, (error, task) => {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
}
exports.listAllTasks = listAllTasks;
function createTask(request, response) {
    const newTask = new Task(request.body);
    newTask.save((error, task) => {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
}
exports.createTask = createTask;
function readTask(request, response) {
    Task.findById(request.params.taskId, function (error, task) {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
}
exports.readTask = readTask;
function updateTask(request, response) {
    Task.findOneAndUpdate({ _id: request.params.taskId }, request.body, { new: true }, (error, task) => {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
}
exports.updateTask = updateTask;
function deleteTask(request, response) {
    Task.remove({
        _id: request.params.taskId
    }, function (error, task) {
        if (error) {
            response.send(error);
        }
        response.json({ message: "Task successfully deleted" });
    });
}
exports.deleteTask = deleteTask;
