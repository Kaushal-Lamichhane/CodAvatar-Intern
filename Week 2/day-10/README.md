# Day 10 — DOM, Browser Storage & JavaScript Review

## Overview

Built a small TaskFlow task-list application using vanilla JavaScript, HTML, and CSS.

The app supports adding tasks, completing and undoing tasks, deleting tasks, and saving task data in browser `localStorage`.

## Project Files

- `index.html` — page structure and task form
- `style.css` — layout and task styling
- `app.js` — task logic, DOM manipulation, event delegation, and storage

## Features

- Add tasks using a form
- Ignore empty or whitespace-only task names
- Mark tasks complete and undo completion
- Delete tasks
- Show an empty-state message when no tasks exist
- Save tasks in `localStorage`
- Restore saved tasks after refreshing the page
- Recover from malformed JSON using `try...catch`
- Validate loaded data before using it

## JavaScript Concepts Learned

### DOM Manipulation

Used `querySelector()`, `createElement()`, `append()`, `innerHTML`, `classList`, and `remove()` to update the page.

### Form Submission

Used `event.preventDefault()` to prevent the form from reloading the page.

### Event Bubbling and Delegation

Click events bubble from child buttons to their parent elements. One click listener on the task list handles Complete and Delete actions.

### Browser Storage

- `localStorage` persists data across refreshes and browser restarts until cleared.
- `sessionStorage` normally lasts for the current tab session.
- Ordinary JavaScript variables reset when the page reloads.

### JSON and Error Handling

Used `JSON.stringify()` to save the task array and `JSON.parse()` to restore it. A `try...catch` block prevents malformed stored JSON from crashing the app.

## Edge-Case Log

| Test | Expected result | Result |
|---|---|---|
| Empty task submission | No task added | Passed |
| Add a task | Task appears and is saved | Passed |
| Refresh page | Saved tasks return | Passed |
| Complete and undo | Completion styling updates | Passed |
| Delete a task | Task disappears and remains deleted after refresh | Passed |
| Delete last task | Empty message returns | Passed |
| Malformed JSON | App loads without an uncaught parsing error | Passed |
| Browser console | No errors during functional tests | Passed |

## JavaScript Explanation

Tasks are stored as objects in an array. `renderTasks()` creates the visible list from that array. `saveTasks()` converts the array to JSON and saves it in `localStorage`.

When the page loads, the app attempts to parse the saved data. If parsing fails, the error is caught and the app starts with an empty array.

Event delegation lets one parent listener handle clicks on task buttons, including buttons created later.


