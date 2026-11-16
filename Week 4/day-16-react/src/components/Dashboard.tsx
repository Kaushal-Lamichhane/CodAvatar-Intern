import { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

function Dashboard() {
    const [count, setCount] = useState(0);

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Learn React", completed: true },
        { id: 2, title: "Practice TypeScript", completed: false },
        { id: 3, title: "Build Dashboard", completed: false },
        { id: 4, title: "Learn GraphQL", completed: false },
    ]);

    function handleCreateTask(title: string) {
        const newTask: Task = {
            id: Date.now(),
            title: title,
            completed: false,
        };

        setTasks((previousTasks) => [
            ...previousTasks,
            newTask,
        ]);
    }

    console.log("Dashboard rendered");

    return (
        <section>
            <header>
                <h1>TaskFlow Dashboard</h1>
                <p>Welcome to your Workspace</p>
            </header>

            <TaskForm onCreateTask={handleCreateTask} />

            <TaskList tasks={tasks} />

            <h2>My Counter</h2>

            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </section>
    );
}

export default Dashboard;