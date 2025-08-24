import "../../../css/Jonathan.css";
import { JonData } from "../../../data/JL/jondata";
import { JonMusicData } from "../../../data/JL/jonmusicdata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";
import { useTheme } from "../../../hooks/useTheme";
import { useTopic } from "../../../hooks/useTopic";

function JonMusic04() {
  const { currentTheme } = useTheme();
  const { currentTopic } = useTopic();
  const { jonheader } = JonData();
  const { jonmusicplates } = JonMusicData();
  const plateData = jonmusicplates.find((plate) => plate.plate === "plate04");
  const photoNo = jonmusicplates.length;

  // Check if link exists and is a valid MP3 file
  const hasAudioLink =
    plateData.link &&
    typeof plateData.link === "string" &&
    plateData.link.endsWith(".mp3");

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
      link={hasAudioLink ? plateData.link : undefined} // Pass link only if it exists and is valid
    />
  );
}

export default JonMusic04;
