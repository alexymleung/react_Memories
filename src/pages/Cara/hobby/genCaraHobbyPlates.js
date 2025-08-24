import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraHobbyData } from "../../../data/CR/carahobbydata";
import CaraNavbar from "../../../ui/CaraNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraHobbyPLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { carahobbyplates } = CaraHobbyData();
  const plateData = carahobbyplates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = carahobbyplates.length;

  return (
    <PhotoPage
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

export default CaraHobbyPLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 6; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `CaraHobby${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated CaraHobby${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Cara/hobby
//  node genCaraHobbyPlates.js
