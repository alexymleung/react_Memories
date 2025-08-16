import { NavLink } from "react-router-dom";
import JonNavbar from "../ui/JonNavbar";
import "./Jonathan.css";
import JonBanner from "../assets/JL/images/Buttons/JonathanBanner.jpg";
import Card from "../components/Card";
import Header from "../components/Header";
import Article from "../components/Article";
import { joninfoheader, joninfoarticle, joninfosection } from "../data/jondata";

function Jonathan() {
  return (
    <div id="container">
      <Header pic={joninfoheader.image} alt={joninfoheader.alt} />

      <main className="jon-main">
        <Article
          image={joninfoarticle.image}
          alt={joninfoarticle.alt}
          info={joninfoarticle.info}
        />
        <section>
          {joninfosection.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </section>
      </main>

      <footer>
        <JonNavbar />
      </footer>
    </div>
  );
}

export default Jonathan;
