import { NavLink } from "react-router-dom";
import "./KarenNavbar.css";

const KarenNavbar = () => {
  return (
    <div className="karenNav">
      <ul className="karenUlNav">
        <li>
          <NavLink to="/karen/karenintro">Introduction</NavLink>
        </li>
        <li>
          <NavLink to="/karen/karenfamily">Family</NavLink>
        </li>
        <li>
          <NavLink to="/karen/karenschool">School</NavLink>
        </li>
        <li>
          <NavLink to="/karen/karenmusic">Music</NavLink>
        </li>
        <li>
          <NavLink to="/karen/karensports">Sports</NavLink>
        </li>
        <li>
          <NavLink to="/karen/karenhobby">Hobby</NavLink>
        </li>
        <li>
          <NavLink to="/karen/karenlinks">Links</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default KarenNavbar;
