import { useState } from "react";
import type { Task } from "../types/task";

type TaskCardProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
};

function TaskCard({ task, onToggle, onDelete, onEdit }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.completed ? "completed" : "Pending"}</p>

      {isEditing ? (
        <div>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />

          <button
            onClick={() => {
              const trimmedTitle = editedTitle.trim();

              if (trimmedTitle.length < 5 || trimmedTitle.length > 80) {
                return;
              }

              onEdit(task.id, trimmedTitle);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditedTitle(task.title);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}> Edit </button>
      )}

      <button onClick={() => onToggle(task.id)}>
        Mark as {task.completed ? "Pending" : "Completed"}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
