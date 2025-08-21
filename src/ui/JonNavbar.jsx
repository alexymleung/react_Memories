import "../css/Navbar.css";
import SubNavList from "./SubNavList";
import { navdata } from "../data/navdata";

const JonNavbar = () => {
  return (
    <nav className="jonNav">
      <ul className="subUlNav jonUlNav">
        {navdata("jonathan", "jon").map((listItem) => {
          return <SubNavList key={listItem.id} {...listItem} />;
        })}
      </ul>
    </nav>
  );
};

export default JonNavbar;
