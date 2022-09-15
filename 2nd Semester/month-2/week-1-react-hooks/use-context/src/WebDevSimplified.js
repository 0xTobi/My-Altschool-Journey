import React, { useContext, useState, createContext } from "react";
import FunctionComponent from "./FunctionContextComponent";
import ClassComponent from "./ClassContextComponent";

// Invoke the createContext function and store it inside ThemeContext.
export const ThemeContext = createContext();

export default function WebDevSimplified() {
  // A darkTheme state with initial value set to true.
  const [darkTheme, setDarkTheme] = useState(true);

  // This function is responsible for toggling the theme
  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <div>
      {/* Wrap every component that will have access to the ThemeContext prop inside the ThemeContext.Provider. 
      This makes the alues in the ThemeContext available to all the children components */}
      <ThemeContext.Provider value={darkTheme}>
        
        {/* This button invokes the toggleTheme function */}
        <button onClick={toggleTheme}>Toggle Theme</button>
        
        {/* These two components also do the same thing. Toggle the theme. */}
        <FunctionComponent />
        <ClassComponent />

      </ThemeContext.Provider>
    </div>
  );
}
