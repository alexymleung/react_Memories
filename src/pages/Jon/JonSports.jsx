import PersonPage from "../../components/PersonPage";
import JonNavbar from "../../ui/JonNavbar";
import { JonData } from "../../data/JL/jondata";
import { JonSportsData } from "../../data/JL/jonsportsdata";
import "../../css/Jonathan.css";

function JonSports() {
  const { jonheader } = JonData();
  const { jonsportsarticle, jonsportssection } = JonSportsData();

  return (
    <PersonPage
      headerData={jonheader}
      articleData={jonsportsarticle}
      sectionData={jonsportssection}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonSports;
