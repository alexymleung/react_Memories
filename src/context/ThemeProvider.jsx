import { useState, useEffect } from "react";
import { themes } from "./themeConstants";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/chris")) {
      setCurrentTheme(themes.chris);
    } else if (path.includes("/cara")) {
      setCurrentTheme(themes.cara);
    } else if (path.includes("/karen")) {
      setCurrentTheme(themes.karen);
    } else {
      setCurrentTheme(themes.jonathan);
    }
  }, []);

  if (currentTheme === null) {
    return null; // Render nothing until theme is determined
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
