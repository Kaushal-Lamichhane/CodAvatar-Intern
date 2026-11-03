# Day 12 – TypeScript Error Analysis

## Overview

This document explains TypeScript errors encountered while learning functions, interfaces, type composition, discriminated unions, and exhaustive checking.

The purpose was to understand how TypeScript identifies incorrect types and prevents unsafe property access.

## Error 1: Incorrect Function Arguments

### Example

```typescript
function getTaskTitle(task: Task): string {
  return task.title;
}

// Incorrect usage
getTaskTitle("Learn TypeScript");
```

### Problem

The function expects a `Task` object, but a string was provided.

### Correction

```typescript
const task: Task = {
  id: 1,
  title: "Learn TypeScript",
};

getTaskTitle(task);
```

TypeScript ensures that the correct object structure is provided.

## Error 2: Missing Required Properties

### Example

```typescript
type TaskInfo = {
  title: string;
  completed: boolean;
};

const userTask: UserTask = {
  id: 1,
  name: "Kaushal",
  title: "Learn TypeScript",
};
```

### Problem

The required `completed` property is missing.

### Correction

```typescript
const userTask: UserTask = {
  id: 1,
  name: "Kaushal",
  title: "Learn TypeScript",
  completed: false,
};
```

## Error 3: Unsafe Property Access in Discriminated Unions

### Compiler Error

```text
Property 'message' does not exist on type
'EmptyState | ErrorState'.
```

### Problem

After checking loading and success states, TypeScript knows that the remaining possibilities are error and empty.

The empty state does not contain a `message` property.

### Correction

Handle each state separately:

```typescript
if (state.status === "error") {
  return state.message;
}

if (state.status === "empty") {
  return "No tasks available.";
}
```

## Error 4: Exhaustive Checking with never

### Compiler Error

```text
Argument of type 'TaskState' is not assignable
to parameter of type 'never'.
```

### Problem

A new `EmptyState` was added to the `TaskState` union without initially handling it in the function.

TypeScript could not guarantee that all possible states had been handled.

### Correction

```typescript
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}
```

Handle every state before calling:

```typescript
return assertNever(state);
```

After handling all possible variants, TypeScript can narrow the remaining value to `never`.

## Verification Commands

### Runtime execution

```bash
npx tsx functions.ts
```

Result: All exercises executed successfully.

### TypeScript compilation

```bash
npx tsc functions.ts --noEmit
```

Result: Passed with no compilation errors.

## Conclusion

These exercises demonstrated how TypeScript detects incorrect arguments, missing required properties, unsafe property access, and unhandled union variants.