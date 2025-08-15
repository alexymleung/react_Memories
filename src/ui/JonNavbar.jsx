import "./JonNavbar.css";
import NavList from "./NavList";
import { navdata } from "../data/navdata";

const JonNavbar = () => {
  return (
    <div className="jonNav">
      <ul className="jonUlNav">
        {navdata("jonathan", "jon").map((listItem) => {
          return <NavList key={listItem.id} {...listItem} />;
        })}
      </ul>
    </div>
  );
};

export default JonNavbar;
