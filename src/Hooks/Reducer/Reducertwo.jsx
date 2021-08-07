import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { firstCounter: currentState.firstCounter + 1 };
    case "DECREMENT":
      return { firstCounter: currentState.firstCounter - 1 };
    case "RESET":
      return initialState;
    default:
      return 0;
  }
};

function Reducertwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count.firstCounter} </div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Reducertwo;
