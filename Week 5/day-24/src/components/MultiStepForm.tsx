
import { useEffect, useReducer } from "react";
import { formReducer, initialFormState } from "../reducers/formReducer";
import useFocus from "../hooks/useFocus";

function MultiStepForm() {
  // Manage all form data and navigation through our reducer.
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  // Create a reference for each form input.
  const nameInputRef = useFocus<HTMLInputElement>();
  const emailInputRef = useFocus<HTMLInputElement>();
  const passwordInputRef = useFocus<HTMLInputElement>();

  // Focus the correct input after the form step changes.
  useEffect(() => {
    if (state.step === 1) {
      nameInputRef.current?.focus();
    }

    if (state.step === 2) {
      emailInputRef.current?.focus();
    }

    if (state.step === 3) {
      passwordInputRef.current?.focus();
    }
  // Include the refs used inside this effect.
}, [state.step, nameInputRef, emailInputRef, passwordInputRef]);

  // Validate the current step before moving forward.
  function handleNext() {
    // Validate the name.
    if (state.step === 1 && state.data.name.trim().length < 2) {
      dispatch({
        type: "SET_ERROR",
        message: "Name must contain at least 2 characters.",
      });
      return;
    }

    // Validate the email address.
    if (
      state.step === 2 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.data.email)
    ) {
      dispatch({
        type: "SET_ERROR",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Validate the password before submission.
    if (state.step === 3) {
      if (state.data.password.length < 8) {
        dispatch({
          type: "SET_ERROR",
          message: "Password must contain at least 8 characters.",
        });
        return;
      }

      // Submit the form when all fields are valid.
      dispatch({ type: "SUBMIT" });
      return;
    }

    // Move forward only after successful validation.
    dispatch({ type: "NEXT_STEP" });
  }

  // Return to the previous form step.
  function handlePrevious() {
    dispatch({ type: "PREVIOUS_STEP" });
  }

  // Update the appropriate field in reducer state.
  function handleFieldChange(
    field: "name" | "email" | "password",
    value: string
  ) {
    dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Show a success message after submission.
  if (state.submitted) {
    return (
      <main>
        <h1>Registration Complete!</h1>
        <p>Welcome, {state.data.name}.</p>
        <p>Email: {state.data.email}</p>

        {/* Reset the form so the user can start again. */}
        <button onClick={() => dispatch({ type: "RESET" })}>
          Start Again
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Multi-Step Registration Form</h1>
      <p>Step {state.step} of 3</p>

      {/* Display validation errors when present. */}
      {state.error && <p role="alert">{state.error}</p>}

      {/* Step 1: Collect the user's name. */}
      {state.step === 1 && (
        <section>
          <h2>Step 1: Your Name</h2>

          <input
            ref={nameInputRef}
            value={state.data.name}
            onChange={(event) =>
              handleFieldChange("name", event.target.value)
            }
            placeholder="Enter your name"
          />
        </section>
      )}

      {/* Step 2: Collect the user's email. */}
      {state.step === 2 && (
        <section>
          <h2>Step 2: Your Email</h2>

          <input
            ref={emailInputRef}
            type="email"
            value={state.data.email}
            onChange={(event) =>
              handleFieldChange("email", event.target.value)
            }
            placeholder="Enter your email"
          />
        </section>
      )}

      {/* Step 3: Collect the user's password. */}
      {state.step === 3 && (
        <section>
          <h2>Step 3: Your Password</h2>

          <input
            ref={passwordInputRef}
            type="password"
            value={state.data.password}
            onChange={(event) =>
              handleFieldChange("password", event.target.value)
            }
            placeholder="Enter your password"
          />
        </section>
      )}

      <div>
        {/* Show Previous only after the first step. */}
        {state.step > 1 && (
          <button onClick={handlePrevious}>Previous</button>
        )}

        <button onClick={handleNext}>
          {state.step === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </main>
  );
}

export default MultiStepForm;
