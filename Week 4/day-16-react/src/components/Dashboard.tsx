import TaskList from "./TaskList";

import { useState } from "react";

function Dashboard(){
    const [count , setCount] = useState(0);
    return(
        <section>
            <header>
                <h1>TaskFlow Dashboard</h1>
                <p>Welcome to your Workspace</p>
            </header>

            <TaskList /> 

            <h2>My counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}> Increase </button> 
        </section>
    );
};

export default Dashboard;