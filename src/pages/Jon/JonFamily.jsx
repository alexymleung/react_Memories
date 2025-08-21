import PersonPage from "../../components/PersonPage";
import JonNavbar from "../../ui/JonNavbar";
import { JonData } from "../../data/JL/jondata";
import "../../css/Jonathan.css";
import { JonFamilyData } from "../../data/JL/jonfamilydata";

function JonFamily() {
  const { jonheader } = JonData();
  const { jonfamilyarticle, jonfamilysection } = JonFamilyData();

  return (
    <PersonPage
      headerData={jonheader}
      articleData={jonfamilyarticle}
      sectionData={jonfamilysection}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonFamily;
