import React, { useState } from "react";

// Render
function MouseHover() {
  const [state, setState] = useState("Mouse outside this section");

  function handleMouseEnter(event) {
    // To show that the value passed to useState is available in the setstate. Basically the previous value.
    // setState(value => value.length);
    setState("Mouse inside this section");
  }

  function handleMouseLeave(event) {
    setState("Mouse outside this section");
  }

  return (
    <div className="main-container">
      <div
        className="hover-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>{state}</h1>
      </div>
    </div>
  );
}

export default MouseHover;
