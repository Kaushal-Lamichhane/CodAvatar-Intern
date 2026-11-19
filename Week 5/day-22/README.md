
# Day 22 — React useEffect and Cleanup

## Objective
Understand how React useEffect synchronizes with external systems,
manages dependencies, and cleans up external processes.

## Project
TaskFlow Effect Practice Dashboard

## Concepts Practised

- useEffect and dependency arrays
- Synchronizing browser document title with React state
- Using setInterval to create a timer
- Cleaning up timers with clearInterval
- Conditional effects using isRunning state
- Browser resize event listeners
- Cleaning up event listeners with removeEventListener
- Understanding effect cleanup before re-running and on unmount
- Difference between event handlers and effects

## Features Implemented

1. Username input that updates the browser tab title.
2. Timer that increases every second.
3. Start and Stop timer controls.
4. Timer status display.
5. Live browser window width display.
6. Proper cleanup for timers and event listeners.

## Verification

- TypeScript: Passed
- ESLint: Passed
- Production build: Passed
- Manual browser testing: Passed

## Key Learnings

- Effects synchronize React with external systems.
- Dependencies determine when effects run again.
- Cleanup runs before an effect re-runs and when a component unmounts.
- Timers and event listeners require appropriate cleanup.
- User interactions should generally be handled through event handlers.
- Derived values should generally be calculated during render.

## Status

Completed
