
import type { FormState, FormAction } from "../types/form";

// Starting state of our multi-step form.
export const initialFormState: FormState = {
  step: 1,
  data: {
    name: "",
    email: "",
    password: "",
  },
  error: null,
  submitted: false,
};

// The reducer calculates the next state from the current state and action.
export function formReducer(
  state: FormState,
  action: FormAction
): FormState {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
        error: null,
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: Math.min(state.step + 1, 3) as FormState["step"],
        error: null,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: Math.max(state.step - 1, 1) as FormState["step"],
        error: null,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.message,
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };

    case "SUBMIT":
      return {
        ...state,
        submitted: true,
        error: null,
      };

    case "RESET":
      return initialFormState;

    default:
      return state;
  }
}
