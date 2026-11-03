# Day 12 – Functions, Interfaces and Narrowing

## Overview

Day 12 focused on understanding TypeScript functions, optional parameters, interface extension, type composition, discriminated unions, type narrowing, and exhaustive checking.

The main objective was to create reusable and type-safe contracts while safely handling different application states.

## Learning Objectives

- Define functions with explicit parameter and return types.
- Understand optional parameters.
- Extend interfaces using `extends`.
- Combine types using the intersection operator (`&`).
- Understand discriminated unions.
- Apply type narrowing to access properties safely.
- Use `never` for exhaustive checking.

## Exercises Completed

### Exercise 1: Functions and Return Types

Created a `Task` interface with `id` and `title` properties.

Implemented `getTaskTitle()` with an explicit `Task` parameter and `string` return type.

### Exercise 2: Optional Parameters

Implemented `createTaskMessage()` with:
- Required `title` parameter.
- Optional `description` parameter.
- Explicit `string` return type.
- Nullish coalescing (`??`) to handle missing descriptions.

### Exercise 3A: Interface Extension

Created:
- `User` interface.
- `Admin` interface extending `User`.
- An `adminUser` object following the `Admin` interface.

### Exercise 3B: Type Composition

Created:
- `TaskInfo` type.
- `UserTask` using the intersection operator (`&`).
- A `userTask` object containing properties from both types.

### Exercise 4: Discriminated Unions

Created four task states:

- Loading
- Success
- Error
- Empty

Combined them into a `TaskState` union.

Implemented `handleTaskState()` using conditional checks and type narrowing to safely access state-specific properties.

### Exercise 5: Exhaustive Checking

Implemented `assertNever()` using the `never` type.

Used exhaustive checking to ensure all possible task states are handled.

## Key Concepts Learned

| Concept | Description |
|---|---|
| Optional parameters | Parameters that may be omitted |
| Interface extension | Reusing an existing interface with `extends` |
| Intersection types | Combining multiple types using `&` |
| Union types | Allowing one of several possible types using `|` |
| Discriminated unions | Identifying union variants using a common literal property |
| Type narrowing | Reducing possible types through conditions |
| Never | Representing values that should never occur |

## Verification

### Runtime Execution

Command:

```bash
npx tsx functions.ts
```

Result: Successfully executed all exercises and tested all four task states.

### TypeScript Compilation

Command:

```bash
npx tsc functions.ts --noEmit
```

Result: Passed with no TypeScript errors.

## Acceptance Criteria

- [x] Functions use explicit parameter and return types.
- [x] Optional parameters work correctly.
- [x] Interfaces are extended correctly.
- [x] Types are combined using intersection.
- [x] Loading, success, error, and empty states are modeled.
- [x] Type narrowing safely