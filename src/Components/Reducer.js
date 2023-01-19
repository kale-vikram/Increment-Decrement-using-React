import React, { useReducer } from "react";
import "./Reducer.css";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = state + 1);
    case "DECREMENT":
      return (state = state - 1);
    case "MULTIPLY":
      return (state = state * 2);
    case "DIVISION":
      return (state = state / 2);
    case "MODULE":
      return (state = state % 1.5);
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="center_div">
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "MULTIPLY" })}>MULTIPLY</button>
      <button onClick={() => dispatch({ type: "DIVISION" })}>DIVISION</button>
      <button onClick={() => dispatch({ type: "MODULE" })}>MODULE</button>
    </div>
  );
};

export default Reducer;
