import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    Required: "Kindly enter the name of the task"
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"]
      }
    ],
    default: ["pending"]
  }
});

export default mongoose.model("Tasks", TaskSchema);
