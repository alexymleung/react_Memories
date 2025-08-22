import "../../css/Karen.css";
import { KarenData } from "../../data/KH/karendata";
import { KarenPhotosData } from "../../data/KH/karenphotosdata";
import KarenNavbar from "../../ui/KarenNavbar";
import PhotosPage from "../../components/PhotosPage";

function KarenSports() {
  const { karenheader } = KarenData();
  const { karenPhotosPlates } = KarenPhotosData();

  return (
    <PhotosPage
      headerData={karenheader}
      photosPlates={karenPhotosPlates}
      SubNavbar={KarenNavbar}
      cssClass="karen"
    />
  );
}

export default KarenSports;
