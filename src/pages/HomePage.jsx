import Hero from "../assets/FamilyPhotoCollage231124I.webp";
import HomeNav from "../components/HomeNav";
import PhotoShow from "../components/PhotoShow";

function HomePage() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <HomeNav />
      <PhotoShow />
      <img
        src={Hero}
        alt="hero"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default HomePage;
