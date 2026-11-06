
// types.ts

// 1. Define the Task contract
export interface Task {
    title: string;
    completed: boolean;
}

// 2. Validate one task from external data
export function isTask(value: unknown): value is Task {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    if (!("title" in value) || !("completed" in value)) {
        return false;
    }

    return (
        typeof value.title === "string" &&
        typeof value.completed === "boolean"
    );
}
