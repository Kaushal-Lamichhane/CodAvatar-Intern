# Day 21 — useState and Derived Values

## Objective
Understand functional state updates, minimal state, and derived values in React.

## Implementation
- Created a Task Counter Dashboard using React and TypeScript.
- Managed the task list using `useState`.
- Used functional state updates to safely update tasks.
- Implemented individual task completion and a Complete All Tasks action.
- Calculated total, completed, and pending task counts directly from the tasks array.
- Avoided duplicate state and unnecessary effects.
- Added an explicit TypeScript `Task` type.

## Key Learnings
1. Functional updates use the previous queued state value.
2. Derived values should be calculated during rendering.
3. Avoid storing duplicate information in state.
4. Immutable updates create new arrays and objects instead of modifying existing state.

## Verification
- TypeScript check: Passed
- ESLint: Passed
- Production build: Passed

## Status
Day 21 implementation completed.
