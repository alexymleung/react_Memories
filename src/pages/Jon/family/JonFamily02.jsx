import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonFamilyData } from "../../../data/JL/jonfamilydata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonFamily02() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonfamilyplates } = JonFamilyData();
  const plateData = jonfamilyplates.find((plate) => plate.plate === "plate02");
  const photoNo = jonfamilyplates.length;

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

export default JonFamily02;
