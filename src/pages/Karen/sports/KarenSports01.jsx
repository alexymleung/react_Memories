import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenSportsData } from "../../../data/KH/karensportsdata";
import KarenNavbar from "../../../ui/KarenNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenSports01() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karensportsplates } = KarenSportsData();
  const plateData = karensportsplates.find(
    (plate) => plate.plate === "plate01"
  );
  const photoNo = karensportsplates.length;

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

export default KarenSports01;
