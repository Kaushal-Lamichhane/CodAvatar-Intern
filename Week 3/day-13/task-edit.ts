
// Reusable Task Edit Contracts

interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  createdAt: string;
}

// PART 1: Partial
// Makes all selected properties optional.

type TaskUpdate = Partial<
  Pick<Task, "title" | "description" | "status" | "priority">
>;

// PART 2: Pick
// Select only the properties needed for a task summary.

type TaskSummary = Pick<Task, "id" | "title" | "status">;

// PART 3: Omit
// Creates a task creation contract without id and createdAt.

type CreateTask = Omit<Task, "id" | "createdAt">;

// Sample task
const task: Task = {
  id: "task-1",
  title: "Learn TypeScript",
  description: "Study reusable contracts",
  status: "in-progress",
  priority: "high",
  createdAt: "2026-11-04",
};

// Valid partial updates
const taskChanges: TaskUpdate = {
  title: "Master TypeScript Generics",
  priority: "medium",
};

// Applying an update
function updateTask(
  existingTask: Task,
  changes: TaskUpdate
): Task {
  return {
    ...existingTask,
    ...changes,
  };
}

const updatedTask = updateTask(task, taskChanges);

// Creating a task
const newTask: CreateTask = {
  title: "Learn React",
  description: "Start learning React fundamentals",
  status: "pending",
  priority: "high",
};

// Creating a task summary
const summary: TaskSummary = {
  id: task.id,
  title: task.title,
  status: task.status,
};

console.log("Updated Task:", updatedTask);
console.log("New Task:", newTask);
console.log("Task Summary:", summary);

export {};
