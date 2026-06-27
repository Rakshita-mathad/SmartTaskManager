import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
});

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
     const newtasks = [...tasks];
     newtasks[index] = updatedTask;
     setTasks(newtasks);
  }
   
  const deleteTask = (index) => {
     setTasks(tasks.filter((_ , i) => i != index))
  }

  const clearTasks = () => {
  setTasks([]);
};
  
  return (
  <div className="App">

    <div className="container">

      <h1>📋 Task Buddy</h1>

      <p className="subtitle">
        Your Friendly Task Manager
      </p>

      <Taskform addTask={addTask} />

      <Tasklist
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button
          className="clear-btn"
          onClick={clearTasks}
        >
          🗑 Clear All Tasks
        </button>
      )}

    </div>

  </div>
);
}
