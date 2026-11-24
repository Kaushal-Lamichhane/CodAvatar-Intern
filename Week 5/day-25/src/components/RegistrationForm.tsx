import { useReducer } from 'react'
import type { FormEvent } from 'react'

import {
  initialRegistrationState,
  registrationReducer,
} from '../reducers/registrationReducer'

function RegistrationForm() {
  // useReducer manages all registration form state.
  const [state, dispatch] = useReducer(
    registrationReducer,
    initialRegistrationState
  )

  // Validate the form before submitting.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (state.data.name.trim().length < 2) {
      dispatch({
        type: 'SET_ERROR',
        message: 'Name must contain at least 2 characters.',
      })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.data.email)) {
      dispatch({
        type: 'SET_ERROR',
        message: 'Please enter a valid email address.',
      })
      return
    }

    // Tell the reducer that registration succeeded.
    dispatch({ type: 'SUBMIT' })
  }

  // Show a success message after valid submission.
  if (state.submitted) {
    return (
      <section className="rounded-xl border p-5">
        <h2 className="text-xl font-semibold mb-3">
          Registration Successful!
        </h2>

        <p>Name: {state.data.name}</p>
        <p>Email: {state.data.email}</p>

        <button
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Start Again
        </button>
      </section>
    )
  }

  return (
    <section className="rounded-xl border p-5">
      <h2 className="text-xl font-semibold mb-4">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>

          <input
            id="name"
            type="text"
            value={state.data.name}
            onChange={(event) =>
              dispatch({
                type: 'UPDATE_FIELD',
                field: 'name',
                value: event.target.value,
              })
            }
            className="w-full rounded-lg border p-2"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>

          <input
            id="email"
            type="email"
            value={state.data.email}
            onChange={(event) =>
              dispatch({
                type: 'UPDATE_FIELD',
                field: 'email',
                value: event.target.value,
              })
            }
            className="w-full rounded-lg border p-2"
            placeholder="Enter your email"
          />
        </div>

        {/* Display validation errors from reducer state. */}
        {state.error && (
          <p className="text-red-600 text-sm">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Register
        </button>
      </form>
    </section>
  )
}

export default RegistrationForm