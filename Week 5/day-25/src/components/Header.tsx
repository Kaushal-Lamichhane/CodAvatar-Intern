import useTheme from '../hooks/useTheme'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="dashboard-header">
      <div>
        <h1>Hooks Review Dashboard</h1>
        <p className="muted-text">Day 25 — React Hooks Architecture</p>
      </div>

      <button type="button" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  )
}

export default Header