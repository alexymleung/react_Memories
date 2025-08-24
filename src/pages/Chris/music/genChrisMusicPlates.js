import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Chris.css";
import { ChrisData } from "../../../data/CL/chrisdata";
import { ChrisMusicData } from "../../../data/CL/chrismusicdata";
import ChrisNavbar from "../../../ui/ChrisNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function ChrisMusicPLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { chrisheader } = ChrisData();
  const { chrismusicplates } = ChrisMusicData();
  const plateData = chrismusicplates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = chrismusicplates.length;

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

export default ChrisMusicPLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 3; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `ChrisMusic${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated ChrisMusic${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Chris/music
//  node genChrisMusicPlates.js
