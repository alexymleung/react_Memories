import "../css/Navbar.css";
import SubNavList from "./SubNavList";
import { navdata } from "../data/navdata";

const CaraNavbar = () => {
  return (
    <div className="caraNav">
      <ul className="subUlNav caraUlNav">
        {navdata("cara", "cara").map((listItem) => {
          return <SubNavList key={listItem.id} {...listItem} />;
        })}
      </ul>
    </div>
  );
};

export default CaraNavbar;
