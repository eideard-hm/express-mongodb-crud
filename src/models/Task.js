import { Schema, model } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        tyrpe: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Task", TaskSchema);
