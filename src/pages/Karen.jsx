import PersonPage from "../components/PersonPage";
import KarenNavbar from "../ui/KarenNavbar";
import { KarenData } from "../data/KH/karendata";
import "../css/Karen.css";

function Karen() {
  const { karenheader, kareninfoarticle, kareninfosection } = KarenData();
  return (
    <PersonPage
      headerData={karenheader}
      articleData={kareninfoarticle}
      sectionData={kareninfosection}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default Karen;
