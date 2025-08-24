import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useTopic } from "../hooks/useTopic";
import "../css/Navbar.css";

const NavList = ({ name }) => {
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const { currentTopic } = useTopic();
  const theme = themes[name];
  const isActive = (theme) => currentTheme === theme;
  return (
    <li>
      <NavLink
        to={`${name}/${theme.alias}${currentTopic || "info"}`}
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
