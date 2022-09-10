import React from "react";

// The props is an object that can hold several attributes.
// The props is used to pass data from the parent component down to the child component.

// function Cars(props) {
//   console.log(props);
//   return <div className="cars">{props.brand}, and was created in {props.dop}</div>;
// }

// Props support destructuring
function Cars({brand, dop}) {
  console.log(brand, dop);
  return <div className="cars">{brand}, and was created in {dop}</div>;
}

export default function RenderCars() {
  return <Cars brand="tesla" dop="7th October 2006" />;
}

