// imported required modules
import express from "express"
import Task from "../models/Task.js"

const router = express.Router();

//get all tasks

router.get("/", async (req, res) => {
    try {
      const tasks = await Task.find(); 
      res.json(tasks);
    } catch (error) {
        res.status(500).json({error: "error fetching tasks"});
    }
})

//post a new task by ID
router.post("/", async(req,res) => {
    try {
        const {name} = req.body;
        const newTask = new Task({name});
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        res.status(500).json({error: "Error adding task"})
    }
})

//DELETE a task by ID

router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id) //  Delete task by ID
        res.json({message: "Task deleted successfully"}) 
    } catch (error) {
        res.status(500).json({error: "Error deleting task"})
    }
})


export default router;