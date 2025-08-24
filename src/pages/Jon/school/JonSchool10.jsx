import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonSchoolData } from "../../../data/JL/jonschooldata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonSchool10() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonschoolplates } = JonSchoolData();
  const plateData = jonschoolplates.find((plate) => plate.plate === "plate10");
  const photoNo = jonschoolplates.length;

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

export default JonSchool10;
