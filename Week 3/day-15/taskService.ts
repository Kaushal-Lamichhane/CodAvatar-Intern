


import type { Task } from "./types";

// Add a new task
export function addTask(tasks: Task[], title: string): Task[] {
    return [
        ...tasks,
        {
            title: title,
            completed: false
        }
    ];
}

// Complete or undo a task
export function toggleTask(tasks: Task[], index: number): Task[] {
    if (index < 0 || index >= tasks.length) {
        return tasks;
    }

    return tasks.map((task, currentIndex) => {
        if (currentIndex === index) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });
}

// Delete a task
export function deleteTask(tasks: Task[], index: number): Task[] {
    if (index < 0 || index >= tasks.length) {
        return tasks;
    }

    return tasks.filter((_, currentIndex) => currentIndex !== index);
}
