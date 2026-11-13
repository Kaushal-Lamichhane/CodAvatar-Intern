# Day 18 — Render Observation Log

## 1. Render Observation

- Added `console.log("Dashboard rendered")`.
- Observed multiple render logs in development because React StrictMode intentionally invokes components more than once.
- Clicking Increase triggered another render.
- A render does not necessarily mean the entire DOM changes.

## 2. Stable Key Experiment

### Incorrect key
```tsx
key={Math.random()}
```
- Generates a new key on every render.
- React treats cards as new components.
- Old components unmount and new components mount.
- Local state resets to its initial value.

### Correct key
```tsx
key={task.id}
```
- Each task has a stable, unique identity.
- React can recognize the same task after reordering.
- Local state stays associated with the correct task.

## 3. Local State Experiment

- Increased Learn React counter to 3.
- With `Math.random()` as key, reversing tasks reset the counter to 0.
- With `task.id` as key, reversing tasks preserved the counter at 3.

## 4. Important Concepts

- Render: React executes a component to calculate its UI.
- DOM update: React applies necessary changes to the browser.
- Remount: React destroys an old component instance and creates a new one.
- Stable key: Helps React identify list items across renders and reordering.
- Local state: State belonging to an individual component instance.

## 5. Conclusion

Stable IDs should be used as keys when rendering lists. Array positions and random values are not reliable identities when items can be reordered.