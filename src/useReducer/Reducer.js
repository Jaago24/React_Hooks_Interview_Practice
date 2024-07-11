import React, {useReducer} from 'react';


const counterReducer = (state, action) =>{
    switch(action){
        case "Increment":
            return state + 1;
        case "Decrement":
            return state - 1;
        case "Reset":
            return 0;
        default:
            return state;
    }
}

export default function Reducer() {

  const [count , disptach] = useReducer(counterReducer, 0);

  return (
    <div>
        <p>Counter : {count}</p>
        <button onClick={() => {disptach("Increment")}}>Increment</button>
        <button onClick={() => {disptach("Decrement")}}>Decrement</button>
        <button onClick={() => {disptach("Reset")}}>Reset</button>
    </div>
  )
}
