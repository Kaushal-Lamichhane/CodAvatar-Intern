

async function loadTask(){
    try{

    const response = await fetch ("./tasks.json");
    console.log("response:", response);
    
    if (!response.ok){
        console.log(response.status);
        throw new Error (`HTTP error: ${response.status}`);
    }

    const tasks = await response.json(); 
    console.log("Tasks:" ,tasks);
    } catch (error){
        console.log("could not load task:", error.message);
    }
}

loadTask();





























// async function loadTasks() {
    //     try {
    //         const response = await fetch("./tasks.jso");
    //         console.log(response);

    //         if (!response.ok) {
    //             throw new Error(`HTTP error: ${response.status}`);
    //         }

    //         const tasks = await response.json();
    //         console.log("Tasks:", tasks);
    //     } catch (error) {
    //         console.error("Could not load tasks:", error.message);
    //     }
    // }

    // loadTasks();

