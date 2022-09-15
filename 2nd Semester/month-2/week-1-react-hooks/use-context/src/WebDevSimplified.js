import React, { useContext, useState, createContext } from "react";
import FunctionComponent from "./FunctionContextComponent";
import ClassComponent from "./ClassContextComponent";

// Invoke the createContext function and store it inside ThemeContext.
export const ThemeContext = createContext();

export default function WebDevSimplified() {
  // A darkTheme state with initial value set to true.
  const [darkTheme, setDarkTheme] = useState(true);

  // This function is re5sponsible for toggling the theme
  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <div>
      {/* Wrap every component that will make use of the ThemeContext inside the ThemeContext.Provider. 
      This makes the alues in the ThemeContext available to all the children components */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionComponent />
        <ClassComponent />
      </ThemeContext.Provider>
    </div>
  );
}
