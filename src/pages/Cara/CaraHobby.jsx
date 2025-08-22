import PersonPage from "../../components/PersonPage";
import CaraNavbar from "../../ui/CaraNavbar";
import { CaraData } from "../../data/CR/caradata";
import { CaraHobbyData } from "../../data/CR/carahobbydata";
import "../../css/Cara.css";

function CaraHobby() {
  const { caraheader } = CaraData();
  const { carahobbyarticle, carahobbysection } = CaraHobbyData();

  return (
    <PersonPage
      headerData={caraheader}
      articleData={carahobbyarticle}
      sectionData={carahobbysection}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default CaraHobby;
