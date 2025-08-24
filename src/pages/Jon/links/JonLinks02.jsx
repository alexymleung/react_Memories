import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonLinksData } from "../../../data/JL/jonlinksdata";
import JonNavbar from "../../../ui/JonNavbar";
import LinksPage from "../../../components/LinksPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonLinks02() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonlinksplates } = JonLinksData();
  const plateData = jonlinksplates.find((plate) => plate.plate === "plate02");
  const photoNo = jonlinksplates.length;

  return (
    <LinksPage
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

export default JonLinks02;
