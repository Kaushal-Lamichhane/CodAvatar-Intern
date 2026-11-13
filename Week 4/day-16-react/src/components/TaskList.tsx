
import TaskCard from "./TaskCard";
import {useState} from "react";


interface Task {
    id: number;
    title: string;
    completed: boolean;
}

function TaskList() {

const [selectedTaskID, setSelectedTaskID] = useState<number | null>(null); 
const [tasks, setTasks] = useState<Task[]>([
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Practice TypeScript", completed: false },
  { id: 3, title: "Build Dashboard", completed: false },
  { id: 4, title: "Learn GraphQL", completed: false },
]);

return (
    <section>
        <h2>My Tasks</h2>
        <p>Selected task ID:{selectedTaskID ?? "None"}</p>
        <button onClick={()=> setTasks([...tasks].reverse())}>Reverse tasks </button>
        {tasks.map((task) => {
            return (
            <TaskCard
            key={task.id}
            title={task.title}
            completed={task.completed}
            isSelected={selectedTaskID === task.id}
            onSelect={() => setSelectedTaskID(task.id)}
        />);
        })}
    </section>
);}

export default TaskList;
