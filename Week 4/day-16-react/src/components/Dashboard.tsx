import TaskList from "./TaskList";

function Dashboard(){
    return(
        <main>
            <header>
                <h1>TaskFlow Dashboard</h1>
                <p>Welcome to your Workspace</p>
            </header>

            <TaskList />
        </main>
    );
};

export default Dashboard;