import mongoose from "mongoose";

const Task = mongoose.model("Tasks");

export function listAllTasks(req, res) {
  Task.find({}, (error, task) => {
    if (error) {
      res.send(error);
    }

    res.json(task);
  });
}

export function createTask(req, res) {
  const newTask = new Task(req.body);

  newTask.save((error, task) => {
    if (error) {
      res.send(error);
    }

    res.json(task);
  });
}

export function readTask(req, res) {
  Task.findById(req.params.taskId, function(error, task) {
    if (error) {
      res.send(error);
    }

    res.json(task);
  });
}

export function updateTask(req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (error, task) => {
      if (error) {
        res.send(error);
      }

      res.json(task);
    }
  );
}

export function deleteTask(req, res) {
  Task.remove(
    {
      _id: req.params.taskId
    },
    function(error, task) {
      if (error) {
        res.send(error);
      }

      res.json({ message: "Task successfully deleted" });
    }
  );
}
