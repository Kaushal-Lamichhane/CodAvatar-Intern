import { useMemo, useState } from 'react'
import { tasks } from '../data/tasks'
import TaskList from './TaskList'

function TaskDashboard() {
  // State for the search input.
  const [search, setSearch] = useState('')

  // State for switching between light and dark themes.
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Memoize filtering so theme changes don't repeat the calculation.
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <header>
        <div>
          <h1>TaskFlow Performance Dashboard</h1>
          <p>Day 26 — Profiling and Memoization</p>
        </div>

        {/* Toggle between light and dark themes. */}
        <button
          type="button"
          onClick={() =>
            setTheme((previousTheme) =>
              previousTheme === 'light' ? 'dark' : 'light'
            )
          }
        >
          Change Theme
        </button>
      </header>

      <section>
        <label htmlFor="task-search">Search tasks</label>

        <input
          id="task-search"
          type="text"
          placeholder="Search by task title..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <p>Search results: {filteredTasks.length}</p>
      </section>

      {/* Pass the filtered tasks to the TaskList component. */}
      <TaskList tasks={filteredTasks} />
    </main>
  )
}

export default TaskDashboard