
# TypeScript Type Errors

## Overview

As part of Day 11, I created two deliberate TypeScript type errors to understand how static type checking identifies incompatible values.

Both errors were corrected, and the TypeScript compiler successfully checked the code afterward.

## Error 1: Invalid Task ID

### Incorrect Code

```ts
const wrongId: Task = {
  id: true,
  title: "Wrong ID",
  completed: false,
  status: "pending",
};
```

### Why This Is an Error

The `Task` type defines `id` as:

```ts
id: number | string;
```

This means the ID must be either a number or a string.

A boolean value (`true`) is not allowed.

### Corrected Code

```ts
const correctId: Task = {
  id: 101,
  title: "Correct ID",
  completed: false,
  status: "pending",
};
```

**What I learned:** TypeScript prevents assigning incompatible values to typed properties.

---

## Error 2: Invalid Task Status

### Incorrect Code

```ts
const wrongStatus: Task = {
  id: 3,
  title: "Wrong status",
  completed: false,
  status: "finished",
};
```

### Why This Is an Error

The `TaskStatus` type only allows three specific values:

```ts
type TaskStatus =
  | "pending"
  | "in-progress"
  | "completed";
```

The value `"finished"` is not included in the allowed options.

### Corrected Code

```ts
const correctStatus: Task = {
  id: 3,
  title: "Correct status",
  completed: false,
  status: "completed",
};
```

**What I learned:** Literal union types restrict values to predefined options.

---

## Type Checking vs Runtime Validation

### Type Checking

TypeScript checks whether values match their declared types before the program executes.

For example:

```ts
let age: number = "twenty";
```

The compiler reports an error because a string cannot be assigned to a number.

### Runtime Validation

TypeScript does not automatically validate external data, such as API responses.

For example, an API might return:

```ts
const data: unknown = {
  id: 10,
  title: 123,
  completed: false,
  status: "pending",
};
```

Although the expected `Task` type requires a string title, the actual data contains a number.

The `isTask()` function checks the actual data while the program runs and rejects invalid input.

## Final Result

- Both deliberate type errors were identified.
- Both incorrect values were corrected.
- TypeScript compilation completed without errors.
- Runtime validation correctly accepted valid data and rejected invalid data.

**Conclusion:** TypeScript static checking protects against incompatible values during development, while runtime validation protects the application when handling actual external data.
