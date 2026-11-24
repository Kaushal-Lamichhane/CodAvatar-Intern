# Day 25 — Hooks Architecture Review

## Overview
Integrated React Hooks concepts into a single dashboard, focusing on state ownership, Context, reducers, custom Hooks, effect dependencies, and cleanup.

## Features

### 1. Theme Context
- Created `ThemeContext` and `ThemeProvider`.
- Implemented shared light and dark theme state.
- Created a custom `useTheme` Hook.
- Integrated theme switching across the dashboard.

### 2. Registration Form
- Used `useReducer` to manage form state.
- Implemented field updates, validation, submission, and reset actions.
- Used immutable state updates.

### 3. Browser Connectivity
- Created a reusable `useOnlineStatus` custom Hook.
- Listened for browser online and offline events.
- Removed event listeners during cleanup.

### 4. Stale Closure Investigation
- Created a counter using `setInterval`.
- Identified a stale closure caused by capturing the initial `count`.
- Fixed it using a functional state update:

```tsx
setCount((previousCount) => previousCount + 1)
```

- Used `clearInterval` during effect cleanup.

## Effect Review

| Effect | Purpose | Cleanup |
|---|---|---|
| Online status | Listen for connection changes | Remove event listeners |
| Counter | Update count every second | Clear interval |
| Document title | Synchronize browser tab title | Not required |
| Window resize | Listen for resize events | Remove listener |

## Architecture Decisions

- Shared theme state belongs in ThemeProvider.
- Registration form state belongs inside RegistrationForm.
- Counter state belongs inside StaleCounter.
- Browser connectivity logic is reusable through a custom Hook.
- Derived values should not be stored unnecessarily.
- Hooks must always be called at the top level.

## Verification

- [x] Dashboard integration tested
- [x] Theme switching tested
- [x] Online/offline status tested
- [x] Registration validation tested
- [x] Stale closure fixed
- [x] Effect cleanup reviewed
- [x] ESLint passed
- [x] TypeScript check passed
- [x] Production build passed

## Learning Outcome

Completed the Week 5 React Hooks architecture review, applying state ownership, effects, cleanup, Context, reducers, refs, and custom Hooks in a practical dashboard.
