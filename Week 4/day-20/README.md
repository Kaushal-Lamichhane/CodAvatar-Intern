
# Day 20 – React Fundamentals Review

## Project Overview

A task management dashboard built with React, TypeScript, and Vite.

This project combines React components, typed props, state management, forms, lists, and event handling.

## Features

- Create tasks
- Edit task titles
- Delete tasks
- Mark tasks as completed or pending
- Filter tasks by All, Pending, and Completed
- Display contextual empty-state messages
- Validate task titles
- Display accessible form error messages
- Display success feedback after creating a task

## Technologies

- React
- TypeScript
- Vite
- ESLint

## Project Structure

```text
src/
├── components/
│   ├── TaskCard.tsx
│   ├── TaskForm.tsx
│   └── TaskLists.tsx
├── types/
│   └── task.ts
├── App.tsx
└── main.tsx
```

## Validation Rules

- Minimum title length: 5 characters
- Maximum title length: 80 characters
- Leading and trailing whitespace is removed
- The same validation rules apply when creating and editing tasks

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Create production build:

```bash
npm run build
```

## Learning Outcomes

- Creating reusable React components
- Defining TypeScript types for props and data
- Managing state with useState
- Passing props and callbacks between components
- Lifting state up
- Updating arrays immutably using map(), filter(), and spread syntax
- Rendering lists with stable keys
- Handling forms and validating user input
- Providing accessible feedback

## Current Limitations

- Tasks are not persisted after refreshing the page.
- No backend or GraphQL integration is included.
- Sorting is not implemented.

## Quality Checks

- ESLint: Passed
- TypeScript: Passed
- Vite production build: Passed
