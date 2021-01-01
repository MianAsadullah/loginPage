import React, { useReducer } from "react";
import { Button } from "reactstrap";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterOne() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>state-{state} </div>
      <Button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </Button>
      <Button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </Button>
    </div>
  );
}

export default CounterOne;
