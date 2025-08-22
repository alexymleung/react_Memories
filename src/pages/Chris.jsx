import PersonPage from "../components/PersonPage";
import ChrisNavbar from "../ui/ChrisNavbar";
import { ChrisData } from "../data/CL/chrisdata";
import "../css/Chris.css";

function Chris() {
  const { chrisheader, chrisinfoarticle, chrisinfosection } = ChrisData();
  return (
    <PersonPage
      headerData={chrisheader}
      articleData={chrisinfoarticle}
      sectionData={chrisinfosection}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default Chris;
