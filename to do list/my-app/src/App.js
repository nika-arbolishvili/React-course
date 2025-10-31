import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> To-Do აპი</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="შეიყვანე დავალება..."
      />
      <button onClick={addTask}>დამატება</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {task}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteTask(index)}
            >
              წაშლა
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
