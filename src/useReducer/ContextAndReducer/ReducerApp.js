import React, { useReducer} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CounterContext = React.createContext();

const counterReducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state; // Return the original state if no case matches.
  }
};

export default function ReducerApp() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{countState : count, countDispatch: dispatch}}>
      <div>
        <p>Counter : {count}</p>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CounterContext.Provider>
  );
}
