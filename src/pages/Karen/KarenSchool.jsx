import PersonPage from "../../components/PersonPage";
import KarenNavbar from "../../ui/KarenNavbar";
import { KarenData } from "../../data/KH/karendata";
import { KarenSchoolData } from "../../data/KH/karenschooldata";
import "../../css/Karen.css";

function KarenSchool() {
  const { karenheader } = KarenData();
  const { karenschoolarticle, karenschoolsection } = KarenSchoolData();

  return (
    <PersonPage
      headerData={karenheader}
      articleData={karenschoolarticle}
      sectionData={karenschoolsection}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default KarenSchool;
