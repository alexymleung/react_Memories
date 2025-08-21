import PersonPage from "../../components/PersonPage";
import JonNavbar from "../../ui/JonNavbar";
import { JonData } from "../../data/JL/jondata";
import { JonLinksData } from "../../data/JL/jonlinksdata";
import "../../css/Jonathan.css";

function JonLinks() {
  const { jonheader } = JonData();
  const { jonlinksarticle, jonlinkssection } = JonLinksData();

  return (
    <PersonPage
      headerData={jonheader}
      articleData={jonlinksarticle}
      sectionData={jonlinkssection}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonLinks;
