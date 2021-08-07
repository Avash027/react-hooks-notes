import React, { useState, useEffect } from "react";

function UseEffetRender() {
  const [count, setCount] = useState(0);

  //When we use useEffect without second argument it calls the funtion everytime a component updates
  //It is similar to componentDidUpdate

  //   useEffect(() => {
  //     document.title = `Count = ${count}`;
  //   });

  //   When the variables in the array updates then only the below useEffect runs

  //     useEffect(() => {
  //       document.title = `Count = ${count}`;
  //     }, [count]);

  //When we give empty array then it acts as componenetDidMount and it will run only once

  //To make cleanup function and mimic componentDidUnMount

  useEffect(() => {
    document.title = `Count = ${count}`;

    return () => {
      //Your clean up code here
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        count {count}
      </button>
    </div>
  );
}

export default UseEffetRender;
