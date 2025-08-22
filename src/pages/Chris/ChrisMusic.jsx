import PersonPage from "../../components/PersonPage";
import ChrisNavbar from "../../ui/ChrisNavbar";
import { ChrisData } from "../../data/CL/chrisdata";
import { ChrisMusicData } from "../../data/CL/chrismusicdata";
import "../../css/Chris.css";

function ChrisMusic() {
  const { chrisheader } = ChrisData();
  const { chrismusicarticle, chrismusicsection } = ChrisMusicData();

  return (
    <PersonPage
      headerData={chrisheader}
      articleData={chrismusicarticle}
      sectionData={chrismusicsection}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default ChrisMusic;
