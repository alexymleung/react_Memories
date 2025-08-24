import { Link } from "react-router-dom";
import "../css/HomeNav.css";

function HomeNav() {
  return (
    <nav className="home-nav">
      <Link
        to="/jonathan"
        className="home-nav-link jonathan-theme"
        data-letter="J"
      >
        Jonathan
      </Link>
      <Link to="/chris" className="home-nav-link chris-theme" data-letter="C">
        Chris
      </Link>
      <Link to="/cara" className="home-nav-link cara-theme" data-letter="C">
        Cara
      </Link>
      <Link to="/karen" className="home-nav-link karen-theme" data-letter="K">
        Karen
      </Link>
    </nav>
  );
}

export default HomeNav;
