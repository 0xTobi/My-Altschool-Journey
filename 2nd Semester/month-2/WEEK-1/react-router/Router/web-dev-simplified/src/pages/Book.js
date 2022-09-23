import { useLocation, useParams } from "react-router-dom";

export default function Book() {
  // The useParams hook returns an object that has all of the custom parameters
  const { id } = useParams();
  console.log(useParams());
  console.log(useLocation());
  
  return <h1>Book {id} </h1>;
}
