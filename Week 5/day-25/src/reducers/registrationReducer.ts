
import type {
  RegistrationState,
  RegistrationAction,
} from '../types/registration'

// Define the initial registration state.
export const initialRegistrationState: RegistrationState = {
  data: {
    name: '',
    email: '',
  },
  error: null,
  submitted: false,
}

// Calculate the next registration state from the current state and action.
export function registrationReducer(
  state: RegistrationState,
  action: RegistrationAction
): RegistrationState {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
        error: null,
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: action.message,
      }

    case 'SUBMIT':
      return {
        ...state,
        submitted: true,
        error: null,
      }

    case 'RESET':
      return initialRegistrationState

    default:
      return state
  }
}
