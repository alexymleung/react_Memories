import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraPhotosData } from "../../../data/CR/caraphotosdata";
import CaraNavbar from "../../../ui/CaraNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraPlate19() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { caraPhotosPlates } = CaraPhotosData();
  const plateData = caraPhotosPlates.find((plate) => plate.plate === "plate19");
  const photoNo = caraPhotosPlates.length;

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

export default CaraPlate19;
