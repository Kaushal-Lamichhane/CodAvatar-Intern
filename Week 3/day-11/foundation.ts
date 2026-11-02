
// 1. Define TaskStatus, Task, and User types

type TaskStatus = "pending" | "in-progress" | "completed";

type Task = {
  id: number | string;
  title: string;
  completed: boolean;
  status: TaskStatus;
  description?: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

// 2. Type existing task transformation functions

// Get a task title
function getTaskTitle(task: Task): string {
  return task.title;
}

// Mark a task as completed
function completeTask(task: Task): Task {
  return {
    ...task,
    completed: true,
    status: "completed",
  };
}

// Get all task titles
function getTaskTitles(tasks: Task[]): string[] {
  return tasks.map((task) => getTaskTitle(task));
}

// Filter tasks by status
function filterTasks(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 3. Runtime validation using unknown

function isTask(data: unknown): data is Task {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const candidate = data as Record<string, unknown>;

  const validId =
    typeof candidate.id === "number" ||
    typeof candidate.id === "string";

  const validStatus =
    candidate.status === "pending" ||
    candidate.status === "in-progress" ||
    candidate.status === "completed";

  return (
    validId &&
    typeof candidate.title === "string" &&
    typeof candidate.completed === "boolean" &&
    validStatus &&
    (candidate.description === undefined ||
      typeof candidate.description === "string")
  );
}

// 4. Create sample tasks

const tasks: Task[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    completed: false,
    status: "in-progress",
  },
  {
    id: "TASK-002",
    title: "Build TaskFlow",
    completed: true,
    status: "completed",
    description: "Build the dashboard interface",
  },
];

// 5. Test task transformation functions

const originalTask = tasks[0];

const updatedTask = completeTask(originalTask);

console.log("Original task:", originalTask);
console.log("Updated task:", updatedTask);

console.log("Titles only:", getTaskTitles(tasks));

const completedTasks = filterTasks(tasks, "completed");

console.log("Completed tasks:", completedTasks);

// 6. Test runtime validation

const incomingData: unknown = {
  id: 10,
  title: "Practice TypeScript",
  completed: false,
  status: "pending",
};

const invalidData: unknown = {
  id: 10,
  title: 123,
  completed: false,
  status: "pending",
};

console.log("Valid data:", isTask(incomingData));
console.log("Invalid data:", isTask(invalidData));

// 7. Two deliberate TypeScript errors

// ERROR 1: Boolean is not allowed for Task ID

// const wrongId: Task = {
//   id: true,
//   title: "Wrong ID",
//   completed: false,
//   status: "pending",
// };

// CORRECTION:
// id: 101

// ERROR 2: Invalid TaskStatus value

// const wrongStatus: Task = {
//   id: 3,
//   title: "Wrong status",
//   completed: false,
//   status: "finished",
// };

// CORRECTION:
// status: "completed"
