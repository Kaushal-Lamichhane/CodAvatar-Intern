
import useOnlineStatus from '../hooks/useOnlineStatus'

function ConnectionStatus() {
  // Get the current browser connection status.
  const isOnline = useOnlineStatus()

  return (
    <section className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
      <h2 className="font-semibold mb-2">
        Browser Connectivity
      </h2>

      {/* Display the current connection status. */}
      <div className="flex items-center gap-2">
        <span
          className={`h-3 w-3 rounded-full ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`}
        />

        <p>
          {isOnline ? 'You are online' : 'You are offline'}
        </p>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        This status updates automatically when your connection changes.
      </p>
    </section>
  )
}

export default ConnectionStatus
