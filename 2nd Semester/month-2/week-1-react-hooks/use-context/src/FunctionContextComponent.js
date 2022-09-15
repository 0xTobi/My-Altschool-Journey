// This is to demonstrate that the way you use context when working with class components is different from the way you use it when working with function components.
// In function component we make use of "useContext"

import React, { useContext } from "react";
import { ThemeContext } from "./WebDevSimplified";

function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
}

export default FunctionContextComponent;
