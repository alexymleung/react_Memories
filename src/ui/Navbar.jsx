import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../context/useTheme";

const Navbar = () => {
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const isActive = (theme) => currentTheme === theme;
  console.log("Current theme:", currentTheme); // Debug
  console.log("Rendered classes:", `mainNav nav-${currentTheme.name}`); // Debug
  return (
    <div className={`mainNav nav-${currentTheme.name}`} id="mainNavDebug">
      <ul className="mainUlNav">
        <li>
          <NavLink
            to="jonathan"
            end={false}
            onClick={() => setCurrentTheme(themes.jonathan)}
            className={({ isActive }) => {
              return isActive ? "active nav-jonathan" : "nav-jonathan";
            }}
          >
            Jonathan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="chris"
            end={false}
            onClick={() => setCurrentTheme(themes.chris)}
            className={({ isActive }) =>
              isActive ? "active nav-chris" : "nav-chris"
            }
          >
            Chris
          </NavLink>
          <button
            onClick={() =>
              console.log(
                "Chris NavLink classes:",
                document.querySelector('a[href="/chris/chrisintro"]').className
              )
            }
            style={{ position: "absolute", right: 0 }}
          >
            Debug
          </button>
        </li>
        <li>
          <NavLink
            to="/cara"
            onClick={() => setCurrentTheme(themes.cara)}
            className={isActive(themes.cara) ? "active" : ""}
          >
            Cara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/karen"
            onClick={() => setCurrentTheme(themes.karen)}
            className={isActive(themes.karen) ? "active" : ""}
          >
            Karen
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
