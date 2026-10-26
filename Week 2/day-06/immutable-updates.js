
        // not changing the original value or object.


const assert = require("node:assert/strict");

const originalTask = {
    id: 1,
    title : "learn JavaScript" ,
    completed : false 
};

const updatedTask = {
    ...originalTask,
    completed : true
};

console.log("original task:", originalTask);
console.log("Updated task:", updatedTask);
console.log("same object?", originalTask === updatedTask);


assert.equal(originalTask.completed, false);
assert.equal(updatedTask.completed, true);
assert.notStrictEqual(originalTask, updatedTask);

console.log("All task transformation tests passed!");
