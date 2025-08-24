import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonPhotosData } from "../../../data/JL/jonphotosdata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonPlatePLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonPhotosPlates } = JonPhotosData();
  const plateData = jonPhotosPlates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = jonPhotosPlates.length;

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

export default JonPlatePLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 49; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `JonPlate${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated JonPlate${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Jon/photosnod
// node genPhotoPlates.js
