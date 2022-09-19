import "./App.css";
import React from "react";
import useGetData from "./Hooks/useCustomHooks";

function App() {
  const data = useGetData("cars");

  return (
    <div className="App">
      {data.map((car) => {
        return (
          <div className="car-container">
            <div key={car.name} className = "car-card">
              <h1>Car Details</h1>
              <p>{car.name}</p>
              <p>{car.year}</p>
              <p>{car.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
