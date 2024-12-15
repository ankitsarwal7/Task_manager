// Import mongoose to interact with MongoDB
import mongoose from "mongoose";

// Define task schema
const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Enables createdAt and updatedAt fields
  }
);

export default mongoose.model("Task",TaskSchema)