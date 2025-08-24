import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenHobbyData } from "../../../data/KH/karenhobbydata";
import KarenNavbar from "../../../ui/KarenNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenHobby07() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenhobbyplates } = KarenHobbyData();
  const plateData = karenhobbyplates.find((plate) => plate.plate === "plate07");
  const photoNo = karenhobbyplates.length;

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

export default KarenHobby07;
