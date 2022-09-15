import React, {useContext, useState, createContext} from "react";

const ThemeContext = {}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
      setDarkTheme((prevTheme) => !prevTheme);
    }    
}
