import PersonPage from "../../components/PersonPage";
import ChrisNavbar from "../../ui/ChrisNavbar";
import { ChrisData } from "../../data/CL/chrisdata";
import { ChrisHobbyData } from "../../data/CL/chrishobbydata";
import "../../css/Chris.css";

function ChrisHobby() {
  const { chrisheader } = ChrisData();
  const { chrishobbyarticle, chrishobbysection } = ChrisHobbyData();

  return (
    <PersonPage
      headerData={chrisheader}
      articleData={chrishobbyarticle}
      sectionData={chrishobbysection}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default ChrisHobby;
