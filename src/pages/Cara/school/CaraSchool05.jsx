import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraSchoolData } from "../../../data/CR/caraschooldata";
import CaraNavbar from "../../../ui/CaraNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraSchool05() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { caraschoolplates } = CaraSchoolData();
  const plateData = caraschoolplates.find((plate) => plate.plate === "plate05");
  const photoNo = caraschoolplates.length;

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

export default CaraSchool05;
