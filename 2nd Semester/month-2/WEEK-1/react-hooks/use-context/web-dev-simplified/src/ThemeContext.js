// This component seperates the logic for the ThemeContext into another component.

import React, { useContext, useState, createContext } from "react";

// Here we have two different contexts, one holds the actual theme value, while the other holds the function that manipulates the value.
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

// A custom hook that returns our ThemeContext.
// This gives us easy access to the values stored in the context.
export function useTheme() {
  return useContext(ThemeContext);
}

// A custom hook that returns our ThemeUpdateContext.
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
