import PersonPage from "../../components/PersonPage";
import KarenNavbar from "../../ui/KarenNavbar";
import { KarenData } from "../../data/KH/karendata";
import { KarenLinksData } from "../../data/KH/karenlinksdata";
import "../../css/Karen.css";

function KarenLinks() {
  const { karenheader } = KarenData();
  const { karenlinksarticle, karenlinkssection } = KarenLinksData();

  return (
    <PersonPage
      headerData={karenheader}
      articleData={karenlinksarticle}
      sectionData={karenlinkssection}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default KarenLinks;
