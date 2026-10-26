# Day 06 — Values, References and Equality

## Objective
Understand JavaScript primitive values, type coercion, reference identity, object aliasing, and immutable updates.

## Files
- `equality.js` — Primitive equality, `==` vs `===`, and object identity.
- `reference.js` — Object aliasing, shallow copies, and copied versus mutated arrays.
- `immutable.js` — Task object transformation without modifying the original.

## Concepts Learned

### 1. Equality and Type Coercion
- `==` allows type coercion before comparison.
- `===` compares without type coercion.
- Objects are compared by reference, not by their property contents.

### 2. Object Aliasing
When two variables reference the same object, changing the object through either variable affects both references.

### 3. Shallow Copy
- `{ ...object }` creates a new outer object.
- `[...array]` creates a new outer array.
- Nested objects inside a shallow copy may still be shared.

### 4. Immutable Updates
Create a new object or array instead of modifying the original data directly.

Example:
```javascript
const updatedTask = {
  ...originalTask,
  completed: true
};
```

### 5. Assertions
Used Node.js `node:assert/strict` to verify expected results and confirm that the original task remains unchanged.

## Acceptance Checks
- [x] Equality experiments produce the expected results.
- [x] Object aliasing and reference identity are verified.
- [x] Copied and mutated arrays behave as expected.
- [x] Task transformation preserves the original task.
- [x] All assertions pass.

## How to Run
Run these commands from the `day-06` directory:

```bash
node equality.js
node reference.js
node immutable.js
```

## Key Takeaway
Understanding values, references, and immutable updates helps prevent unintended data changes and prepares me to manage React state safely.


