import { NavLink } from "react-router-dom";
import ChrisNavbar from "../ui/ChrisNavbar";
import "./Chris.css";
import ChrisBanner from "../assets/CL/images/Buttons/ChrisBanner.webp";
import ChrisHero from "../assets/CL/images/fa070819_069ar.jpg";

function Chris() {
  return (
    <div id="container">
      <header>
        <img src={ChrisBanner} width="780" border="0" />
      </header>

      <main className="chris-main">
        <article className="FullHorzBox">
          <img
            src={ChrisHero}
            alt="Chris Leung"
            width="1000"
            height="1504"
            className="MainImageFull"
          />
          <div id="FullBoxText">
            <p>
              Hello, I am Leung, Kit Sze Chris. I was merrily born into this
              world in the year 2000. I am now studying in Primary three. My
              interest is playing computer games, NBA. Please feel free to
              cruise along my web pages
            </p>
          </div>
        </article>
        <section>
          <div className="halfbox">
            <h2>
              <NavLink to="/chris/chrisfamily/">My Family</NavLink>
            </h2>
            <p>
              I live with both of my parents, my elder borther Jonathan, and
              younger sister Cara.
            </p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="school/school.html">My School </a>{" "}
            </h2>
            <p>
              I study at Class 3E in S.K.H. Tin Wan Chi Nam Primary School
              located at Tin Wan, Aberdeen.
            </p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="music/music.html">My Music</a>
            </h2>
            <p>
              I like music. I love playing Cello, piano and singing Karaoke.{" "}
            </p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="Sports/sports.html">My Sports</a>{" "}
            </h2>
            <p>
              I love sports. Tennis, swimming, and soccer are all my favourite
              sports.
            </p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="hobby/hobby.html">My Hobby </a>
            </h2>
            <p>I like playing computer games, PS2, Mario, and hiking.</p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="photos/photos.html">My Photos</a>{" "}
            </h2>
            <p>Visit my photo album and share with me my precious moments.</p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="links/links.html">My Links</a>{" "}
            </h2>
            <p>
              Please go to enjoy the games and everything that's in my links.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <ChrisNavbar />
      </footer>
    </div>
  );
}

export default Chris;
