import mongoose from "mongoose";

const Task = mongoose.model("Tasks");

export function listAllTasks(request, response) {
  Task.find({}, (error, task) => {
    if (error) {
      response.send(error);
    }

    response.json(task);
  });
}

export function createTask(request, response) {
  const newTask = new Task(request.body);

  newTask.save((error, task) => {
    if (error) {
      response.send(error);
    }

    response.json(task);
  });
}

export function readTask(request, response) {
  Task.findById(request.params.taskId, function(error, task) {
    if (error) {
      response.send(error);
    }

    response.json(task);
  });
}

export function updateTask(request, response) {
  Task.findOneAndUpdate(
    { _id: request.params.taskId },
    request.body,
    { new: true },
    (error, task) => {
      if (error) {
        response.send(error);
      }

      response.json(task);
    }
  );
}

export function deleteTask(request, response) {
  Task.remove(
    {
      _id: request.params.taskId
    },
    function(error, task) {
      if (error) {
        response.send(error);
      }

      response.json({ message: "Task successfully deleted" });
    }
  );
}
