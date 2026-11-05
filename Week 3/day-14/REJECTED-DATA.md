# Day 14 — Rejected API Data Evidence

## Objective

Test the runtime API validator with valid and invalid task responses.

The validator checks incoming data before allowing it to be used as a Task object.

## 1. Valid API Response

**Input:**
```json
{
  "id": "task-105",
  "title": "Validate real JSON",
  "status": "completed",
  "priority": "medium"
}
```

**Result:** Accepted.

The validator returned `success: true` with the validated task data.

## 2. Missing Status Field

**Input:**
```json
{
  "id": "task-101",
  "title": "Missing status",
  "priority": "high"
}
```

**Result:** Rejected.

Error: `Invalid Task Status`

## 3. Unexpected Status Value

**Input:**
```json
{
  "id": "task-102",
  "title": "Invalid status",
  "status": "started",
  "priority": "medium"
}
```

**Result:** Rejected.

Error: `Invalid Task Status`

## 4. Unexpected Priority Value

**Input:**
```json
{
  "id": "task-103",
  "title": "Invalid priority",
  "status": "pending",
  "priority": "urgent"
}
```

**Result:** Rejected.

Error: `Invalid Task Priority`

## 5. Invalid ID Type

**Input:**
```json
{
  "id": 123,
  "title": "Invalid ID",
  "status": "pending",
  "priority": "low"
}
```

**Result:** Rejected.

Error: `Task id must be string`

## Conclusion

The runtime validator successfully accepted valid task data and rejected invalid responses.

It checked:
- Required fields.
- Correct data types.
- Allowed task status values.
- Allowed priority values.

Untrusted API data was validated before being used as a Task object. No unsafe type assertion was used to bypass validation.