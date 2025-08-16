import { NavLink } from "react-router-dom";
const SubNavList = ({ link, innerText }) => {
  return (
    <li>
      <NavLink to={link}>{innerText}</NavLink>
    </li>
  );
};

export default SubNavList;
