import PersonPage from "../../components/PersonPage";
import KarenNavbar from "../../ui/KarenNavbar";
import { KarenData } from "../../data/KH/karendata";
import { KarenMusicData } from "../../data/KH/karenmusicdata";
import "../../css/Karen.css";

function KarenMusic() {
  const { karenheader } = KarenData();
  const { karenmusicarticle, karenmusicsection } = KarenMusicData();

  return (
    <PersonPage
      headerData={karenheader}
      articleData={karenmusicarticle}
      sectionData={karenmusicsection}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default KarenMusic;
