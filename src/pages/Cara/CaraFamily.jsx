import PersonPage from "../../components/PersonPage";
import CaraNavbar from "../../ui/CaraNavbar";
import { CaraData } from "../../data/CR/caradata";
import "../../css/Cara.css";
import { CaraFamilyData } from "../../data/CR/carafamilydata";

function CaraFamily() {
  const { caraheader } = CaraData();
  const { carafamilyarticle, carafamilysection } = CaraFamilyData();

  return (
    <PersonPage
      headerData={caraheader}
      articleData={carafamilyarticle}
      sectionData={carafamilysection}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default CaraFamily;
