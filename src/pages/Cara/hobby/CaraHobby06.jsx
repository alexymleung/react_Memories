import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraHobbyData } from "../../../data/CR/carahobbydata";
import CaraNavbar from "../../../ui/CaraNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraHobby06() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { carahobbyplates } = CaraHobbyData();
  const plateData = carahobbyplates.find((plate) => plate.plate === "plate06");
  const photoNo = carahobbyplates.length;

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

export default CaraHobby06;
