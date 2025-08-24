import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraLinksData } from "../../../data/CR/caralinksdata";
import CaraNavbar from "../../../ui/CaraNavbar";
import LinksPage from "../../../components/LinksPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraLinksPLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { caralinksplates } = CaraLinksData();
  const plateData = caralinksplates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = caralinksplates.length;

  return (
    <LinksPage
      name={currentTheme.name}
      alias={currentTheme.alias}
      topics={currentTopic}
      headerData={caraheader}
      photoPlate={plateData.img}
      photoNo={photoNo}
      info={plateData.info}
      SubNavbar={CaraNavbar}
      cssClass={currentTheme.alias}
    />
  );
}

export default CaraLinksPLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 4; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `CaraLinks${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated CaraLinks${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Cara/links
//  node genCaraLinksPlates.js
