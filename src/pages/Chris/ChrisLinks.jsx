import PersonPage from "../../components/PersonPage";
import ChrisNavbar from "../../ui/ChrisNavbar";
import { ChrisData } from "../../data/CL/chrisdata";
import { ChrisLinksData } from "../../data/CL/chrislinksdata";
import "../../css/Chris.css";

function ChrisLinks() {
  const { chrisheader } = ChrisData();
  const { chrislinksarticle, chrislinkssection } = ChrisLinksData();

  return (
    <PersonPage
      headerData={chrisheader}
      articleData={chrislinksarticle}
      sectionData={chrislinkssection}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default ChrisLinks;
