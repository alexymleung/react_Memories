import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonLinksData } from "../../../data/JL/jonlinksdata";
import JonNavbar from "../../../ui/JonNavbar";
import LinksPage from "../../../components/LinksPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonLinksPLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonlinksplates } = JonLinksData();
  const plateData = jonlinksplates.find((plate) => plate.plate === "platePLATE_NUM");
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

export default JonLinksPLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 4; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `JonLinks${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated JonLinks${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Jon/links
//  node genLinksPlates.js
