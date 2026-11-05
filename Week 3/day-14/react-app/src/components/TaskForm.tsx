
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  // Handle input changes
  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    setTitle(event.currentTarget.value);
    setError("");
  }

  // Handle form submission
  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): void {
    event.preventDefault();

    // Validate input
    if (title.trim() === "") {
      setError("Task title cannot be empty");
      return;
    }

    // Add task to the list
    setTasks((previousTasks) => [
      ...previousTasks,
      title.trim(),
    ]);

    setTitle("");
    setError("");
  }

  return (
    <div>
      <h2>Create a Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={handleChange}
        />

        <button type="submit">Add Task</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <h3>My Tasks</h3>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskForm;
