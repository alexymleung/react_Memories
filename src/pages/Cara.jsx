import PersonPage from "../components/PersonPage";
import CaraNavbar from "../ui/CaraNavbar";
import { CaraData } from "../data/CR/caradata";
import "../css/Cara.css";

function Cara() {
  const { caraheader, carainfoarticle, carainfosection } = CaraData();
  return (
    <PersonPage
      headerData={caraheader}
      articleData={carainfoarticle}
      sectionData={carainfosection}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default Cara;
