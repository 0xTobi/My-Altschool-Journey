import "./App.css";
import React from "react";
import useGetData from "./Hooks/useCustomHooks";


function App() {
  const data = useGetData("cars");
  console.log(data)
 
  return <div className="App">
    
  </div>;
}

export default App;
