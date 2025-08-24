import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonSportsData } from "../../../data/JL/jonsportsdata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonSports04() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonsportsplates } = JonSportsData();
  const plateData = jonsportsplates.find((plate) => plate.plate === "plate04");
  const photoNo = jonsportsplates.length;

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

export default JonSports04;
