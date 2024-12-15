import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'
import './App.css'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([]);
  
  //Fetch tasks from the backend
  const fetchTasks = async() => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);

  }

useEffect(()=> {
  fetchTasks();
},[])

//add a new task
const addTask = async(name) => {
await axios.post("http://localhost:5000/api/tasks", {name});
fetchTasks();
}

//delete a task
const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    console.log("Delete response:", response);
    fetchTasks();
  } catch (err) {
    console.error("Error deleting task:", err.message);
  }
};

















  return (
     <div>
      <h1>
        Task Manager
      </h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
     </div>
  )
}

export default App;
