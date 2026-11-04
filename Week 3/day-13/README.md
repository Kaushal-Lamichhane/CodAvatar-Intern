
# Day 13 - Generics and Reusable Contracts

## Learning Objectives

Learn how to create reusable generic functions,
preserve input-output type relationships, and use
TypeScript utility types to build reusable contracts.

## 1. Generics

Generics allow us to create reusable functions that
work with different data types without using `any`.

### Implemented

- Created a generic `findById<T>()` function.
- Used the function with Task and User data.
- Applied generic constraints using `extends`.
- Returned `T | undefined` to handle missing records.

## 2. Utility Types

Practiced three built-in TypeScript utility types.

| Utility Type | Purpose |
|---|---|
| Partial | Makes properties optional |
| Pick | Selects specific properties |
| Omit | Excludes specific properties |

### Implemented

- Created a TaskUpdate contract using Partial and Pick.
- Created a TaskSummary contract using Pick.
- Created a CreateTask contract using Omit.
- Implemented a typed task update function.

## 3. Type Checking

Tested TypeScript's ability to reject invalid data.

### Tests

- Valid task updates accepted.
- Invalid property names rejected.
- Invalid status values rejected.
- Invalid priority values rejected.
- Missing task handled using undefined.

Used `@ts-expect-error` to verify expected
TypeScript errors.

## 4. Files Submitted

- generics.ts
- task-edit.ts
- checker.ts
- README.md

## 5. Acceptance Checklist

- [x] Generic findById helper implemented.
- [x] Helper works with two different data shapes.
- [x] Partial utility type implemented.
- [x] Pick utility type implemented.
- [x] Omit utility type implemented.
- [x] Invalid fields rejected by TypeScript.
- [x] Missing records handled explicitly.
- [x] No any used to bypass type checking.

## Key Takeaway

Generics make functions reusable while preserving
their original data types.

Utility types help create flexible and reusable
contracts without repeating entire interfaces.
