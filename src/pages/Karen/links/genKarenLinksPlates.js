import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenLinksData } from "../../../data/KH/karenlinksdata";
import KarenNavbar from "../../../ui/KarenNavbar";
import LinksPage from "../../../components/LinksPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenLinksPLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenlinksplates } = KarenLinksData();
  const plateData = karenlinksplates.find((plate) => plate.plate === "platePLATE_NUM");
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

export default KarenLinksPLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 1; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `KarenLinks${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated KarenLinks${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Karen/links
//  node genKarenLinksPlates.js
