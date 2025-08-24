import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Cara.css";
import { CaraData } from "../../../data/CR/caradata";
import { CaraPhotosData } from "../../../data/CR/caraphotosdata";
import CaraNavbar from "../../../ui/CaraNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function CaraPlatePLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { caraheader } = CaraData();
  const { caraPhotosPlates } = CaraPhotosData();
  const plateData = caraPhotosPlates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = caraPhotosPlates.length;

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

export default CaraPlatePLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 48; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `CaraPlate${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated CaraPlate${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Cara/photos
// node genCaraPhotoPlates.js
