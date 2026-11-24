
import { createContext } from 'react'

// Define the supported theme values.
export type Theme = 'light' | 'dark'

// Define what our Theme Context will provide.
export type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

// Create the Context.
// undefined means a component is not inside ThemeProvider.
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export default ThemeContext
