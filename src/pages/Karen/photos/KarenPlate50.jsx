import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenPhotosData } from "../../../data/KH/karenphotosdata";
import KarenNavbar from "../../../ui/KarenNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenPlate50() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenPhotosPlates } = KarenPhotosData();
  const plateData = karenPhotosPlates.find(
    (plate) => plate.plate === "plate50"
  );
  const photoNo = karenPhotosPlates.length;

  return (
    <PhotoPage
      name={currentTheme.name}
      alias={currentTheme.alias}
      topics={currentTopic}
      headerData={karenheader}
      photoPlate={plateData.img}
      photoNo={photoNo}
      info={plateData.info}
      SubNavbar={KarenNavbar}
      cssClass={currentTheme.alias}
    />
  );
}

export default KarenPlate50;
