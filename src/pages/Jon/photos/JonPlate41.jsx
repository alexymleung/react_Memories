import "../../../css/Jonathan.css";
import { JonData } from "../../../data/jondata";
import JonNavbar from "../../../ui/JonNavbar";
import PhotoPage from "../../../components/PhotoPage";

function JonPlate41() {
  const { jonheader, jonPhotosPlates } = JonData();
  const plateData = jonPhotosPlates.find((plate) => plate.plate === "plate41");

  return (
    <PhotoPage
      headerData={jonheader}
      photoPlate={plateData.img}
      info={plateData.info}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonPlate41;
