
import TaskCard from "./TaskCard";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  const [selectedTaskID, setSelectedTaskID] = useState<number | null>(null);

  return (
    <section>
      <h2>My Tasks</h2>

      <p>Selected task ID: {selectedTaskID ?? "None"}</p>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          completed={task.completed}
          isSelected={selectedTaskID === task.id}
          onSelect={() => setSelectedTaskID(task.id)}
        />
      ))}
    </section>
  );
}

export default TaskList;
