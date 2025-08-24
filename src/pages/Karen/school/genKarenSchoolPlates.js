import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = `import "../../../css/Karen.css";
import { KarenData } from "../../../data/KH/karendata";
import { KarenSchoolData } from "../../../data/KH/karenschooldata";
import KarenNavbar from "../../../ui/KarenNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function KarenSchoolPLATE_NUM() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { karenheader } = KarenData();
  const { karenschoolplates } = KarenSchoolData();
  const plateData = karenschoolplates.find((plate) => plate.plate === "platePLATE_NUM");
  const photoNo = karenschoolplates.length;

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

export default KarenSchoolPLATE_NUM;
`;

(async () => {
  for (let i = 1; i <= 3; i++) {
    const plateNum = i.toString().padStart(2, "0");
    const content = template.replace(/PLATE_NUM/g, plateNum);

    const filePath = path.join(__dirname, `KarenSchool${plateNum}.jsx`);
    await fs.writeFile(filePath, content); // Use await here
    console.log(`Generated KarenSchool${plateNum}.jsx`);
  }

  console.log("All plate components generated!");
})();

// cd ~/Documents/memories/src/pages/Karen/school
//  node genKarenSchoolPlates.js
