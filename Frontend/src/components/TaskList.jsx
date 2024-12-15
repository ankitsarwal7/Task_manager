const TaskList = ({ tasks, deleteTask }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{task.name}</span>
            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  