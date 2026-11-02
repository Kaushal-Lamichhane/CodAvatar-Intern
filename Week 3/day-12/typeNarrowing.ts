

// type narrowing

// This causes an error because value could be a number.

// function printValue(value: string | number) {
//     console.log(value.toUpperCase());
// }


// Correct way: Narrowing using typeof 
                                                                            
function printValue(value: string | number): void{
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    } else { 
        console.log(value.toFixed(2));
    }
}

printValue("kaushal");
printValue(1526.12345);


// Technique	Example	Purpose
// typeof	    typeof value === "string"	Check primitive types
// Truthiness	if (description)	        Check whether a value is truthy
// Equality	    status === "success"	    Check exact values
// in operator	"message" in result	        Check object properties
// instanceof	value instanceof Date	    Check class instances

//suppose task description is missing then
export{};
interface Task {
    title: string;
    description?: string;
}

const tasks: Task[] = [
    {
        title: "Learn TypeScript",
        description: "Understanding interfaces"
    },
    {
        title: "Learn JavaScript"
    },
    {
        title: "Build a project",
    
    }
];

function printDescription(tasks123: Task[]): void{
    tasks123.forEach(task => {
    if(task.description){
        console.log(task.description.toUpperCase());
    } else {
        console.log("No Description Available");
    }
    })
}

printDescription(tasks);



