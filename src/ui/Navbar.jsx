import { useTheme } from "../hooks/useTheme";
import { navname } from "../data/navdata";
import "../css/Navbar.css";
import NavList from "./NavList";

const Navbar = () => {
  const { currentTheme } = useTheme();
  const isActive = (theme) => currentTheme === theme;
  // console.log("Current theme:", currentTheme); // Debug
  // console.log("Rendered classes:", `mainNav nav-${currentTheme.name}`); // Debug
  return (
    <nav className={`mainNav nav-${currentTheme.name}`} id="mainNavDebug">
      <ul className="mainUlNav">
        {navname.map((item) => {
          return <NavList key={item.id} {...item} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
