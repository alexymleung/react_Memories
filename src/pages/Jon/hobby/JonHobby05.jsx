import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonHobbyData } from "../../../data/JL/jonhobbydata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonHobby05() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonhobbyplates } = JonHobbyData();
  const plateData = jonhobbyplates.find((plate) => plate.plate === "plate05");
  const photoNo = jonhobbyplates.length;

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

export default JonHobby05;
