import React, { useState } from "react";
import "./App.css";
import UseState from "./UseState";

function Welcome() {
  const [welcome, setWelcome] = useState(
    "Welcome User, you'll be logged in in a few minutes"
  );

  setTimeout(() => {
    setWelcome("You're logged in");
  }, 5000);

  return <h1>{welcome}</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <UseState />
    </div>
  );
}

export default App;
