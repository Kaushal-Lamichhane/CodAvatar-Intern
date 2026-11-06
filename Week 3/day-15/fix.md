
# Day 15 - Supervisor Error Corrections

## 1. Nullability Mismatch

Problem:

localStorage.getItem() can return either a string or null.

Incorrect assumption:

```typescript
const savedTasks: string = localStorage.getItem("taskflow-tasks");
```

Correct understanding:

```typescript
const savedTasks: string | null =
    localStorage.getItem("taskflow-tasks");
```

Correction:

```typescript
if (savedTasks === null) {
    return [];
}
```

Explanation:

We must check for null before parsing the stored data.

## 2. Property Mismatch

Actual Task contract:

```typescript
interface Task {
    title: string;
    completed: boolean;
}
```

Incorrect property:

```typescript
task.isCompleted
```

Correct property:

```typescript
task.completed
```

Explanation:

The property used by the application must match the
property defined in the Task interface.

## 3. Runtime Validation

JSON.parse() does not guarantee that stored data
matches our Task interface.

We use unknown and the isTask type guard to
validate external data before using it.

## Conclusion

The application now uses independent TypeScript
contracts and safely handles nullable and untrusted data.
