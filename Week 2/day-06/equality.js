
//checking whether two values are equal.

console.log(5 === 5); // true
console.log(5 === "5"); //false
console.log(5 == "5"); // true

const firstTask = {title:"learn Javascript"};
const secondTask = {title:"learn Javascript"};
const thirdTask = firstTask;

console.log(firstTask === secondTask); // false 
console.log(firstTask === thirdTask); // true

