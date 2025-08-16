import { NavLink } from "react-router-dom";
import JonNavbar from "../ui/JonNavbar";
import "./Jonathan.css";
import JonBanner from "../assets/JL/images/Buttons/JonathanBanner.jpg";
import JonHero from "../assets/JL/images/fa081001_345ar.jpg";

function Jonathan() {
  return (
    <div id="container">
      <header>
        <img src={JonBanner} alt="Jonathan Banner" />
      </header>

      <main className="jon-main">
        <article className="FullHorzBox">
          <img
            src={JonHero}
            alt="Surfing Jonathan"
            width="1000"
            height="1504"
            className="MainImageFull"
          />
          <div id="FullBoxText">
            <p>
              Hello, I am Leung, Sik Chi Jonathan. I was born happily into this
              world on the 2nd December, 1998 with a weight of 8lbs and 11ozs,
              after which I spent 2 years happily wandering around my home
              before I was put into a nusery for 4 years where I played and
              learnt. Now, I am studying in Primary Four and have a lot of
              things going on. Please surf around my site to see yourself.
            </p>
          </div>
        </article>
        <section>
          <div className="halfbox">
            <h2>
              <NavLink to="/jonathan/jonfamily/">My Family</NavLink>
            </h2>
            <p>
              I live with both of my parents and my younger brother Chris, and
              sister Cara.{" "}
            </p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="school/school.html">My School </a>{" "}
            </h2>
            <p>
              I study at Class 4E in S.K.H. Tin Wan Chi Nam Primary School
              located at Tin Wan, Aberdeen.
            </p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="music/music.html">My Music</a>
            </h2>
            <p>
              I like music. I love playing Piano, Violin, & Harmonica. When I
              grow bigger, I like to play guitar too.{" "}
            </p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="Sports/sports.html">My Sports</a>{" "}
            </h2>
            <p>
              I love sports. Tennis, table tennis, swimming, golf, soccer,
              canoeing are all my favourite sports.{" "}
            </p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="hobby/hobby.html">My Hobby </a>
            </h2>
            <p>I like playing computer, its game, and PS2.</p>
          </div>
          <div className="halfbox">
            <h2>
              <a href="photos/photos.html">My Photos</a>{" "}
            </h2>
            <p>Please feel free to visit my photo album </p>
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
        {/* <p>&nbsp;</p> */}
      </main>
      <footer>
        <JonNavbar />
      </footer>
      {/* <footer id="footer">
      </footer> */}
    </div>
  );
}

export default Jonathan;
