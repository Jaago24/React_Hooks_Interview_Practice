import React, { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "reset":
      return { firstCounter: 0, secondCounter: 10 };
    default:
      return state;
  }
};

export default function CounterTwo() {
  const [count, disptach] = useReducer(counterReducer, {
    firstCounter: 0,
    secondCounter: 10,
  });

  return (
    <div>
      <p>First Counter : {count.firstCounter}</p>
      <p>Second Counter : {count.secondCounter}</p>
      <button
        onClick={() => {
          disptach({ type: "increment", value: 1 });
        }}
      >
        Increment - C1
      </button>
      <button
        onClick={() => {
          disptach({ type: "decrement", value: 1 });
        }}
      >
        Decrement - C1
      </button>
      <button
        onClick={() => {
          disptach({ type: "increment", value: 5 });
        }}
      >
        Increment - 5
      </button>
      <button
        onClick={() => {
          disptach({ type: "decrement", value: 5 });
        }}
      >
        Decrement - 5
      </button>
      <button
        onClick={() => {
          disptach({ type: "increment2", value: 1 });
        }}
      >
        Increment - C2
      </button>
      <button
        onClick={() => {
          disptach({ type: "decrement2", value: 1 });
        }}
      >
        Decrement - C2
      </button>
      <button
        onClick={() => {
          disptach({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
