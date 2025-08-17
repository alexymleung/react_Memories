import PersonPage from "../components/PersonPage";
import JonNavbar from "../ui/JonNavbar";
import { JonData } from "../data/jondata";
import "./Jonathan.css";

function Jonathan() {
  const { joninfoheader, joninfoarticle, joninfosection } = JonData();
  return (
    <PersonPage
      headerData={joninfoheader}
      articleData={joninfoarticle}
      sectionData={joninfosection}
      NavbarComponent={JonNavbar}
      cssClass="jon"
    />
  );
}

export default Jonathan;
