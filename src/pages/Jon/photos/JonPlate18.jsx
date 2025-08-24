import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonPhotosData } from "../../../data/JL/jonphotosdata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonPlate18() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonPhotosPlates } = JonPhotosData();
  const plateData = jonPhotosPlates.find((plate) => plate.plate === "plate18");
  const photoNo = jonPhotosPlates.length;

  return (
    <PhotoPage
      name={currentTheme.name}
      alias={currentTheme.alias}
      topics={currentTopic}
      headerData={jonheader}
      photoPlate={plateData.img}
      photoNo={photoNo}
      info={plateData.info}
      SubNavbar={JonNavbar}
      cssClass={currentTheme.alias}
    />
  );
}

export default JonPlate18;
