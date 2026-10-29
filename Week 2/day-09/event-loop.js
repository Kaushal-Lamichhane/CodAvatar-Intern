
console.log("A: Start");

setTimeout(() => {
    console.log("B: Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("C: Promise");
});

console.log("D: End");
