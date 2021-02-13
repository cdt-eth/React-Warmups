import React from "react";
import { useState } from "react";

const Counter = () => {
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  const [count, setCount] = useState(() => {
    console.log("ran once!");
    return 4;
  });

  return (
    <div>
      <button onClick={decrementCount}> - </button>
      <span> {count} </span>
      <button onClick={incrementCount}> + </button>
    </div>
  );
};

export default Counter;
