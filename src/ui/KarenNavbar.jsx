import { NavLink } from "react-router-dom";
import "./KarenNavbar.css";
import NavList from "./NavList";
import { navdata } from "../data/navdata";

const KarenNavbar = () => {
  return (
    <div className="karenNav">
      <ul className="karenUlNav">
        {navdata("karen", "karen").map((listItem) => {
          return <NavList key={listItem.id} {...listItem} />;
        })}
      </ul>
    </div>
  );
};

export default KarenNavbar;
