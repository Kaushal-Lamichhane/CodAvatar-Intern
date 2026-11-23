# Day 23 — Context and State Ownership

## Objective

Learn React Context, Provider scope, consumer updates, component rerenders, and the difference between UI state and server state.

## Project

Built a small React + TypeScript theme experiment using Context API.

### Component Structure

```text
App
└── ThemeProvider
    ├── Header
    ├── ThemePanel
    └── Footer (memoized)
```

### Implementation

- Created `ThemeContext` using `createContext`.
- Defined a TypeScript `Theme` type with `"light"` and `"dark"` values.
- Created `ThemeProvider` to own theme state using `useState`.
- Shared the current theme and `toggleTheme` function through Context.
- Used `useContext` in Header and ThemePanel.
- Used `React.memo` to optimize Footer.

### Provider and Consumer

- ThemeProvider owns the theme state.
- ThemeContext.Provider shares the value.
- Header and ThemePanel consume the shared value.
- Both consumers update when the theme changes.
- Components outside the Provider receive the Context default value, if one is defined.

### Rerender Experiment

| Component | Observation after clicking theme |
|---|---|
| ThemeProvider | Rerendered |
| Header | Rerendered |
| ThemePanel | Rerendered |
| Footer | Did not rerender after memoization |

**Explanation:**

Changing the theme updates the Provider's state. Components consuming the changed Context value rerender.

Footer does not consume Context. React.memo prevents its unnecessary parent-driven rerender when its props remain unchanged.

### UI State vs Server State

| Data | Appropriate owner |
|---|---|
| Shared theme | Context |
| GraphQL tasks | Apollo Client |
| Modal visibility | Local useState |
| Local sidebar visibility | Local useState, unless shared |

Context should solve a genuine sharing requirement. It should not become a duplicate storage location for server data.

### Verification

- [x] TypeScript check: `npx tsc -b`
- [x] ESLint check: `npm run lint`
- [x] Production build: `npm run build`
- [x] Theme switching tested
- [x] Multiple Context consumers tested
- [x] Provider and consumer rerenders observed
- [x] React.memo experiment completed

## Status

Day 23 practical implementation completed.