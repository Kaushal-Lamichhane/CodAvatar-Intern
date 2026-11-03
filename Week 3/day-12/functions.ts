
export {};

// EXERCISE 1: Functions and return types

interface Task {
  id: number;
  title: string;
}

const task: Task = {
  id: 1,
  title: "Learn TypeScript",
};

function getTaskTitle(task: Task): string {
  return task.title;
}

console.log("Exercise 1:", getTaskTitle(task));



// EXERCISE 2: Optional parameters

function createTaskMessage(
  title: string,
  description?: string
): string {
  return `${title}, ${description ?? ""}`;
}

console.log(
  "Exercise 2:",
  createTaskMessage("Learn TypeScript")
);

console.log(
  createTaskMessage(
    "Learn TypeScript",
    "Practise functions"
  )
);


// EXERCISE 3A: Interface extension

interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

const adminUser: Admin = {
  id: 1,
  name: "Kaushal",
  role: "Administrator",
};

console.log("Exercise 3A:", adminUser);


// EXERCISE 3B: Type composition using &

type TaskInfo = {
  title: string;
  completed: boolean;
};

type UserTask = User & TaskInfo;

const userTask: UserTask = {
  id: 2,
  name: "Kaushal",
  title: "Learn TypeScript",
  completed: false,
};

console.log("Exercise 3B:", userTask);


// EXERCISE 4: Discriminated unions

// Loading state
type LoadingState = {
  status: "loading";
};

// Success state
type SuccessState = {
  status: "success";
  tasks: string[];
};

// Error state
type ErrorState = {
  status: "error";
  message: string;
};

// Empty state
type EmptyState = {
  status: "empty";
};

// Combine all possible states
type TaskState =
  | LoadingState
  | SuccessState
  | ErrorState
  | EmptyState;



// EXERCISE 5: Exhaustive checking with never

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}


// HANDLE TASK STATES USING NARROWING

function handleTaskState(state: TaskState): string {
  if (state.status === "loading") {
    return "Loading tasks...";
  }

  if (state.status === "success") {
    return `${state.tasks.length} tasks loaded.`;
  }

  if (state.status === "error") {
    return state.message;
  }

  if (state.status === "empty") {
    return "No tasks available.";
  }

  // TypeScript ensures every state is handled
  return assertNever(state);
}

// TEST ALL FOUR TASK STATES

const state1: TaskState = {
  status: "loading",
};

const state2: TaskState = {
  status: "success",
  tasks: ["Learn JavaScript", "Build UI", "Practice"],
};

const state3: TaskState = {
  status: "error",
  message: "Failed to fetch tasks",
};

const state4: TaskState = {
  status: "empty",
};


// OUTPUT

console.log("\nExercise 4: Discriminated Union Tests");

console.log(handleTaskState(state1));
console.log(handleTaskState(state2));
console.log(handleTaskState(state3));
console.log(handleTaskState(state4));
