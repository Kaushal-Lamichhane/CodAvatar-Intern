# Day 09 — Promises, Fetch & Event Loop

## Concepts Learned
- Promise states: pending, fulfilled, and rejected.
- `async` and `await` for asynchronous operations.
- Event loop: synchronous code → Promise microtasks → timer callbacks.
- `fetch()` and parsing JSON with `response.json()`.
- HTTP errors versus network failures.
- Error handling with `try...catch`.

## Experiments

### 1. Event Loop
Observed output:
```text
A: Start
D: End
C: Promise
B: Timer
```
Synchronous code runs first, then Promise microtasks, then timer callbacks.

### 2. Fetch Task Data
Fetched local sample data from `tasks.json`.
- HTTP status: `200`
- `response.ok`: `true`
- Successfully parsed three task objects.

### 3. Error Handling
- **HTTP error:** A missing file returned `404`; checked `response.ok` and threw an error.
- **Network failure:** Simulated a rejected Promise and handled it with `catch`.

## Files
- `event-loop.js` — event-loop experiment.
- `tasks.json` — sample task data.
- `fetch-tasks.js` — fetch and error handling.

## Status
- [x] Event-loop experiment
- [x] Fetch local JSON data
- [x] Handle HTTP errors
- [x] Handle simulated network rejection