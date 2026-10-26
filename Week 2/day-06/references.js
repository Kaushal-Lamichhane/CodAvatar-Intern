const originalTasks = ["Learn HTML", "Learn CSS"];

// Experiment A: Mutate the original array
originalTasks.push("Learn JavaScript");

console.log("After mutation:", originalTasks);

// Experiment B: Copy the array before adding a task
const copiedTasks = [...originalTasks];
copiedTasks.push("Build TaskFlow");

console.log("Original array:", originalTasks);
console.log("Copied array:", copiedTasks);
console.log("Same array?", originalTasks === copiedTasks);

// Assertions
assert.equal(originalTasks.length, 3);
assert.equal(copiedTasks.length, 4);
assert.notStrictEqual(originalTasks, copiedTasks);

console.log("All array tests passed!");
