import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenLinksData } from "../../../data/KH/karenlinksdata";
import KarenNavbar from "../../../ui/KarenNavbar";
import LinksPage from "../../../components/LinksPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenLinks01() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenlinksplates } = KarenLinksData();
  const plateData = karenlinksplates.find((plate) => plate.plate === "plate01");
  const photoNo = karenlinksplates.length;

  return (
    <LinksPage
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

export default KarenLinks01;
