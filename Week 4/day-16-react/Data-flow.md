# Day 17 — React Data Flow

## Component Structure

```text
App
└── Dashboard
    └── TaskList
        ├── TaskCard (Learn React)
        ├── TaskCard (Practice TypeScript)
        └── TaskCard (Build Dashboard)
```

## State Ownership

- Dashboard owns the counter state.
- TaskList owns the selected task ID.
- TaskCard receives data and callbacks through props.

## One-Way Data Flow

1. TaskList passes `isSelected` and `onSelect` to TaskCard.
2. TaskCard displays whether it is selected.
3. When the user clicks Select, TaskCard calls `onSelect`.
4. TaskList updates `selectedTaskId`.
5. React re-renders the affected UI.

## Important Concepts

- State: Data a component remembers.
- Props: Data passed from parent to child.
- Callback: A function passed to a child so it can request a parent update.
- Immutable update: Creating a new array or object instead of directly modifying existing state.

## Day 17 Acceptance

- Interactive counter using useState.
- Task selection working.
- Child-to-parent callback working.
- No direct mutation of state or props.