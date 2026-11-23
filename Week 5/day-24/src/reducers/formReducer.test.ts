
import { describe, it, expect } from "vitest";
import { formReducer, initialFormState } from "./formReducer";

describe("formReducer", () => {
  // Test 1: Move to the next step.
  it("moves to the next step", () => {
    const nextState = formReducer(initialFormState, {
      type: "NEXT_STEP",
    });

    expect(nextState.step).toBe(2);
  });

  // Test 2: Move to the previous step.
  it("moves to the previous step", () => {
    const stepTwoState = {
      ...initialFormState,
      step: 2 as const,
    };

    const nextState = formReducer(stepTwoState, {
      type: "PREVIOUS_STEP",
    });

    expect(nextState.step).toBe(1);
  });

  // Test 3: Update the name field.
  it("updates the name field", () => {
    const nextState = formReducer(initialFormState, {
      type: "UPDATE_FIELD",
      field: "name",
      value: "Kaushal",
    });

    expect(nextState.data.name).toBe("Kaushal");
  });

  // Test 4: Set an error message.
  it("sets an error message", () => {
    const nextState = formReducer(initialFormState, {
      type: "SET_ERROR",
      message: "Name is required",
    });

    expect(nextState.error).toBe("Name is required");
  });

  // Test 5: Mark the form as submitted.
  it("marks the form as submitted", () => {
    const nextState = formReducer(initialFormState, {
      type: "SUBMIT",
    });

    expect(nextState.submitted).toBe(true);
  });

  // Test 6: Reset the form.
  it("resets the form", () => {
    const modifiedState = {
      ...initialFormState,
      step: 3 as const,
      submitted: true,
    };

    const nextState = formReducer(modifiedState, {
      type: "RESET",
    });

    expect(nextState).toEqual(initialFormState);
  });

  // Test 7: Verify that the reducer doesn't mutate previous state.
  it("does not mutate the previous state", () => {
    const previousState = initialFormState;

    const nextState = formReducer(previousState, {
      type: "UPDATE_FIELD",
      field: "name",
      value: "Kaushal",
    });

    // The original state must remain unchanged.
    expect(previousState.data.name).toBe("");

    // The new state must contain the updated value.
    expect(nextState.data.name).toBe("Kaushal");

    // The new state must be a different object.
    expect(nextState).not.toBe(previousState);

    // The nested data object must also be new.
    expect(nextState.data).not.toBe(previousState.data);
  });
});
