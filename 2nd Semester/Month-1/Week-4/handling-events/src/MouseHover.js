import React, { useState } from "react";

// Render
function MouseHover() {
  // Storing data with Javascript useSate hook.
  const [state, setState] = useState("Mouse outside this section");

  function handleMouseEnter(event) {
    // To show that the value passed to useState is available in the setstate. Basically the previous value.
    // setState(value => value.length);
    setState("Mouse inside this section");
  }

  function handleMouseLeave(event) {
    setState("Mouse outside this section");
  }

  //   This section will be rendered in the DOM.
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
