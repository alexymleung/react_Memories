import { useState, useEffect } from "react";
import { themes } from "../data/themedata";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(null);

  const updateThemeFromPath = () => {
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
  };

  useEffect(() => {
    // Set initial theme
    updateThemeFromPath();

    // Listen for popstate events (browser back/forward navigation)
    const handlePopState = () => {
      updateThemeFromPath();
    };

    window.addEventListener("popstate", handlePopState);

    // Also check for route changes periodically to catch React Router navigation
    const interval = setInterval(() => {
      updateThemeFromPath();
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handlePopState);
      clearInterval(interval);
    };
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
