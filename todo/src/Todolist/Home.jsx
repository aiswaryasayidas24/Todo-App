import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);
  const [editTask, setEditTask] = useState(null);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addBtn() {
    if (task.trim() !== "") {
      if (editTask !== null) {
        const updateTask = [...addTask];
        updateTask[editTask] = task;
        setAddTask(updateTask);
        setEditTask(null);
        setTask("");
      } else {
        setAddTask([...addTask, task]);
        setTask("");
      }
    }
  }

  function editBtn(index) {
    setEditTask(index);
    setTask(addTask[index]);
  }

  function delBtn(index) {
    const updateTask = [...addTask];
    updateTask.splice(index, 1);
    setAddTask(updateTask);
  }

  return (
    <div className="main-container">
      <h1 className="title">TODO-LIST</h1>
      <div className="container-2">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add task..."
        />
        <button onClick={addBtn}>
          {editTask !== null ? "Edit Task" : "Add Task"}
        </button>
        <div className="card-container">
          {addTask.map((data, index) => (
            <div className="card" key={index}>
              <input type="checkbox" />
              <div className="card-content">{data}</div>
              <div className="card-actions">
                <button onClick={() => editBtn(index)}>Edit</button>
                <button onClick={() => delBtn(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
