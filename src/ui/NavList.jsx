import { NavLink } from "react-router-dom";
import { useTheme } from "../context/useTheme";
import "./Navbar.css";

const NavList = ({ name }) => {
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const theme = themes[name];
  const isActive = (theme) => currentTheme === theme;
  return (
    <li>
      <NavLink
        to={name}
        end={false}
        onClick={() => setCurrentTheme(theme)}
        className={({ isActive }) => {
          return isActive ? `active nav-${name}` : `nav-${name}`;
        }}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavList;
