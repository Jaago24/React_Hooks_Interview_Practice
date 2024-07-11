import React, { useState } from "react";
import ContextD from "./ContextD";
import ContextB from "./ContextB";
import ContextC from "./ContextC";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

export default function ContextApp() {
  const [Component, setComponent] = useState(<ContextB />);

  const handleContext = (type) => {
    switch (type) {
      case "B":
        setComponent(<ContextB />);
        break;
      case "C":
        setComponent(<ContextC />);
        break;
      case "D":
        setComponent(<ContextD />);
        break;
      default:
        setComponent(<ContextC />);
    }
    return Component;
  };

  return (
    <div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-danger mt-2"
          onClick={() => {
            handleContext("B");
          }}
        >
          Context B
        </button>
        <button
          type="button"
          className="btn btn-warning mt-2"
          onClick={() => {
            handleContext("C");
          }}
        >
          Context C
        </button>
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={() => {
            handleContext("D");
          }}
        >
          Context D
        </button>
      </div>
      <UserContext.Provider value={"Jagadish"}>
        <AgeContext.Provider value={28}>{Component}</AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
