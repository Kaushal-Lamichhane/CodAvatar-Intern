# Day 07 — Functions, Scope, and Closures

## Concepts Learned
- **Lexical scope:** Inner functions can access variables in their outer scope.
- **Closures:** Functions retain access to variables from the scope where they were created.
- **Independent closures:** Each call to `createCounter()` creates a separate `count` variable.
- **Callbacks and timers:** `setTimeout()` schedules a callback to run later.
- **Passing data explicitly:** Function parameters make the data used by a callback clearer.

## Experiments Completed

### 1. Closure-based counters

Predicted and verified output:

```text
1
2
1
3
2
```

`counterA` and `counterB` maintain independent counts.

### 2. Stale timer

Predicted and verified output:

```text
Current count: 2
capturedCount: 1
```

The `capturedCount` constant stored the earlier value.

### 3. Explicit data passing

Predicted and verified output:

```text
Current count: 2
Passed count: 2
```

Passing `taskCount` into `scheduleLog(count)` made the value used by the callback explicit.

### 4. Lexical scope

Verified that an inner function can access a variable declared in its outer function.

## Acceptance Check
- [x] Predicted outputs before running code.
- [x] Built independent closure-based counters.
- [x] Explained lexical scope and captured values.
- [x] Compared a stored value with explicitly passed data.

## Files
- `closure.js`
- `staleTimer.js`

## Reflection
Closures retain access to their lexical environment. They do not automatically freeze every variable's value. A copied primitive value, such as `capturedCount`, remains unchanged when the original variable changes.
