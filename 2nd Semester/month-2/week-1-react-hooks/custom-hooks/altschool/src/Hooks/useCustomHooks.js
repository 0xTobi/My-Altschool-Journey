// Custom hooks here
import React, {useState, useEffect} from "react"


// Create custom hook..
export default function useGetData(type) {
    // A local state variable""
    const [data, setData] = useState([]);
  
    // Update the data value when the type value changes.
    useEffect(() => {
      // Cars...
      const cars = [
        {
          name: "BMW",
          year: "2020",
          price: "$56,040",
        },
        {
          name: "Tesla",
          year: "2020",
          price: "$150,040",
        },
      ];
  
      // Books...
      const books = [
        {
          Title: "Heidi",
          year: "2020",
          price: "$20",
        },
        {
          Title: "Anne of green gables",
          year: "2001",
          price: "$75",
        },
        {
          Title: "Art of Seduction",
          year: "2012",
          price: "$75",
        },
      ];
  
      // Perform some check
      if (type === "cars") {
        setData(cars);
      } else if (type === "books") {
        setData(books);
      } else {
        setData([]);
      }
    }, [type]);
  
    // Return the data variable that has been processed.
    return data;
  }