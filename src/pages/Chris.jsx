import PersonPage from "../components/PersonPage";
import ChrisNavbar from "../ui/ChrisNavbar";
import { ChrisData } from "../data/chrisdata";
import "./Chris.css";

function Chris() {
  const { chrisinfoheader, chrisinfoarticle, chrisinfosection } = ChrisData();
  return (
    <PersonPage
      headerData={chrisinfoheader}
      articleData={chrisinfoarticle}
      sectionData={chrisinfosection}
      NavbarComponent={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default Chris;
