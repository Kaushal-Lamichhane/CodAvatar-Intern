

import type { Task } from "./types";
import { isTask } from "./types";

const STORAGE_KEY = "taskflow-tasks";

// Load tasks safely
export function loadTasks(): Task[] {
    try {
        const savedTasks = localStorage.getItem(STORAGE_KEY);

        // Handle null
        if (savedTasks === null) {
            return [];
        }

        // JSON.parse returns data we must validate
        const parsedTasks: unknown = JSON.parse(savedTasks);

        // Preserve Week 2 behavior:
        // Keep valid tasks and reject invalid entries.
        if (!Array.isArray(parsedTasks)) {
            return [];
        }

        return parsedTasks.filter(isTask);

    } catch {
        return [];
    }
}

// Save tasks
export function saveTasks(tasks: Task[]): void {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(tasks)
        );
    } catch (error) {
        console.error("Unable to save tasks:", error);
    }
}
