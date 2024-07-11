  import React, { useState, useEffect } from "react";
  import Input from "./Input";
  import "./App.css";

  function App() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
      console.log("App mounted successfully");

      return () => {
          console.log("App unmounted successfully");
      };
    }, []);

    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
      setCount((prevCount) => prevCount - 1);
    };

    const handleReset = () => {
      setCount(0);
    };

    const handleInput = () => {
      setShow(!show);
    };

    return (
      <div className="App">
        <div>
          <p>Counter: {count}</p>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleInput}>{show ? "Hide" : "Show"}</button>
        </div>
        <Input />  {/* Input component is imported and used here */}
      </div>
    );
  }

  export default App;
