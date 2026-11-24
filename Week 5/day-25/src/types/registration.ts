
// Define the registration form data.
export type RegistrationData = {
  name: string
  email: string
}

// Define the complete registration state.
export type RegistrationState = {
  data: RegistrationData
  error: string | null
  submitted: boolean
}

// Define the actions that can change registration state.
export type RegistrationAction =
  | {
      type: 'UPDATE_FIELD'
      field: keyof RegistrationData
      value: string
    }
  | {
      type: 'SET_ERROR'
      message: string
    }
  | {
      type: 'SUBMIT'
    }
  | {
      type: 'RESET'
    }
