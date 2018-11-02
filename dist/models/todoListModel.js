"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.default = new mongoose.Schema({
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
