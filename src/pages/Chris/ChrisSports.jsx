import PersonPage from "../../components/PersonPage";
import ChrisNavbar from "../../ui/ChrisNavbar";
import { ChrisData } from "../../data/CL/chrisdata";
import { ChrisSportsData } from "../../data/CL/chrissportsdata";
import "../../css/Chris.css";

function ChrisSports() {
  const { chrisheader } = ChrisData();
  const { chrissportsarticle, chrissportssection } = ChrisSportsData();

  return (
    <PersonPage
      headerData={chrisheader}
      articleData={chrissportsarticle}
      sectionData={chrissportssection}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default ChrisSports;
