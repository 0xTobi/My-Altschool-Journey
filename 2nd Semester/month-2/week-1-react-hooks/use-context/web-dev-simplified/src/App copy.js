import React, { useState, createContext } from "react";
import ClassContextComponent from "./ClassContextComponent copy";
import FunctionContextComponent from "./FunctionContextComponent copy";
import { ThemeProvider } from "./ThemeContext";

// Invoke the createContext function and store it inside ThemeContext.
export const ThemeContext = createContext();

export default function App() {
  // A darkTheme state with initial value set to true.
  const [darkTheme, setDarkTheme] = useState(true);

  // This function is responsible for toggling the theme
  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme);
  }

  return (
    <div>
      {/* Wrap every component that will have access to the ThemeContext prop inside the ThemeContext.Provider. 
      This makes the alues in the ThemeContext available to all the children components */}
      <ThemeContext.Provider value={darkTheme}>
        {/* This button invokes the toggleTheme function */}
        <button onClick={toggleTheme}>Toggle Theme</button>
        {/* These components are the consumers of the ThemeContext. 
        They require the darkTheme value which is stored in the ThemeContext*/}
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}

