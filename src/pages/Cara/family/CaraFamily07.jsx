import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraFamilyData } from "../../../data/CR/carafamilydata";
import CaraNavbar from "../../../ui/CaraNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraFamily07() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { carafamilyplates } = CaraFamilyData();
  const plateData = carafamilyplates.find((plate) => plate.plate === "plate07");
  const photoNo = carafamilyplates.length;

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

export default CaraFamily07;
