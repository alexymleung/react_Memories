import "../css/Jonathan.css";
import HeaderNav from "./HeaderNav";

import PrevNextHandler from "./PrevNextHandler";

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
  link, // Add link prop to check for MP3 files
}) {
  return (
    <>
      <div id="container" className={cssClass}>
        {/* <HeaderNav SubNavbar={SubNavbar} headerData={headerData} /> */}

        {/* PHOTO PLATE */}
        <div className="photo-plate">
          {/* NAVIATION BUTTONS */}
          <PrevNextHandler
            name={name}
            alias={alias}
            topics={topics}
            photoNo={photoNo}
          />

          {/* PHOTO BODY */}
          <p>{info}</p>
          <img src={photoPlate} alt="" />

          {/* AUDIO PLAYER FOR MP3 FILES */}
          {link && typeof link === "string" && link.endsWith(".mp3") && (
            <div className="audio-player">
              <audio
                controls
                onPlay={(e) => e.target.setAttribute("data-playing", "true")}
                onPause={(e) => e.target.removeAttribute("data-playing")}
                onEnded={(e) => e.target.removeAttribute("data-playing")}
              >
                <source src={link} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PhotoPage;
