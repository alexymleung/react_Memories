import React from "react";
import { NavLink } from "react-router-dom";
import "./ChrisNavbar.css";

const ChrisNavbar = () => {
  return (
    <div className="chrisNav">
      <ul className="chrisUlNav">
        <li>
          <NavLink to="/chris/chrisintro">Introduction</NavLink>
        </li>
        <li>
          <NavLink to="/chris/chrisfamily">Family</NavLink>
        </li>
        <li>
          <NavLink to="/chris/chrisschool">School</NavLink>
        </li>
        <li>
          <NavLink to="/chris/chrismusic">Music</NavLink>
        </li>
        <li>
          <NavLink to="/chris/chrissports">Sports</NavLink>
        </li>
        <li>
          <NavLink to="/chris/chrishobby">Hobby</NavLink>
        </li>
        <li>
          <NavLink to="/chris/chrisphotos">Photos</NavLink>
        </li>
        <li>
          <NavLink to="/chris/chrislinks">Links</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ChrisNavbar;
