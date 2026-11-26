
import { Link, useSearchParams } from 'react-router-dom'
import { tasks } from '../data/tasks'

function Dashboard() {
  // Read and update filter values directly through the URL.
  const [searchParams, setSearchParams] = useSearchParams()

  // Get the current filter values from the URL.
  const statusFilter = searchParams.get('status') ?? 'ALL'
  const search = searchParams.get('search') ?? ''

  // Filter tasks using the current URL values.
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === 'ALL' || task.status === statusFilter

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase())

    return matchesStatus && matchesSearch
  })

  function handleStatusChange(value: string) {
    setSearchParams((previous) => {
      // Preserve other query parameters while changing the status.
      if (value === 'ALL') {
        previous.delete('status')
      } else {
        previous.set('status', value)
      }

      return previous
    })
  }

  function handleSearchChange(value: string) {
    setSearchParams(
      (previous) => {
        // Remove the search parameter when the input is empty.
        if (value.trim() === '') {
          previous.delete('search')
        } else {
          previous.set('search', value)
        }

        return previous
      },
      // Avoid creating a browser history entry for every keystroke.
      { replace: true },
    )
  }

  return (
    <section>
      <h1>Task Dashboard</h1>
      <p>Welcome to your TaskFlow dashboard.</p>

      <h2>All Tasks ({filteredTasks.length})</h2>

      {/* Search and status filters. */}
      <div>
        <label htmlFor="task-search">Search tasks: </label>
        <input
          id="task-search"
          type="text"
          placeholder="Search by task title..."
          value={search}
          onChange={(event) => handleSearchChange(event.target.value)}
        />

        <label htmlFor="status-filter"> Filter by status: </label>
        <select
          id="status-filter"
          value={statusFilter}
          onChange={(event) => handleStatusChange(event.target.value)}
        >
          <option value="ALL">All</option>
          <option value="OPEN">Open</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>

      {/* Display the filtered tasks. */}
      {filteredTasks.length === 0 ? (
        <p>No tasks match your filters.</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>Status: {task.status}</p>
              <p>Priority: {task.priority}</p>

              <Link to={`/tasks/${task.id}`}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Dashboard
