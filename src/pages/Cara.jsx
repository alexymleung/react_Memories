import PersonPage from "../components/PersonPage";
import CaraNavbar from "../ui/CaraNavbar";
import { CaraData } from "../data/CR/caradata";
import "../css/Cara.css";

function Cara() {
  const { carainfoheader, carainfoarticle, carainfosection } = CaraData();
  return (
    <PersonPage
      headerData={carainfoheader}
      articleData={carainfoarticle}
      sectionData={carainfosection}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default Cara;
