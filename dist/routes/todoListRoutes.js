"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRoutes(app) {
    const todoList = require("../controllers/todoListController");
    // todoList Routes
    app
        .route("/tasks")
        .get(todoList.listAllTasks)
        .post(todoList.createTask);
    app
        .route("/tasks/:taskId")
        .get(todoList.readTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask);
}
exports.default = getRoutes;
