// App.js
import React, { useEffect, useState } from "react";
import taskServices from "./services/taskServices";
import './App.css';

function App() {
   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] = useState("");

   useEffect(() => {
       const fetchTasks = async () => {
           try {
               const response = await taskServices.getTasks();
               setTasks(response.data);
           } catch (error) {
               console.error("Error fetching tasks:", error);
           }
       };
       fetchTasks();
   }, []);

   const handleAddTask = async () => {
       if (!newTask.trim()) return;
       try {
           const response = await taskServices.createTask({ title: newTask });
           setTasks([...tasks, response.data]);
           setNewTask("");
       } catch (error) {
           console.error("Error adding task:", error);
       }
   };

   return (
       <div className="container">
           <h1 className="title">Task Manager</h1>
           <div className="input-group">
               <input
                   type="text"
                   value={newTask}
                   onChange={(e) => setNewTask(e.target.value)}
                   placeholder="Add a new task"
                   className="task-input"
               />
               <button onClick={handleAddTask} className="add-button">
                   Add Task
               </button>
           </div>
           <ul className="task-list">
               {tasks.map((task) => (
                   <li key={task.id} className="task-item">
                       {task.title}
                   </li>
               ))}
           </ul>
       </div>
   );
}

export default App;