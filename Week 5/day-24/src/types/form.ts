
// The form has three steps.
export type FormStep = 1 | 2 | 3;

// All information collected from the user.
export type FormData = {
  name: string;
  email: string;
  password: string;
};

// The complete state managed by useReducer.
export type FormState = {
  step: FormStep;
  data: FormData;
  error: string | null;
  submitted: boolean;
};

// Actions describe what happened in the form.
export type FormAction =
  | {
      type: "UPDATE_FIELD";
      field: keyof FormData;
      value: string;
    }
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | { type: "SET_ERROR"; message: string }
  | { type: "CLEAR_ERROR" }
  | { type: "SUBMIT" }
  | { type: "RESET" };
