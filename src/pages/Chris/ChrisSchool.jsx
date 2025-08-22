import PersonPage from "../../components/PersonPage";
import ChrisNavbar from "../../ui/ChrisNavbar";
import { ChrisData } from "../../data/CL/chrisdata";
import { ChrisSchoolData } from "../../data/CL/chrisschooldata";
import "../../css/Chris.css";

function ChrisSchool() {
  const { chrisheader } = ChrisData();
  const { chrisschoolarticle, chrisschoolsection } = ChrisSchoolData();

  return (
    <PersonPage
      headerData={chrisheader}
      articleData={chrisschoolarticle}
      sectionData={chrisschoolsection}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default ChrisSchool;
