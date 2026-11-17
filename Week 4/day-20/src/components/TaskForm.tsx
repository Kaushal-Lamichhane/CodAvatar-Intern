import { useState } from "react";

type TaskFormProps = {
  onAddTask: (title: string) => void;
  onClearSuccess: () => void;
};

function TaskForm({ onAddTask, onClearSuccess }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle.length < 5) {
      setError("title must contain at least 5 characters.");
      return;
    }

    if (trimmedTitle.length > 80) {
      setError("title must be less than 80 charaters");
      return;
    }

    onAddTask(trimmedTitle);
    setTitle("");
    setError("");
  }

  return (
    <div>
      <h2> Create New Task </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title">Task title</label>
        <input
          id="task-title"
          type="text"
          placeholder="Enter a task title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
            onClearSuccess();
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "title-error" : undefined}
        />
        {error && (
          <p id="title-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
