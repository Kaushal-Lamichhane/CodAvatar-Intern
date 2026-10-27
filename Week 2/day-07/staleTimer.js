// let taskCount = 1 ;

// function scheduleLog(){
//     const capturedCount = taskCount;

//     setTimeout(() =>{
//         console.log("capturedCount:",capturedCount);
//     },1000);
// }

// scheduleLog();  
// taskCount = 2;

// console.log("Current Count:" , taskCount);


let taskCount = 1;

function scheduleLog(count) {
  setTimeout(() => {
    console.log("Passed count:", count);
  });
}

taskCount = 2;
scheduleLog(taskCount);

console.log("Current count:", taskCount);
