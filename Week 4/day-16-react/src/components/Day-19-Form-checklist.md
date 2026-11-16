
# Day 19 — Controlled Forms and Validation

## Implementation
- [x] Controlled input using useState
- [x] Form submission using onSubmit
- [x] Keyboard submission support
- [x] Title validation (5–80 characters)
- [x] Field-level error messages
- [x] Submitting state
- [x] Prevent duplicate submissions
- [x] Simulated API success and failure
- [x] Clear input after success
- [x] Preserve input after failure
- [x] Connect TaskForm to Dashboard and TaskList

## Test Results

| Test | Expected Result | Status |
|---|---|---|
| Empty title | Validation error | PASS |
| Short title | Validation error | PASS |
| Valid title | Task created | PASS |
| Long title | Validation error | PASS |
| Simulated failure | Error shown, input preserved | PASS |
| Successful submission | Input cleared | PASS |
| Keyboard submission | Form submits | PASS |
| Duplicate submission | Button disabled while submitting | PASS |

## Key Concepts Learned
- Controlled components
- Form events
- Input validation
- Async/await
- Try/catch/finally
- Lifting state up
- Callback props
