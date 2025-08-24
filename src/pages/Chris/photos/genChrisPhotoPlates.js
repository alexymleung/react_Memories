import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Chris.css";
import { ChrisData } from "../../../data/CL/chrisdata";
import { ChrisPhotosData } from "../../../data/CL/chrisphotosdata";
import ChrisNavbar from "../../../ui/ChrisNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function ChrisPlatePLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { chrisheader } = ChrisData();
  const { chrisPhotosPlates } = ChrisPhotosData();
  const plateData = chrisPhotosPlates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = chrisPhotosPlates.length;

  return (
    <PhotoPage
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

export default ChrisPlatePLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 42; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `ChrisPlate${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated ChrisPlate${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Chris/photos
// node genChrisPhotoPlates.js
