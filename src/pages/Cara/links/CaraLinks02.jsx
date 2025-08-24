import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraLinksData } from "../../../data/CR/caralinksdata";
import CaraNavbar from "../../../ui/CaraNavbar";
import LinksPage from "../../../components/LinksPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraLinks02() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { caralinksplates } = CaraLinksData();
  const plateData = caralinksplates.find((plate) => plate.plate === "plate02");
  const photoNo = caralinksplates.length;

  return (
    <LinksPage
      name={currentTheme.name}
      alias={currentTheme.alias}
      topics={currentTopic}
      headerData={caraheader}
      photoPlate={plateData.img}
      photoNo={photoNo}
      info={plateData.info}
      SubNavbar={CaraNavbar}
      cssClass={currentTheme.alias}
    />
  );
}

export default CaraLinks02;
