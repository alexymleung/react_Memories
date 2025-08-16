import { NavLink } from "react-router-dom";

const Card = ({ link, title, details }) => {
  return (
    <div className="halfbox">
      <h2>
        <NavLink to={link}>{title}</NavLink>
      </h2>
      <p>{details}</p>
    </div>
  );
};

export default Card;
