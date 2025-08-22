import PersonPage from "../../components/PersonPage";
import ChrisNavbar from "../../ui/ChrisNavbar";
import { ChrisData } from "../../data/CL/chrisdata";
import "../../css/Chris.css";
import { ChrisFamilyData } from "../../data/CL/chrisfamilydata";

function ChrisFamily() {
  const { chrisheader } = ChrisData();
  const { chrisfamilyarticle, chrisfamilysection } = ChrisFamilyData();

  return (
    <PersonPage
      headerData={chrisheader}
      articleData={chrisfamilyarticle}
      sectionData={chrisfamilysection}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default ChrisFamily;
