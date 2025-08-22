import "../../css/Chris.css";
import { ChrisData } from "../../data/CL/chrisdata";
import { ChrisPhotosData } from "../../data/CL/chrisphotosdata";
import ChrisNavbar from "../../ui/ChrisNavbar";
import PhotosPage from "../../components/PhotosPage";

function ChrisPhotos() {
  const { chrisheader } = ChrisData();
  const { chrisPhotosPlates } = ChrisPhotosData();

  return (
    <PhotosPage
      headerData={chrisheader}
      photosPlates={chrisPhotosPlates}
      SubNavbar={ChrisNavbar}
      cssClass="chris"
    />
  );
}

export default ChrisPhotos;
