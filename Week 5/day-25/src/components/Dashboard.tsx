import Header from './Header'
import ConnectionStatus from './ConnectionStatus'
import RegistrationForm from './RegistrationForm'
import useTheme from '../hooks/useTheme'

function Dashboard() {
  const { theme } = useTheme()

  return (
    <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <div className="dashboard-container">
        <Header />
        <ConnectionStatus />
        <RegistrationForm />
      </div>
    </main>
  )
}

export default Dashboard