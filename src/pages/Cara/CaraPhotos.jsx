import "../../css/Cara.css";
import { CaraData } from "../../data/CR/caradata";
import { CaraPhotosData } from "../../data/CR/caraphotosdata";
import CaraNavbar from "../../ui/CaraNavbar";
import PhotosPage from "../../components/PhotosPage";

function CaraFamily() {
  const { caraheader } = CaraData();
  const { caraPhotosPlates } = CaraPhotosData();

  return (
    <PhotosPage
      headerData={caraheader}
      photosPlates={caraPhotosPlates}
      SubNavbar={CaraNavbar}
      cssClass="cara"
    />
  );
}

export default CaraFamily;
