const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");

const STORAGE_KEY = "taskflow-tasks";

let tasks = [];

// Load saved tasks safely
try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (savedTasks !== null) {
        const parsedTasks = JSON.parse(savedTasks);

        if (Array.isArray(parsedTasks)) {
            tasks = parsedTasks.filter(function (task) {
                return (
                    task &&
                    typeof task.title === "string" &&
                    typeof task.completed === "boolean"
                );
            });
        }
    }
} catch (error) {
    tasks = [];
}

// Save the current array
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Show or hide the empty message
function updateEmptyMessage() {
    emptyMessage.hidden = taskList.children.length > 0;
}

// Display tasks from the array
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        const taskText = document.createElement("span");

        taskText.textContent = task.title;
        li.append(taskText);

        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.dataset.action = "complete";
        completeButton.dataset.index = index;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.action = "delete";
        deleteButton.dataset.index = index;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.append(completeButton, deleteButton);
        taskList.append(li);
    });

    updateEmptyMessage();
}

// Add a new task
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = input.value.trim();

    if (title === "") {
        return;
    }

    tasks.push({
        title: title,
        completed: false
    });

    saveTasks();
    renderTasks();

    input.value = "";
    input.focus();
});

// Handle Complete and Delete with event delegation
taskList.addEventListener("click", function (event) {
    const clickedButton = event.target.closest("button[data-action]");

    if (!clickedButton || !taskList.contains(clickedButton)) {
        return;
    }

    const index = Number(clickedButton.dataset.index);

    if (!Number.isInteger(index) || !tasks[index]) {
        return;
    }

    if (clickedButton.dataset.action === "complete") {
        tasks[index].completed = !tasks[index].completed;
    } else if (clickedButton.dataset.action === "delete") {
        tasks.splice(index, 1);
    } else {
        return;
    }

    saveTasks();
    renderTasks();
});

// Display saved tasks when the page loads
renderTasks();