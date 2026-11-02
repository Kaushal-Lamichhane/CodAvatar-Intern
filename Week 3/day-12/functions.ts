// Exercise 1
export{};

interface Task {
  id: number;
  title: string;
}

const task: Task ={
    id: 1,
    title: "learn TypeScript",
};

function getTaskTitle(tasks: Task): string {
  return tasks.title;
}



console.log("task title:", getTaskTitle(task));


//exercise 2

// Exercise 2: Optional parameters

function createTaskMessage(
  title: string,
  description?: string
): string {
    return `${title}, ${description ?? ""}`;
}

console.log(createTaskMessage("Learn TypeScript"));

console.log(
  createTaskMessage("Learn TypeScript", "Practise functions")
);


//exercise 3A

// interface User {
//     id: number;
//     name: string;
// }

// interface Admin extends User {
//     role: string;
// }

// const adminUser: Admin = {
//     id: 1,
//     name: "kaushal",
//     role: "administrator",
// }

// console.log("admin user:", adminUser);

//exercise 3b

type User = {
  id: number;
  name: string;
};

type TaskInfo = {
  title: string;
  completed: boolean;
};

type UserTask = User & TaskInfo;

const userTask: UserTask = {
    id: 2,
    name: "kaushal.l",
    title: "learn typescript",
    completed: false
};

console.log("userTask:", userTask);


// discriminated union


type loadingState = {
    status: "loading";
}

type sucessState = {
    status:"sucess";
    tasks: string[];
};

type errorState = {
    status: "error";
    message: string;
};

type TaskState = 
| loadingState
| sucessState
| errorState;

function handleTaskState(state: TaskState ): string{
    if (state.status === "loading") {
        return "loadingTask...";
    }
    else if (state.status === "sucess") {
        return `${state.tasks.length} tasks loaded`;
    }
    else {
       return state.message;
    }
};

