
import TaskCard from "./TaskCard";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

function TaskList() {
const tasks: Task[] = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Practice TypeScript", completed: false },
  { id: 3, title: "Build Dashboard", completed: false },
  { id: 4, title: "Learn GraphQL", completed: false },
//   { id: 5, title: "Learn React", completed: "yes" }       // Error because of type safety
];

return (
    <section>
        <h2>My Tasks</h2>
        {tasks.map((task) => {
            return (
            <TaskCard
            key={task.id}
            title={task.title}
            completed={task.completed}
        />);
        })}
    </section>
);}

export default TaskList;
