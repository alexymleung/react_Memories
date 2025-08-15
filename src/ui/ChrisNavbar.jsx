import "./ChrisNavbar.css";
import NavList from "./NavList";
import { navdata } from "../data/navdata";

const ChrisNavbar = () => {
  return (
    <div className="chrisNav">
      <ul className="chrisUlNav">
        {navdata("chris", "chris").map((listItem) => {
          return <NavList key={listItem.id} {...listItem} />;
        })}
      </ul>
    </div>
  );
};

export default ChrisNavbar;
