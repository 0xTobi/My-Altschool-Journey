// This is to demonstrate that the way you use context when working with class components is different from the way you use it when working with function components.
// In function component we make use of "useContext"

import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function FunctionContextComponent() {
  //   This useContext takes a context as it's arguement and returns all the values specified in that context. In this case the darkTheme is the only value we specified.
  const darkTheme = useContext(ThemeContext);

  //   So now our darkTheme value is available we can use it in this component.
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={themeStyles}>Function Theme</div>;
}

