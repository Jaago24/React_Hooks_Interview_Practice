import React, { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    /**const name = e.target.name;
    const value = e.target.value;*/
    const {name, value} = e.target;
    setUserName({...userName, [name]: value});
  };

  return (
    <div className="App">
      <form>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={userName.firstName}
          onChange={handleChange}
        />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lastName" value={userName.lastName} onChange={handleChange}/>
      </form>
      <h2>{userName.firstName}</h2>
      <h2>{userName.lastName}</h2>
    </div>
  );
}

export default App;
