
# Day 15 - TypeScript Practical Review

## Objective

Refactor the Week 2 Day 10 TaskFlow JavaScript
task data layer into TypeScript.

## Technologies

- TypeScript
- HTML
- CSS
- Vite
- ESLint
- localStorage

## Features

- Add tasks
- Complete and undo tasks
- Delete tasks
- Persist tasks in localStorage
- Validate stored task data

## File Responsibilities

| File | Responsibility |
|---|---|
| types.ts | Task interface and validation |
| taskService.ts | Task operations |
| storage.ts | Load and save tasks |
| app.ts | DOM interactions |

## TypeScript Concepts

- Interfaces
- Explicit type annotations
- Unknown type
- Type guards
- Nullability
- DOM typing
- Event typing
- Runtime validation

## Quality Commands

```bash
npm run typecheck
npm run lint
npm run build
```

## Assessment Outcome

The application uses independent contracts that
represent the actual task data.

Invalid data is checked before use, nullable
values are handled safely, and property names
remain consistent across the application.
