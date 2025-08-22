import PersonPage from "../../components/PersonPage";
import KarenNavbar from "../../ui/KarenNavbar";
import { KarenData } from "../../data/KH/karendata";
import { KarenHobbyData } from "../../data/KH/karenhobbydata";
import "../../css/Karen.css";

function KarenHobby() {
  const { karenheader } = KarenData();
  const { karenhobbyarticle, karenhobbysection } = KarenHobbyData();

  return (
    <PersonPage
      headerData={karenheader}
      articleData={karenhobbyarticle}
      sectionData={karenhobbysection}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default KarenHobby;
