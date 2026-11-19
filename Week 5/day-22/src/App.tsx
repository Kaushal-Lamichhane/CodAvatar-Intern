import { useEffect, useState } from "react";

function App() {

  // Store the username in React state
  const [username, setUsername] = useState("kaushal");

  //stores the number of seconds elapsed
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 // Synchronize the browser tab title whenever username changes 
  useEffect(()=>{
    document.title = `${username}'s TaskFlow`;
  },[username]); // Re-run the effect when username changes

  useEffect(()=>{

    // do not create timer when the user has stopped it 
    if(!isRunning){
      return;
    }

     // Run this callback every 1000 milliseconds (1 second)
    const timer = setInterval(()=>{
      setSeconds((previousSeconds)=> previousSeconds + 1);
    }, 1000);

    // cleanup: stop the timer when the component unmounts
    return()=>{
      clearInterval(timer);
    };
  }, [isRunning]); // empty array: no dependency changes needed

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    //Listen for browser resize events
    window.addEventListener("resize", handleResize);
    console.log("hello");

    //cleanup : remove the listener when the effect is cleaned up 
    return() =>{
      window.removeEventListener("resize", handleResize);
    };
  },[] ); //setup the listener once when the componenet mounts

  return (
    <main>
      <h1>TaskFlow Effect Practice</h1>
      <p>Day 22 — React useEffect and Cleanup</p>

      {/* Display the current username */}
      <h2>Welcome, {username}!</h2>

      {/* Update username whenever the user types */}
      <input type="text"
       value={username}
        onChange={(event)=> setUsername(event.target.value)}
      />

      {/* Display the elapsed time */}
      <h2>Timer: {seconds} seconds</h2>

      <button onClick={()=> setIsRunning(true)}> Start timer </button>
      <button onClick={()=> setIsRunning(false)}> Stop timer </button>

      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
      <p>Browser Width: {windowWidth}</p>
    </main>
  );
}

export default App;
