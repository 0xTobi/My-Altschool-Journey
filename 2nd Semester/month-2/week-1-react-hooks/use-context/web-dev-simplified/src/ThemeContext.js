import React, {useContext, useState, createContext} from "react";

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
      setDarkTheme((prevTheme) => !prevTheme);
    }    

    return (
      <ThemeContext.Provider value = {darkTheme}>
        {children}
      </ThemeContext.Provider>
    )
}
