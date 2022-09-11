import React from "react";

// The props is an object that can hold several attributes.
// The props is used to pass data from the parent component down to the child component.

// function Cars(props) {
//   console.log(props);
//   return <div className="cars">{props.brand}, and was created in {props.dop}</div>;
// }

// Props support destructuring
function Cars({data}) {
  return (
    <div className="cars">
      {data.color} {data.name}, created in {data.dop}
    </div>
  );
}

export default function RenderCars() {
  const cars = [
    {
      name: "Toyota",
      dop: "27th of April 2020",
      color: "Red",
    }, 
    {
      name: "BMW",
      dop: "27th of April 2020",
      color: "Red",
    },
    {
      name: "Audi",
      dop: "27th of April 2020",
      color: "Red",
    },
  ];

  const carList = cars.map((car) => {
    return <Cars data={car} key={car.name} />;
  });

  return <section>{carList}</section>;
}

// Component props can be destructured...
// const data = {
//     name: "Toyota",
//     dop: "27th of April 2020",
//     color: "Red"
// }

// <Cars {data}/>;
