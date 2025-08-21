import PersonPage from "../components/PersonPage";
import JonNavbar from "../ui/JonNavbar";
import { JonData } from "../data/JL/jondata";
import "../css/Jonathan.css";

function Jonathan() {
  const { jonheader, joninfoarticle, joninfosection } = JonData();
  return (
    <PersonPage
      headerData={jonheader}
      articleData={joninfoarticle}
      sectionData={joninfosection}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default Jonathan;
