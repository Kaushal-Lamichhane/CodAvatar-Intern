
import { useEffect, useState } from 'react'

function useOnlineStatus() {
  // Read the browser's current connection status.
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    // Update React state when the browser comes online.
    function handleOnline() {
      setIsOnline(true)
    }

    // Update React state when the browser goes offline.
    function handleOffline() {
      setIsOnline(false)
    }

    // Subscribe to browser connection events.
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Remove both listeners when the component unmounts.
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Return the current connection status.
  return isOnline
}

export default useOnlineStatus
