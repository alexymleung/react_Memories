import "../css/Jonathan.css";
import Header from "./Header";
import HeaderNav from "./HeaderNav";
import PrevNextHandler from "./PrevNextHandler";
import { useEffect, useRef } from "react";

function LinksPage({
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
  const linksContainerRef = useRef(null);

  useEffect(() => {
    // Clean up and enhance the HTML content after it's rendered
    if (linksContainerRef.current) {
      const container = linksContainerRef.current;

      // Remove any script tags for security
      const scripts = container.querySelectorAll("script");
      scripts.forEach((script) => script.remove());

      // Fix image paths if needed
      const images = container.querySelectorAll("img");
      images.forEach((img) => {
        if (img.src.includes("../")) {
          img.src = img.src.replace("../", "/");
        }
      });

      // Make all links open in new tab
      const links = container.querySelectorAll("a");
      links.forEach((link) => {
        if (link.href && !link.href.includes("links.html")) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
      });
    }
  }, [info]);

  return (
    <>
      <div id="container" className={cssClass}>
        {/* <HeaderNav SubNavbar={SubNavbar} headerData={headerData} /> */}
        <Header pic={headerData.image} alt={headerData.alt} />

        {/* PHOTO PLATE */}
        <div className="photo-plate">
          {/* NAVIATION BUTTONS */}
          <PrevNextHandler
            name={name}
            alias={alias}
            topics={topics}
            photoNo={photoNo}
          />

          {/* DOWNLOAD LINKS */}
          <div
            ref={linksContainerRef}
            className="links-content"
            dangerouslySetInnerHTML={{ __html: info }}
          />
        </div>

        {/* <main className={`${cssClass}-main`}></main>

        <footer></footer> */}
      </div>
    </>
  );
}

export default LinksPage;
