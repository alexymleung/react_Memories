import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="mainNav">
      <ul id="mainulnav">
        <li>
          <NavLink to="/jonathan/jonintro">Jonathan</NavLink>
        </li>
        <li>
          <NavLink to="/chris">Chris</NavLink>
        </li>
        <li>
          <NavLink to="/cara">Cara</NavLink>
        </li>
        <li>
          <NavLink to="/karen">Karen</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
