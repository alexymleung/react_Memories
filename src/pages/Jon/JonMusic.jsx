import PersonPage from "../../components/PersonPage";
import JonNavbar from "../../ui/JonNavbar";
import { JonData } from "../../data/JL/jondata";
import { JonMusicData } from "../../data/JL/jonmusicdata";
import "../../css/Jonathan.css";

function JonMusic() {
  const { jonheader } = JonData();
  const { jonmusicarticle, jonmusicsection } = JonMusicData();

  return (
    <PersonPage
      headerData={jonheader}
      articleData={jonmusicarticle}
      sectionData={jonmusicsection}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonMusic;
