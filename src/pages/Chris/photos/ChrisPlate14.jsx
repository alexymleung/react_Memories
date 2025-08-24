import "../../../css/Chris.css";
import { ChrisData } from "../../../data/CL/chrisdata";
import { ChrisPhotosData } from "../../../data/CL/chrisphotosdata";
import ChrisNavbar from "../../../ui/ChrisNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function ChrisPlate14() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { chrisheader } = ChrisData();
  const { chrisPhotosPlates } = ChrisPhotosData();
  const plateData = chrisPhotosPlates.find(
    (plate) => plate.plate === "plate14"
  );
  const photoNo = chrisPhotosPlates.length;

  return (
    <PhotoPage
      name={currentTheme.name}
      alias={currentTheme.alias}
      topics={currentTopic}
      headerData={chrisheader}
      photoPlate={plateData.img}
      photoNo={photoNo}
      info={plateData.info}
      SubNavbar={ChrisNavbar}
      cssClass={currentTheme.alias}
    />
  );
}

export default ChrisPlate14;
