import PersonPage from "../../components/PersonPage";
import CaraNavbar from "../../ui/CaraNavbar";
import { CaraData } from "../../data/CR/caradata";
import { CaraLinksData } from "../../data/CR/caralinksdata";
import "../../css/Cara.css";

function CaraLinks() {
  const { caraheader } = CaraData();
  const { caralinksarticle, caralinkssection } = CaraLinksData();

  return (
    <PersonPage
      headerData={caraheader}
      articleData={caralinksarticle}
      sectionData={caralinkssection}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default CaraLinks;
