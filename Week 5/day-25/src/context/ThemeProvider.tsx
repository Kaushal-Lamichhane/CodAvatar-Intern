
import { useState } from 'react'
import type { ReactNode } from 'react'
import ThemeContext from './ThemeContext'
import type { Theme } from './ThemeContext'

// Define the children accepted by ThemeProvider.
type ThemeProviderProps = {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  // ThemeProvider owns the shared theme state.
  const [theme, setTheme] = useState<Theme>('light')

  // Switch between light and dark themes.
  function toggleTheme() {
    setTheme((previousTheme) =>
      previousTheme === 'light' ? 'dark' : 'light'
    )
  }

  // Provide the theme and toggle function to child components.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
