# Day 14 — Runtime API Data and React Events

## 1. Objective

Learn how to validate untrusted API responses at runtime and handle React form events using TypeScript.

## 2. Concepts Learned

### Runtime API Validation
- Difference between compile-time and runtime validation.
- Using `unknown` for untrusted data.
- Creating custom type guards.
- Validating required fields and enum values.
- Using discriminated unions for success and failure results.

### React Events
- `ChangeEvent<HTMLInputElement>`
- `FormEvent<HTMLFormElement>`
- `event.currentTarget.value`
- `event.preventDefault()`

### React State
- Managing component data using `useState`.
- Controlled input fields.
- Displaying validation errors.
- Updating and rendering task lists.

## 3. Practical Tasks Completed

### Practical 1 — API Runtime Validation

File: `api-validation.ts`

Implemented:
- Task interface.
- Object validation.
- Status and priority validation.
- Required field validation.
- JSON response validation.
- Explicit success and failure results.

### Practical 2 — React Form and Events

Location: `react-app/src/components/TaskForm.tsx`

Implemented:
- Controlled input.
- Typed change handler.
- Typed submit handler.
- Empty and whitespace validation.
- Visible error messages.
- Task creation and display.

### Practical 3 — Rejected Data Evidence

File: `REJECTED-DATA.md`

Documented valid and invalid API response tests.

## 4. Verification

API validation:

```powershell
npx tsx .\api-validation.ts
npx tsc --noEmit --strict --target ES2020 --module commonjs .\api-validation.ts
```

React application:

```powershell
cd react-app
npm install
npm run dev
npm run build
```

Both API validation and React production build completed successfully.

## 5. Acceptance Checklist

- [x] Validate essential API response fields.
- [x] Reject missing fields.
- [x] Reject unexpected enum values.
- [x] Avoid unsafe type assertions.
- [x] Type React input change events.
- [x] Type React form submission events.
- [x] Handle empty form submissions.
- [x] Display validation errors.
- [x] Display submitted tasks.
- [x] Verify production build.

## 6. Project Structure

```text
day-14/
├── api-validation.ts
├── lesson14.ts
├── README.md
├── REJECTED-DATA.md
└── react-app/
    ├── src/
    │   ├── components/
    │   │   └── TaskForm.tsx
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    ├── package-lock.json
    └── vite.config.ts
```

## 7. Conclusion

Day 14 provided practical experience with runtime API validation, TypeScript type guards, React state management, and typed form events.

The exercises demonstrated how to safely validate external data and build a functional React form with TypeScript.