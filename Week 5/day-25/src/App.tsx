import ThemeProvider from './context/ThemeProvider'
import Dashboard from './components/Dashboard'
import StaleCounter from './components/StaleCounter'

function App() {
  return (
    // Make the shared theme available to the entire dashboard.
    <ThemeProvider>
      <Dashboard />
      <StaleCounter />
    </ThemeProvider>
  )
}

export default App