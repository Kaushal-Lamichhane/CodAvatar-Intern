
import { tasks } from "./tasks.js";
import { getTasksByStatus} from "./transformation.js";
import { getTaskTitles } from "./transformation.js";
import { findTaskById } from "./transformation.js";
import { countTaskByStatus } from "./transformation.js";
import { sortTaskByPriority } from "./transformation.js";

console.log(getTasksByStatus(tasks,"todo"));
console.log(getTaskTitles(tasks));

console.log(findTaskById(tasks,3));
console.log(findTaskById(tasks,99));

console.log(countTaskByStatus(tasks));
console.log(countTaskByStatus([]));

console.log(sortTaskByPriority(tasks));
console.log("original:" ,tasks.map(task => task.priority));
console.log("sorted:" ,sortTaskByPriority(tasks).map(task=> task.priority));
console.log("empty:" ,sortTaskByPriority([]));

const task = findTaskById(tasks,3);
const {title,status,priority} = task; 

console.log(title);
console.log(status);
console.log(priority);


























// import { tasks } from "./tasks.js";

// import {
//     getTasksByStatus,
//     getTaskTitles,
//     findTaskById,
//     countTasksByStatus,
//     sortTasksByPriority
// } from "./transformation.js";

// console.log("TODO:", getTaskTitles(getTasksByStatus(tasks,"todo")));
// console.log("Missing task", findTaskById(tasks,6));
// console.log("counts:", countTasksByStatus(tasks));

// const sortedTasks = sortTasksByPriority(tasks);
// console.log("Sorted priorities:", sortedTasks.map(task => task.priority));

// console.log("original priorities:", tasks.map(task => task.priority));


