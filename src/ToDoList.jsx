import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTask] = useState([
    { text: "eat a breakfast", isStrikethrough: false },
    { text: "take a shower", isStrikethrough: false },
    { text: "walk a dog", isStrikethrough: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((tasks) => [...tasks, { text: newTask, isStrikethrough: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  function toggleStrikethrough(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].isStrikethrough = !updatedTasks[index].isStrikethrough;
    setTask(updatedTasks);
  }

  return (
    <div className="font-sans text-gray-700">
      <h1 className="text-4xl font-bold p-2">To-Do List</h1>
      <input
        className="border-2 m-2 p-1 text-2xl border-gray-300 text-gray-500"
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button
        className="m-1 p-2 bg-green-400 rounded-xl cursor-pointer font-black text-xl"
        onClick={addTask}
      >
        Add
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="m-2 text-2xl text-gray-600 bg-[hsl(0,0%,97%)] border-2 rounded-xl border-[hsl(0,0%,97%)] flex items-center"
          >
            <span
              className={`flex-grow ml-4 cursor-pointer ${
                task.isStrikethrough ? "line-through" : ""
              }`}
              onClick={() => toggleStrikethrough(index)}
            >
              {task.text}
            </span>
            <button
              className="m-2 p-2 bg-red-400 rounded-xl cursor-pointer font-bold flex"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="ml-2 m-0.5 p-2 bg-blue-400 rounded-xl cursor-pointer flex"
              onClick={() => moveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="ml-2 m-0.5 p-2 bg-blue-400 rounded-xl cursor-pointer flex"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
