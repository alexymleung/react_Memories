import PersonPage from "../components/PersonPage";
import CaraNavbar from "../ui/CaraNavbar";
import CaraData from "../data/caradata";
import { useTheme } from "../context/useTheme";
import "./Cara.css";

function Cara() {
  const theme = useTheme();
  const {
    header: carainfoheader,
    article: carainfoarticle,
    section: carainfosection,
  } = CaraData(theme);
  return (
    <PersonPage
      headerData={carainfoheader}
      articleData={carainfoarticle}
      sectionData={carainfosection}
      NavbarComponent={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default Cara;
