import "./CaraNavbar.css";
import NavList from "./NavList";
import { navdata } from "../data/navdata";

const CaraNavbar = () => {
  return (
    <div className="caraNav">
      <ul className="caraUlNav">
        {navdata("cara", "cara").map((listItem) => {
          return <NavList key={listItem.id} {...listItem} />;
        })}
      </ul>
    </div>
  );
};

export default CaraNavbar;
