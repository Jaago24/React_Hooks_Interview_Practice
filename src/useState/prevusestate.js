/*This useState demonstrates the use of direct update and functional update of setCounters */
import React, { useState } from "react";
import "./App.css";

function App() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  function handleChange1() {
    setCount(count + 1);
    console.log("handleChange1- " + count);
  }

  function handleChange2() {
    // setCount((prevCount) => prevCount + 1);
    setCount((prevState) => prevState + 1);
    console.log("handleChange2- " + count); 
  }

  function handleChange3() {
    setCount(count + 1);
    setCount(count + 1);
    console.log("handleChange3- " + count);
  }

  function handleChange4() {
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    console.log("handleChange4- " + count);
  }
  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={handleChange1}>handleChange1</button>
      <button onClick={handleChange2}>handleChange2</button>
      <button onClick={handleChange3}>handleChange3</button>
      <button onClick={handleChange4}>handleChange4</button>
    </div>
  );
}

export default App;
