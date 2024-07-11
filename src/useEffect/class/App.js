import "./App.css";
import { useState } from "react";
import ClassCounter from "./ClassCounter";

function App() {
  const [alter, setAlter] = useState(false);

  const handleAlter = () => {
    setAlter(!alter);
  };

  return (
    <div className="App">
      <button onClick={handleAlter}>{alter ? "HideClass" : "ShowClass"}</button>
      {alter && <ClassCounter />}
    </div>
  );
}

export default App;
