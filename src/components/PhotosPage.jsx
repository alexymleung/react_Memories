import Header from "./Header";
import { Link, Outlet } from "react-router-dom";
import HeaderNav from "./HeaderNav";

function PhotosPage({ headerData, photosPlates, SubNavbar, cssClass }) {
  return (
    <>
      <div id="container" className={cssClass}>
        <HeaderNav SubNavbar={SubNavbar} headerData={headerData} />
        {/* <Header pic={headerData.image} alt={headerData.alt} /> */}
        <div className="photo-gallery">
          {!window.location.pathname.includes("plate") && (
            <main className="photo-grid">
              {photosPlates.map((plate) => (
                <div className="thumbnail-box" key={plate.plate}>
                  <Link to={`${plate.plate}`}>
                    <img src={plate.img} alt={plate.title} />
                    <span>
                      {plate.info
                        ? plate.info.split(" ").slice(0, 3).join(" ")
                        : ""}
                    </span>
                  </Link>
                </div>
              ))}
            </main>
          )}
          <Outlet />
        </div>

        <main className={`${cssClass}-main`}></main>

        <footer></footer>
      </div>
    </>
  );
}

export default PhotosPage;
