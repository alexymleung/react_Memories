import PersonPage from "../../components/PersonPage";
import CaraNavbar from "../../ui/CaraNavbar";
import { CaraData } from "../../data/CR/caradata";
import { CaraMusicData } from "../../data/CR/caramusicdata";
import "../../css/Cara.css";

function CaraMusic() {
  const { caraheader } = CaraData();
  const { caramusicarticle, caramusicsection } = CaraMusicData();

  return (
    <PersonPage
      headerData={caraheader}
      articleData={caramusicarticle}
      sectionData={caramusicsection}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default CaraMusic;
