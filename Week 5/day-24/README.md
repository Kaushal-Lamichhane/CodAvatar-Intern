# Day 24 — Reducers, Refs, and Custom Hooks

## Objective

Learn pure state transitions with `useReducer`, manage DOM references with `useRef`, and extract reusable behavior into a custom Hook.

## Project: Multi-Step Registration Form

Built a three-step registration form using React and TypeScript.

### Features

- Three-step registration: Name, Email, and Password.
- State management using `useReducer`.
- Immutable state updates.
- Input validation before moving to the next step.
- Previous and Next navigation.
- Automatic input focus using refs.
- Reusable `useFocus` custom Hook.
- Successful form submission and reset functionality.

## Project Structure

```text
src/
├── components/
│   └── MultiStepForm.tsx
├── hooks/
│   └── useFocus.ts
├── reducers/
│   ├── formReducer.ts
│   └── formReducer.test.ts
├── types/
│   └── form.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Concepts Practiced

### 1. useReducer

- Created a pure reducer function.
- Defined typed actions using TypeScript.
- Used dispatch to trigger state transitions.
- Applied immutable state updates.
- Managed form navigation, validation errors, and submission.

### 2. useRef

- Created references for form inputs.
- Used `.current` to access DOM elements.
- Automatically focused inputs after navigation.
- Learned that changing a ref does not trigger a React rerender.

### 3. Custom Hook

Created `useFocus` to provide reusable DOM reference management.

### 4. useEffect

Used an effect to synchronize input focus with the currently rendered form step.

## Validation Rules

| Field | Validation |
|---|---|
| Name | At least 2 characters |
| Email | Valid email format |
| Password | At least 8 characters |

## Reducer Testing

Used Vitest to test the reducer independently of React components.

Test cases:
1. Moves to the next step.
2. Moves to the previous step.
3. Updates the name field.
4. Sets an error message.
5. Marks the form as submitted.
6. Resets the form.
7. Does not mutate the previous state.

**Result: 7/7 tests passed.**

## Verification

- TypeScript: Passed
- ESLint: Passed (0 errors, 0 warnings)
- Production build: Passed
- Vitest: Passed (7 tests)

## Key Learnings

- Reducers describe explicit state transitions.
- Reducers should remain pure and avoid mutating existing state.
- Refs are useful for interacting with DOM elements.
- Custom Hooks help reuse stateful behavior.
- Effects synchronize React with external systems such as the DOM.

## Status

**Completed — Day 24**
