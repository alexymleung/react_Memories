import PersonPage from "../../components/PersonPage";
import CaraNavbar from "../../ui/CaraNavbar";
import { CaraData } from "../../data/CR/caradata";
import { CaraSportsData } from "../../data/CR/carasportsdata";
import "../../css/Cara.css";

function CaraSports() {
  const { caraheader } = CaraData();
  const { carasportsarticle, carasportssection } = CaraSportsData();

  return (
    <PersonPage
      headerData={caraheader}
      articleData={carasportsarticle}
      sectionData={carasportssection}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default CaraSports;
