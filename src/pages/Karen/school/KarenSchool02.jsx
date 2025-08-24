import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenSchoolData } from "../../../data/KH/karenschooldata";
import KarenNavbar from "../../../ui/KarenNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenSchool02() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenschoolplates } = KarenSchoolData();
  const plateData = karenschoolplates.find(
    (plate) => plate.plate === "plate02"
  );
  const photoNo = karenschoolplates.length;

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

export default KarenSchool02;
