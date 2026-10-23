# Day 05 — Tailwind CSS & Foundation Review

## Overview

This project is part of my frontend internship training. Day 05 focuses on connecting CSS fundamentals with Tailwind CSS utility classes and building maintainable dashboard layouts using React, TypeScript, and Vite.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- Git and GitHub

## Learning Objectives

- Understand the relationship between CSS properties and Tailwind utility classes.
- Configure Tailwind CSS with Vite and React.
- Build dashboard layouts using utility classes.
- Apply responsive design principles.
- Review Git diffs and explain layout decisions.
- Verify the project with production build and TypeScript checks.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

Clone the repository or open the project folder, then run:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production build

```bash
npm run build
```

### TypeScript check

```bash
npx tsc --noEmit
```

### Lint

```bash
npm run lint
```

## Project Structure


day-05/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── README.md
└── DESIGN.md


*The structure may differ depending on the actual project configuration.*

## Tasks

- [x] Set up and verify the React, TypeScript, Vite, and Tailwind CSS configuration.
- [x] Rebuild dashboard pattern 1 using Tailwind utilities.
- [x] Rebuild dashboard pattern 2 using Tailwind utilities.
- [x] Review spacing, alignment, and responsive behavior.
- [x] Inspect the Git diff.
- [x] Run build, TypeScript, and lint checks.
- [x] Document layout decisions in `DESIGN.md`.

## Key Learnings

- Tailwind CSS provides utility classes for styling elements directly in JSX.
- Flexbox and Grid help organize dashboard layouts.
- Responsive utility variants adapt layouts to different screen sizes.
- React components help separate UI into manageable pieces.
- Git diff helps review code changes before committing.

## Design Documentation

See [DESIGN.md](./DESIGN.md) for explanations of the dashboard patterns, layout decisions, spacing, responsiveness, and component structure.

## Acceptance Criteria

- Tailwind CSS styles render correctly.
- Both dashboard patterns are implemented.
- The production build succeeds.
- TypeScript checks pass.
- Setup and design documentation are available.

## Git Workflow


git status
git add .
git diff --cached
git commit -m "feat(day-05): complete Tailwind dashboard review"
git push


## Internship Progress

**Week 1 — Day 05:** Tailwind CSS and foundation review.


