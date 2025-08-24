import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenFamilyData } from "../../../data/KH/karenfamilydata";
import KarenNavbar from "../../../ui/KarenNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenFamily01() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenfamilyplates } = KarenFamilyData();
  const plateData = karenfamilyplates.find(
    (plate) => plate.plate === "plate01"
  );
  const photoNo = karenfamilyplates.length;

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

export default KarenFamily01;
