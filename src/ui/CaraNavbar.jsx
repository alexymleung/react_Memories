import { NavLink } from "react-router-dom";
import "./CaraNavbar.css";

const CaraNavbar = () => {
  return (
    <div className="caraNav">
      <ul className="caraUlNav">
        <li>
          <NavLink to="/cara/caraintro">Introduction</NavLink>
        </li>
        <li>
          <NavLink to="/cara/carafamily">Family</NavLink>
        </li>
        <li>
          <NavLink to="/cara/caraschool">School</NavLink>
        </li>
        <li>
          <NavLink to="/cara/caramusic">Music</NavLink>
        </li>
        <li>
          <NavLink to="/cara/carasports">Sports</NavLink>
        </li>
        <li>
          <NavLink to="/cara/carahobby">Hobby</NavLink>
        </li>
        <li>
          <NavLink to="/cara/caralinks">Links</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CaraNavbar;
