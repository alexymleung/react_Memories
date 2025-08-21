import PersonPage from "../../components/PersonPage";
import JonNavbar from "../../ui/JonNavbar";
import { JonData } from "../../data/JL/jondata";
import { JonHobbyData } from "../../data/JL/jonhobbydata";
import "../../css/Jonathan.css";

function JonHobby() {
  const { jonheader } = JonData();
  const { jonhobbyarticle, jonhobbysection } = JonHobbyData();

  return (
    <PersonPage
      headerData={jonheader}
      articleData={jonhobbyarticle}
      sectionData={jonhobbysection}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonHobby;
