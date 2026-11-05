interface Task {
  id: string;
  title: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
}

type ValidationResult =
  | {
      success: true;
      data: Task;
    }
  | {
      success: false;
      error: string;
    };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

//status validator

type TaskStatus = "pending" | "in-progress" | "completed";

function isTaskStatus(value: unknown): value is TaskStatus {
  return (
    value === "pending" || value === "in-progress" || value === "completed"
  );
}

// priority validator

type TaskPriority = "low" | "medium" | "high";

function isTaskPriority(value: unknown): value is TaskPriority {
  return value === "low" || value === "medium" || value === "high";
}

function validateTask(value: unknown): ValidationResult {
  // 1.check object
  if (!isRecord(value)) {
    return {
      success: false,
      error: "Response must be an object",
    };
  }

  //check id

  if (typeof value.id !== "string") {
    return {
      success: false,
      error: "Task id must be string",
    };
  }

  //check title
  if (typeof value.title !== "string") {
    return {
      success: false,
      error: "Task Title must be string",
    };
  }

  //check status
  if (!isTaskStatus(value.status)) {
    return {
      success: false,
      error: "Invalid Task Status",
    };
  }

  //check the priority
  if (!isTaskPriority(value.priority)) {
    return {
      success: false,
      error: "Invalid Task Priority",
    };
  }

  // return validated data
  return {
    success : true,
    data: {
        id: value.id,
        title: value.title,
        status: value.status,
        priority: value.priority
    },
  };
}

// Test 1: Valid API response
const validResponse: unknown = {
  id: "task-101",
  title: "Complete Day 14",
  status: "completed",
  priority: "high"
};

// Test 2: Missing status
const missingStatus: unknown = {
  id: "task-102",
  title: "Learn API validation",
  priority: "medium"
};

// Test 3: Unexpected status
const invalidStatus: unknown = {
  id: "task-103",
  title: "Learn TypeScript",
  status: "finished",
  priority: "high"
};

// Test 4: Unexpected priority
const invalidPriority: unknown = {
  id: "task-104",
  title: "Build TaskFlow",
  status: "pending",
  priority: "urgent"
};

// Test 5: Invalid ID type
const invalidId: unknown = {
  id: 104,
  title: "Practice TypeScript",
  status: "pending",
  priority: "low"
};


console.log("VALID RESPONSE:");
console.log(validateTask(validResponse));

console.log("MISSING STATUS:");
console.log(validateTask(missingStatus));

console.log("INVALID STATUS:");
console.log(validateTask(invalidStatus));

console.log("INVALID PRIORITY:");
console.log(validateTask(invalidPriority));

console.log("INVALID ID:");
console.log(validateTask(invalidId));


const jsonText = `{
  "id": "task-105",
  "title": "Validate real JSON",
  "status": "completed",
  "priority": "medium"
}`;


const parsedData:unknown = JSON.parse(jsonText);

console.log("JSON Response:");
console.log(validateTask(parsedData));

export {};
