import PersonPage from "../../components/PersonPage";
import KarenNavbar from "../../ui/KarenNavbar";
import { KarenData } from "../../data/KH/karendata";
import { KarenSportsData } from "../../data/KH/karensportsdata";
import "../../css/Karen.css";

function KarenSports() {
  const { karenheader } = KarenData();
  const { karensportsarticle, karensportssection } = KarenSportsData();

  return (
    <PersonPage
      headerData={karenheader}
      articleData={karensportsarticle}
      sectionData={karensportssection}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default KarenSports;
