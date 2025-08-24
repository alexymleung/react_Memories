import "../../../css/Chris.css";
import { ChrisData } from "../../../data/CL/chrisdata";
import { ChrisLinksData } from "../../../data/CL/chrislinksdata";
import ChrisNavbar from "../../../ui/ChrisNavbar";
import LinksPage from "../../../components/LinksPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function ChrisLinks03() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { chrisheader } = ChrisData();
  const { chrislinksplates } = ChrisLinksData();
  const plateData = chrislinksplates.find((plate) => plate.plate === "plate03");
  const photoNo = chrislinksplates.length;

  return (
    <LinksPage
      name={currentTheme.name}
      alias={currentTheme.alias}
      topics={currentTopic}
      headerData={chrisheader}
      photoPlate={plateData.img}
      photoNo={photoNo}
      info={plateData.info}
      SubNavbar={ChrisNavbar}
      cssClass={currentTheme.alias}
    />
  );
}

export default ChrisLinks03;
