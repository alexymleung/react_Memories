import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenMusicData } from "../../../data/KH/karenmusicdata";
import KarenNavbar from "../../../ui/KarenNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenMusic01() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenmusicplates } = KarenMusicData();
  const plateData = karenmusicplates.find((plate) => plate.plate === "plate01");
  const photoNo = karenmusicplates.length;

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

export default KarenMusic01;
