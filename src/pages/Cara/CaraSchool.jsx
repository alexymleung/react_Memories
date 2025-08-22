import PersonPage from "../../components/PersonPage";
import CaraNavbar from "../../ui/CaraNavbar";
import { CaraData } from "../../data/CR/caradata";
import { CaraSchoolData } from "../../data/CR/caraschooldata";
import "../../css/Cara.css";

function CaraSchool() {
  const { caraheader } = CaraData();
  const { caraschoolarticle, caraschoolsection } = CaraSchoolData();

  return (
    <PersonPage
      headerData={caraheader}
      articleData={caraschoolarticle}
      sectionData={caraschoolsection}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default CaraSchool;
