import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Jonathan.css";
import { JonData } from "../../../data/jondata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";

function JonPlatePLATE_NUM() {
  const { jonheader, jonPhotosPlates } = JonData();
  const plateData = jonPhotosPlates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = jonPhotosPlates.length;

  return (
    <PhotoPage
      headerData={jonheader}
      photoPlate={plateData.img}
      photoNo={photoNo}
      info={plateData.info}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonPlatePLATE_NUM;
`;

for (let i = 2; i <= 49; i++) {
  const plateNum = i.toString().padStart(2, "0");
  const content = template.replace(/PLATE_NUM/g, plateNum);

  const filePath = path.join(__dirname, `JonPlate${plateNum}.jsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated JonPlate${plateNum}.jsx`);
}

console.log("All plate components generated!");
