
import type { Task } from "./types";

import {
    addTask,
    toggleTask,
    deleteTask
} from "./taskService";

import {
    loadTasks,
    saveTasks
} from "./storage";

// Select HTML elements with proper types
const formElement = document.querySelector<HTMLFormElement>("#task-form");
const inputElement = document.querySelector<HTMLInputElement>("#task-input");
const taskListElement = document.querySelector<HTMLUListElement>("#task-list");
const emptyMessageElement = document.querySelector<HTMLElement>("#empty-message");

// Check whether elements exist
if (!formElement || !inputElement || !taskListElement || !emptyMessageElement) {
    throw new Error("Required HTML elements are missing.");
}

// Now TypeScript knows these are not null
const form: HTMLFormElement = formElement;
const input: HTMLInputElement = inputElement;
const taskList: HTMLUListElement = taskListElement;
const emptyMessage: HTMLElement = emptyMessageElement;

// Application state
let tasks: Task[] = loadTasks();

// Update empty message
function updateEmptyMessage(): void {
    emptyMessage!.hidden = taskList!.children.length > 0;
}

// Render tasks
function renderTasks(): void {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        const taskText = document.createElement("span");

        taskText.textContent = task.title;
        li.append(taskText);

        const completeButton = document.createElement("button");

        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.dataset.action = "complete";
        completeButton.dataset.index = String(index);

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.dataset.action = "delete";
        deleteButton.dataset.index = String(index);

        if (task.completed) {
            li.classList.add("completed");
        }

        li.append(completeButton, deleteButton);
        taskList.append(li);
    });

    updateEmptyMessage();
}

// Add task
form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const title = input.value.trim();

    if (title === "") {
        return;
    }

    tasks = addTask(tasks, title);

    saveTasks(tasks);
    renderTasks();

    input.value = "";
    input.focus();
});

// Handle complete and delete
taskList.addEventListener("click", (event: MouseEvent) => {
    // Narrow EventTarget to Element
    if (!(event.target instanceof Element)) {
        return;
    }

    const clickedButton = event.target.closest<HTMLButtonElement>(
        "button[data-action]"
    );

    if (!clickedButton || !taskList.contains(clickedButton)) {
        return;
    }

    const indexValue = clickedButton.dataset.index;
    const action = clickedButton.dataset.action;

    if (indexValue === undefined) {
        return;
    }

    const index = Number(indexValue);

    if (!Number.isInteger(index)) {
        return;
    }

    if (action === "complete") {
        tasks = toggleTask(tasks, index);

    } else if (action === "delete") {
        tasks = deleteTask(tasks, index);

    } else {
        return;
    }

    saveTasks(tasks);
    renderTasks();
});

// Initial rendering
renderTasks();
