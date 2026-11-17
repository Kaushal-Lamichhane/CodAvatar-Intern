
import { useState } from "react";
import type {Task} from "./types/task";
import TaskList from "./components/TaskLists";
import TaskForm from "./components/TaskForm";

type Filter = "all" | "pending" | "complete" ;

function App(){
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Learn TypeScript", completed: false },
    { id: 3, title: "Practice CSS", completed: false },
  ]);

  const [filter, setFilter] = useState<Filter>("all");
  const [successMessage, setSuccessMessage] = useState("");

  const filteredTask = tasks.filter((task)=>{
    if(filter === "pending") {
      return !task.completed;
    }

    if(filter === "complete") {
      return task.completed;
    }

    return true;
  })

  function handleToggle(id: number) {
    setTasks((previousTasks) => 
    previousTasks.map((task)=>
    task.id === id
  ? {...task, completed: !task.completed}
  : task 
)
    );
  }

  function handleDelete(id: number) {
    setTasks((previousTasks)=>
    previousTasks.filter((task)=>task.id !== id)
  );
  }

  function handleAddTask(title: string){
    const newTask:Task ={
      id: Date.now(),
      title: title,
      completed: false,
    } ;
    setTasks((previousTasks)=> [...previousTasks,newTask]);

    setSuccessMessage("Task Created Sucessfully!");
  }

  function handleEdit(id: number, newTitle: string){
    setTasks((previousTasks)=>
    previousTasks.map((task)=>
    task.id === id
  ? {...task, title: newTitle} :task
)
  );  
  }

  return(
    <div>
      <h1>TaskFlow Dashboard</h1>
      <p>Manage your tasks efficiently</p>
      <TaskForm onAddTask={handleAddTask}
      onClearSuccess={() => setSuccessMessage("")}
      />

      {successMessage && (
        <p role="status">{successMessage}</p>
      )}
      
      <div>
        <button onClick={()=> setFilter("all")}>
          ALL
        </button>
        <button onClick={()=>setFilter("pending")}>
          Pending
        </button>
        <button onClick={()=> setFilter("complete")}>
          Complete
        </button>
      </div>
      <TaskList tasks={filteredTask} filter={filter} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit}/>
      
    </div>
  );
};

export default App