import React, { useState } from "react";

function UseStatePrevState() {
  const initialState = 0;
  const [count, setCount] = useState(0);
  return (
    <div>
      count {count}
      {/* This method is unsafe */}
      {/* <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      {/* Any time u need to update the state based on the value of previous state value use the below method */}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default UseStatePrevState;
