import type { Task } from '../types/task'

type TaskListProps = {
  tasks: Task[]
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <section>
      <h2>Task Results</h2>

      <p>Showing {tasks.length} tasks</p>

      <ul>
        {tasks.slice(0, 50).map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            {' — '}
            {task.status}
            {' — '}
            {task.priority}
          </li>
        ))}
      </ul>

      {tasks.length > 50 && (
        <p>Showing the first 50 results only.</p>
      )}
    </section>
  )
}

export default TaskList