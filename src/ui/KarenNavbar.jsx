import "../css/Navbar.css";
import SubNavList from "./SubNavList";
import { navdata } from "../data/navdata";

const KarenNavbar = () => {
  return (
    <div className="karenNav">
      <ul className="subUlNav karenUlNav">
        {navdata("karen", "karen").map((listItem) => {
          return <SubNavList key={listItem.id} {...listItem} />;
        })}
      </ul>
    </div>
  );
};

export default KarenNavbar;
