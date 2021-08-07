import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>click {counter}</button>
    </div>
  );
};

export default UseState;
