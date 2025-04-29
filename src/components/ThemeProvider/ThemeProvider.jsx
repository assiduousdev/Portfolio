import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

//TODO: Use enums for handling themes once migrated to TS

function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState("light");

  useEffect(function() {
    document.querySelector("body").dataset.theme = activeTheme;
  }, [activeTheme]);
  
  const themeManager = {
    toLight: function() {
      setActiveTheme("light");
    },
    toDark: function() {
      setActiveTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme: activeTheme, themeManager }}>
      { children }
    </ThemeContext.Provider>
  )
}

function useTheme() {
  return useContext(ThemeContext);
} 

export { ThemeProvider as default, useTheme }
