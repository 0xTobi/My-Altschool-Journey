import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 5000)

  function Loading() {
    return <p>Loading...</p>;
  }

  function Content() {
    return (
      <p>
        Early computers were capable of running only one program at a time. Each
        user had sole control of the machine for a scheduled period of time.
        They would arrive at the computer with program and data, often on
        punched paper cards and magnetic or paper tape, and would load their
        program, run and debug it, and carry off their output when done. As
        computers became faster the setup and takedown time became a larger
        percentage of available computer time. Programs called monitors, the
        forerunners of operating systems, were developed which could process a
        series, or "batch", of programs, often from magnetic tape prepared
        offline. The monitor would be loaded into the computer and run the first
        job of the batch. At the end of the job it would regain control and load
        and run the next until the batch was complete. Often the output of the
        batch would be written to magnetic tape and printed or punched offline.
        Examples of monitors were IBM's Fortran Monitor System, SOS Share
        Operating System, and finally IBSYS for IBM's 709x systems in
        1960.
      </p>
    );
  }

  const Output = () => loading ? <Loading /> : <Content />

  const handleIncrement = () => {
    setCount((value) => value + 1);
  };

  const handleDecrement = () => {
    setCount((value) => value - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <Output />
    </div>
  );
}

export default UseState;
