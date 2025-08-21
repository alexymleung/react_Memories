import PersonPage from "../../components/PersonPage";
import JonNavbar from "../../ui/JonNavbar";
import { JonData } from "../../data/JL/jondata";
import { JonSchoolData } from "../../data/JL/jonschooldata";
import "../../css/Jonathan.css";

function JonSchool() {
  const { jonheader } = JonData();
  const { jonschoolarticle, jonschoolsection } = JonSchoolData();

  return (
    <PersonPage
      headerData={jonheader}
      articleData={jonschoolarticle}
      sectionData={jonschoolsection}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonSchool;
