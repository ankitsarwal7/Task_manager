import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js"; // Import your routes

// Load environment variables
dotenv.config();

// Initialize Express application
const app = express();

// Middleware to handle JSON data and CORS
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Use the task routes
app.use("/api/tasks", taskRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
