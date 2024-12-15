import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected here
    if (!task) return; // Do nothing if input is empty
    addTask(task); // Call the addTask function passed as prop
    setTask(""); // Reset the input field
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
