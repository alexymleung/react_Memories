import "../../css/Jonathan.css";
import { JonData } from "../../data/JL/jondata";
import { JonPhotosData } from "../../data/JL/jonphotosdata";
import JonNavbar from "../../ui/JonNavbar";
import PhotosPage from "../../components/PhotosPage";

function JonPhotos() {
  const { jonheader } = JonData();
  const { jonPhotosPlates } = JonPhotosData();

  return (
    <PhotosPage
      headerData={jonheader}
      photosPlates={jonPhotosPlates}
      SubNavbar={JonNavbar}
      cssClass="jon"
    />
  );
}

export default JonPhotos;
