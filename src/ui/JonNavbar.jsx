import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const JonNavbar = () => {
  return (
    <div id="subNav">
      <ul id="subulnav">
        <li>
          <NavLink to="/jonathan/jonintro">Introduction</NavLink>
        </li>
        <li>
          <NavLink to="/jonathan/jonfamily">Family</NavLink>
        </li>
        <li>
          <NavLink to="/jonathan/jonschool">School</NavLink>
        </li>
        <li>
          <NavLink to="/jonathan/jonmusic">Music</NavLink>
        </li>
        <li>
          <NavLink to="/jonathan/jonsports">Sports</NavLink>
        </li>
        <li>
          <NavLink to="/jonathan/jonhobby">Hobby</NavLink>
        </li>
        <li>
          <NavLink to="/jonathan/jonlinks">Links</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default JonNavbar;
