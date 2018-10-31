module.exports = function(app) {
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
};
