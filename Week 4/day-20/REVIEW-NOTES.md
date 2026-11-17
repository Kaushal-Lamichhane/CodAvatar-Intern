
# Day 20 – Review Notes

## Completed Features

- Created a task dashboard using React and TypeScript.
- Implemented task creation.
- Implemented task editing.
- Implemented task deletion.
- Implemented task completion and pending status.
- Implemented All, Pending, and Completed filters.
- Added contextual empty-state messages.
- Added task title validation.
- Added accessible error feedback using role="alert".
- Added success feedback using role="status".

## React Concepts Reviewed

### Component Communication
Used props to pass task data and callback functions between parent and child components.

### State Management
Used useState to manage tasks, filters, form values, validation errors, and editing state.

### Immutable Updates
Used map() to update tasks, filter() to delete or filter tasks, and the spread operator to add tasks.

### List Rendering
Used task IDs as React keys when rendering task components.

### Form Handling
Used controlled inputs, onChange, onSubmit, and preventDefault().

### Validation
Trimmed user input and enforced the 5–80 character title limit.

## Quality Verification

- npm run lint: Passed
- npm run build: Passed

## Review Status

Self-review completed for the implemented functionality.

Peer review: Pending.
