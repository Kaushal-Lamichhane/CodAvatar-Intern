
import { Link, useParams } from 'react-router-dom'
import { tasks } from '../data/tasks'

function TaskDetails() {
  // Read the task ID from the current URL.
  const { taskId } = useParams()

  // Find the task that matches the URL parameter.
  const task = tasks.find((item) => item.id === Number(taskId))

  // Handle an ID that doesn't match any task.
  if (!task) {
    return (
      <section>
        <h1>Task Not Found</h1>
        <p>The requested task does not exist.</p>
        <Link to="/dashboard">Back to Dashboard</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>Task Details</h1>

      <h2>{task.title}</h2>

      <p><strong>ID:</strong> {task.id}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Priority:</strong> {task.priority}</p>

      <Link to="/dashboard">Back to Dashboard</Link>
    </section>
  )
}

export default TaskDetails
