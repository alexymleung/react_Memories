import PersonPage from "../../components/PersonPage";
import KarenNavbar from "../../ui/KarenNavbar";
import { KarenData } from "../../data/KH/karendata";
import "../../css/Karen.css";
import { KarenFamilyData } from "../../data/KH/karenfamilydata";

function KarenFamily() {
  const { karenheader } = KarenData();
  const { karenfamilyarticle, karenfamilysection } = KarenFamilyData();

  return (
    <PersonPage
      headerData={karenheader}
      articleData={karenfamilyarticle}
      sectionData={karenfamilysection}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default KarenFamily;
