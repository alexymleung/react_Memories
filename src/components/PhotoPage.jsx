import { useNavigate } from "react-router-dom";
import "../css/Jonathan.css";
import HeaderNav from "./HeaderNav";
import usePrevNextHandler from "../hooks/usePrevNextHandler";

function PhotoPage({
  name,
  alias,
  topics,
  headerData,
  photoPlate,
  photoNo,
  info,
  SubNavbar,
  cssClass,
}) {
  const { handlePrev, handleNext, handleUp } = usePrevNextHandler(
    name,
    alias,
    topics,
    photoNo
  );

  return (
    <>
      <div id="container" className={cssClass}>
        <HeaderNav SubNavbar={SubNavbar} headerData={headerData} />

        {/* PHOTO PLATE */}
        <div className="photo-plate">
          {/* NAVIATION BUTTONS */}
          <div className="photo-navigation">
            <button className="nav-button prev-button" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-button thumb-button" onClick={handleUp}>
              <i className="fas fa-chevron-up"></i>
            </button>
            <button className="nav-button next-button" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* PHOTO BODY */}
          <img src={photoPlate} alt="" />
          <p>{info}</p>
        </div>

        {/* <main className={`${cssClass}-main`}></main>

        <footer></footer> */}
      </div>
    </>
  );
}

export default PhotoPage;
