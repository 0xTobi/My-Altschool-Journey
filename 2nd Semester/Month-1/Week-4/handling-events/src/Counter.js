import React, { useState } from "react";

// Render
function Counter() {
  // React built in function to store data.
  const [count, setCount] = useState(0);

  //  Function to handle increment
  function handleIncrement() {
    setCount((prev) => prev + 1);
    console.log(count);
  }

  // Function to handle decrement
  function handleDecrement() {
    setCount((prev) => prev - 1);
    console.log(count);
  }

  // Render...
  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="count-btn" onClick={handleIncrement}>
        +
      </button>
      <button className="count-btn" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
