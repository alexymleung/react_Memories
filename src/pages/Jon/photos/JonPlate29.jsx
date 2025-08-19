import "../../../css/Jonathan.css";
import { JonData } from "../../../data/jondata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../context/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonPlate29() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader, jonPhotosPlates } = JonData();
  const plateData = jonPhotosPlates.find((plate) => plate.plate === "plate29");
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
      cssClass="jon"
    />
  );
}

export default JonPlate29;
