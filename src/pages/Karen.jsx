import PersonPage from "../components/PersonPage";
import KarenNavbar from "../ui/KarenNavbar";
import { KarenData } from "../data/KH/karendata";
import "./Karen.css";

function Karen() {
  const { kareninfoheader, kareninfoarticle, kareninfosection } = KarenData();
  return (
    <PersonPage
      headerData={kareninfoheader}
      articleData={kareninfoarticle}
      sectionData={kareninfosection}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default Karen;
