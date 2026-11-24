
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

// Custom Hook for accessing the shared theme.
function useTheme() {
  const context = useContext(ThemeContext)

  // Prevent components from using the Hook outside ThemeProvider.
  if (context === undefined) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return context
}

export default useTheme
