import Navbar from "../ui/Navbar";
import ChrisNavbar from "../ui/ChrisNavbar";
import "./Chris.css";
import ChrisBanner from "../assets/CL/images/Buttons/ChrisBanner.jpg";
import ChrisHero from "../assets/CL/images/fa081001_419ar.jpg";

function Chris() {
  return (
    <div id="container">
      <div id="top">
        <a href="index.html">
          <img src={ChrisBanner} width="780" border="0" />
        </a>
        {/* <div id="nav">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="family/family.html">Family</a>
            </li>
            <li>
              <a href="school/school.html">School</a>
            </li>
            <li>
              <a href="music/music.html">Music</a>
            </li>
            <li>
              <a href="Sports/sports.html">Sports</a>
            </li>
            <li>
              <a href="hobby/hobby.html">Hobby</a>
            </li>
            <li>
              <a href="photos/photos.html">Photos</a>
            </li>
            <li>
              <a href="links/links.html">Links</a>{" "}
            </li>
          </ul>
        </div> */}
      </div>

      <div id="main">
        <div id="FullHorzBox">
          <img
            src={ChrisHero}
            alt="Chris Leung"
            width="1000"
            height="1504"
            className="MainImageFull"
          />
          <div id="FullBoxText">
            <p>
              Hello, I am Leung, Kit Sze Chris. Please feel free to visit my web
              site.
            </p>
          </div>
        </div>
        <div id="halfbox">
          <h2>
            <a href="family/family.html">My Family </a>{" "}
          </h2>
          <p>
            I live with both of my parents, my elder borther Jonathan, and
            younger sister Yoyo.{" "}
          </p>
        </div>
        <div id="halfbox">
          <h2>
            <a href="school/school.html">My School </a>{" "}
          </h2>
          <p>
            I study at Class 3E in S.K.H. Tin Wan Chi Nam Primary School located
            at Tin Wan, Aberdeen.
          </p>
        </div>
        <div id="halfbox">
          <h2>
            <a href="music/music.html">My Music</a>
          </h2>
          <p>I like music. I love playing Cello, piano and singing Karaoke. </p>
        </div>
        <div id="halfbox">
          <h2>
            <a href="Sports/sports.html">My Sports</a>{" "}
          </h2>
          <p>
            I love sports. Tennis, swimming, and soccer are all my favourite
            sports.{" "}
          </p>
        </div>
        <div id="halfbox">
          <h2>
            <a href="hobby/hobby.html">My Hobby </a>
          </h2>
          <p>I like playing computer games, PS2, Mario, and hiking.</p>
        </div>
        <div id="halfbox">
          <h2>
            <a href="photos/photos.html">My Photos</a>{" "}
          </h2>
          <p>Visit my photo album and share with me my precious moments.</p>
        </div>
        <div id="halfbox">
          <h2>
            <a href="links/links.html">My Links</a>{" "}
          </h2>
          <p>Please go to enjoy the games and everything that's in my links.</p>
        </div>
        <p>&nbsp;</p>

        <div id="maintop">
          <div id="album_nav">
            <ul>
              <li>
                <a href="http://karenhon.07x.net/index.html">
                  Mother's WebSite
                </a>
              </li>
              <li>
                <a href="http://leungsikchi.07x.net/index.html">
                  Jonathan's WebSite
                </a>
              </li>
              <li>
                <a href="http://leungpakyung.07x.net/index.html">
                  Yoyo's WebSite
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div id="footer">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="family/family.html">Family</a>
          </li>
          <li>
            <a href="school/school.html">School</a>
          </li>
          <li>
            <a href="music/music.html">Music</a>
          </li>
          <li>
            <a href="Sports/sports.html">Sports</a>
          </li>
          <li>
            <a href="hobby/hobby.html">Hobby</a>
          </li>
          <li>
            <a href="photos/photos.html">Photos</a>
          </li>
          <li>
            <a href="links/links.html">Links</a>{" "}
          </li>
        </ul>
      </div> */}
      <ChrisNavbar />
    </div>
  );
}

export default Chris;
