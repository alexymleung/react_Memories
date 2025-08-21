import PersonPage from "../components/PersonPage";
import ChrisNavbar from "../ui/ChrisNavbar";
import { ChrisData } from "../data/CL/chrisdata";
import "./Chris.css";

function Chris() {
  const { chrisinfoheader, chrisinfoarticle, chrisinfosection } = ChrisData();
  return (
    <PersonPage
      headerData={chrisinfoheader}
      articleData={chrisinfoarticle}
      sectionData={chrisinfosection}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default Chris;
