import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraMusicData } from "../../../data/CR/caramusicdata";
import CaraNavbar from "../../../ui/CaraNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraMusic01() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { caramusicplates } = CaraMusicData();
  const plateData = caramusicplates.find((plate) => plate.plate === "plate01");
  const photoNo = caramusicplates.length;

  return (
    <PhotoPage
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

export default CaraMusic01;
