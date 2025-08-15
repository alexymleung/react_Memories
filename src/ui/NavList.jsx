import { NavLink } from "react-router-dom";
const NavList = ({ link, innerText }) => {
  return (
    <li>
      <NavLink to={link}>{innerText}</NavLink>
    </li>
  );
};

export default NavList;
