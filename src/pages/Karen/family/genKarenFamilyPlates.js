import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenFamilyData } from "../../../data/KH/karenfamilydata";
import KarenNavbar from "../../../ui/KarenNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenFamilyPLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenfamilyplates } = KarenFamilyData();
  const plateData = karenfamilyplates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = karenfamilyplates.length;

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

export default KarenFamilyPLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 23; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `KarenFamily${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated KarenFamily${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Karen/family
// node genKarenFamilyPlates.js
