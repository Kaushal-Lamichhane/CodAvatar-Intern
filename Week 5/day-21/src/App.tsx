import { useState } from "react";

type Task= {
  id: number;
  title: string;
  completed: boolean;

}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn TypeScript", completed: false },
    { id: 3, title: "Practice CSS", completed: false },
  ]);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  function handleToggle(id: number) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <main>
      <h1>Task Counter Dashboard</h1>

      <section>
        <h2>Task Summary</h2>

        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Task: {completedTasks}</p>
        <p>Pending Tasks: {pendingTasks}</p>
      </section>

      <section>
        <h2>My Tasks</h2>
            <button
              onClick={() => {
                setTasks((previousTasks) =>
                  previousTasks.map((task) => ({
                    ...task,
                    completed: true,
                  })),
                );
              }}
            >
              Mark All Completed
            </button>

        {tasks.map((task) => (
          <div key={task.id}>
            <span>{task.title}</span>
            <span>{task.completed ? "Completed" : "Pending"}</span>

            <button onClick={() => handleToggle(task.id)}>
              {task.completed ? "Mark Pending" : "Mark Completed"}
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
