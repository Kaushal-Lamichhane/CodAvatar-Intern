
# Day 11 — TypeScript Foundations

**Week 3 | Frontend Internship | TaskFlow Dashboard**

## Overview

This task focuses on TypeScript fundamentals, including static type checking, object types, union types, literal types, optional properties, function typing, and runtime validation.

The goal is to understand how TypeScript helps catch incompatible values before execution while recognising that external data still requires runtime validation.

## Learning Objectives

- Understand TypeScript static type checking.
- Define reusable object types.
- Understand union and literal types.
- Use optional properties.
- Type function parameters and return values.
- Understand the difference between `unknown` and `any`.
- Perform explicit runtime validation.
- Identify and correct TypeScript type errors.

## Implementation

### 1. Type Definitions

Defined the following types:

- `Task`
- `User`
- `TaskStatus`

### 2. Typed Task Functions

Implemented:

- `getTaskTitle()` — returns a task title.
- `completeTask()` — marks a task as completed.
- `getTaskTitles()` — extracts titles from tasks.
- `filterTasks()` — filters tasks by status.

### 3. Runtime Validation

Implemented `isTask()` using `unknown` to validate incoming data before treating it as a Task.

The validation checks:

- ID is a number or string.
- Title is a string.
- Completed is a boolean.
- Status is an allowed TaskStatus.
- Description is optional but must be a string when provided.

### 4. Deliberate Type Errors

Created and corrected two intentional errors:

**Error 1:** Assigning a boolean to `Task.id`, which accepts only a number or string.

**Error 2:** Assigning `"finished"` to `TaskStatus`, which does not allow that value.

Both errors were corrected using valid values.

## Runtime Testing

Tested valid and invalid incoming data.

Expected results:

```text
Valid data: true
Invalid data: false
```

## How to Run

Run the TypeScript file:

```bash
npx tsx practicets.ts
```

Check for TypeScript errors:

```bash
npx tsc --noEmit practicets.ts
```

No compiler output means no type errors were found.

## Key Learnings

- TypeScript catches type incompatibilities during static checking.
- Union types allow multiple permitted types.
- Literal types restrict values to specific options.
- Optional properties do not need to be present.
- `unknown` requires type checking before safe use.
- TypeScript does not automatically validate API responses.
- Runtime validation checks actual data while the program executes.

## Acceptance Criteria

- [x] Defined Task, User, and TaskStatus types.
- [x] Typed task transformation functions.
- [x] Created two deliberate type errors.
- [x] Corrected both type errors.
- [x] Implemented explicit runtime validation.
- [x] Tested valid and invalid data.
- [x] Passed TypeScript type checking.

## Submission Files

- `practicets.ts` — Typed utilities and runtime validation.
- `README.md` — Task documentation.
- `TYPE-ERRORS.md` — Explanation of deliberate type errors and corrections.
