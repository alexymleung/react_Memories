import PersonPage from "../components/PersonPage";
import KarenNavbar from "../ui/KarenNavbar";
import { KarenData } from "../data/karendata";
import "./Karen.css";

function Karen() {
  const { kareninfoheader, kareninfoarticle, kareninfosection } = KarenData();
  return (
    <PersonPage
      headerData={kareninfoheader}
      articleData={kareninfoarticle}
      sectionData={kareninfosection}
      NavbarComponent={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default Karen;
