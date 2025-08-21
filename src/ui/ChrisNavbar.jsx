import "../css/Navbar.css";
import SubNavList from "./SubNavList";
import { navdata } from "../data/navdata";

const ChrisNavbar = () => {
  return (
    <div className="chrisNav">
      <ul className="subUlNav chrisUlNav">
        {navdata("chris", "chris").map((listItem) => {
          return <SubNavList key={listItem.id} {...listItem} />;
        })}
      </ul>
    </div>
  );
};

export default ChrisNavbar;
