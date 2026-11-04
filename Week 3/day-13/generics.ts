
// Generics and Reusable Contracts

// Two different data shapes

interface Task {
  id: string;
  title: string;
  status: "pending" | "in-progress" | "completed";
}

interface User {
  id: string;
  name: string;
  email: string;
}

// Generic function
// T extends { id: string } means that
// every item must contain an id property.

function findById<T extends { id: string }>(
  items: T[],
  id: string
): T | undefined {
  return items.find((item) => item.id === id);
}

// Task data
const tasks: Task[] = [
  {
    id: "task-1",
    title: "Learn TypeScript",
    status: "completed",
  },
  {
    id: "task-2",
    title: "Learn Generics",
    status: "in-progress",
  },
];

// User data
const users: User[] = [
  {
    id: "user-1",
    name: "Ram",
    email: "ram@example.com",
  },
  {
    id: "user-2",
    name: "Hari",
    email: "hari@example.com",
  },
];

// Using the same generic function for different data

const foundTask = findById(tasks, "task-1");
const foundUser = findById(users, "user-2");

const missingTask = findById(tasks, "task-99");

// Results
console.log("Found Task:", foundTask);
console.log("Found User:", foundUser);
console.log("Missing Task:", missingTask);

export {};