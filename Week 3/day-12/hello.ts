

    function add(a: number,b: number): number{
        return a+b;
    }

    const result = (add(1,2));

    console.log("result is:", result);


    function greet(name: string): void{    // void -> no useful return value
        console.log(`Hello , ${name}`);
    }

    greet("lamichhane");
    



    function greet1(name: string, message?: string): string {
  return `${message ?? "Hello"}, ${name}`;
}

console.log(greet1("kaushal", "hello"));
console.log(greet1("kaushal", "Lets meet at 2pm"));

let username: string | undefined = undefined;

console.log(username ?? "Guest");

function multiply(a: number, b: number): number {
  return a * b;
}

const m = multiply(4, 5);


export{};
interface Task {
  readonly id: number;
  title: string;
  description?: string;         // optional property
}

const myTask = {
  id: 1,
  title: "Study",
  completed: false
}; 

const task2: Task = {
    id: 2,
    title: "task 2",
    description:"true", 
}

console.log(myTask);
console.log(task2);




