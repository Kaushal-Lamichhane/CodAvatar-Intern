export{};

interface Task{
    id: number;
    title: string;
}


type taskState =
| {status: "loading"}
| {status: "Success"; data: Task[] }
| {status: "error"; message: string };


function assertNever(value: never): never {
    throw new Error(`unexpected state: ${value}`);
}


const loadingState: TaskState = {
    status: "loading"
};

const successState: TaskState = {
    status: "sucess",
    data: [ 
        {id:1, title:"learn TypeScript"}
    ]
};



const errorState: TypeState = {
    status: "error",
    message: "unable to load Tasks"
};


//handle each state
function renderState(state: TaskState): string {
    switch (state.status) {
        case "loading": 
        return "loading tasks...";

        case "sucess":
            return `loaded ${state.data.length} tasks`;
        
        case "error":
            return state.message;   
            
            default:
                return assertNever(state;)
    }

}


