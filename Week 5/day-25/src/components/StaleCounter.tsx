import { useEffect, useState } from 'react'

function StaleCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((previouscount) => previouscount + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <section>
      <h2>Stale Closure Investigation</h2>

      <p>Count: {count}</p>
    </section>
  )
}

export default StaleCounter