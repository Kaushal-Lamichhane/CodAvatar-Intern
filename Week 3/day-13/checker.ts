
// Day 13 - Type Checking and Validation

interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  createdAt: string;
}

type TaskUpdate = Partial<
  Pick<Task, "title" | "status" | "priority">
>;

// VALID EXAMPLES

const validUpdate: TaskUpdate = {
  title: "Complete Day 13",
  status: "completed",
};

const anotherValidUpdate: TaskUpdate = {
  priority: "high",
};

// INVALID EXAMPLES

const invalidField: TaskUpdate = {
  // @ts-expect-error - Wrong property name
  titlle: "Wrong property",
};

const invalidStatus: TaskUpdate = {
  // @ts-expect-error - Invalid status value
  status: "finished",
};

const invalidPriority: TaskUpdate = {
  // @ts-expect-error - Invalid priority value
  priority: "urgent",
};

// Missing record handling

function findTask(
  tasks: Task[],
  id: string
): Task | undefined {
  return tasks.find((task) => task.id === id);
}

const tasks: Task[] = [
  {
    id: "task-1",
    title: "Learn Generics",
    description: "Practice reusable contracts",
    status: "completed",
    priority: "high",
    createdAt: "2026-11-04",
  },
];

const result = findTask(tasks, "task-99");

if (result !== undefined) {
  console.log("Task found:", result.title);
} else {
  console.log("Task not found!");
}

console.log("Valid update:", validUpdate);
console.log("Another valid update:", anotherValidUpdate);

export {};
