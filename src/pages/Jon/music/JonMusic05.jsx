import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonMusicData } from "../../../data/JL/jonmusicdata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonMusic05() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonmusicplates } = JonMusicData();
  const plateData = jonmusicplates.find((plate) => plate.plate === "plate05");
  const photoNo = jonmusicplates.length;

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

export default JonMusic05;
