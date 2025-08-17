import { NavLink } from "react-router-dom";
import Header from "./Header";
import Article from "./Article";
import Card from "./Card";

function PersonPage({
  headerData,
  articleData,
  sectionData,
  NavbarComponent,
  cssClass,
}) {
  return (
    <div id="container" className={cssClass}>
      <Header pic={headerData.image} alt={headerData.alt} />

      <main className={`${cssClass}-main`}>
        <Article
          image={articleData.image}
          alt={articleData.alt}
          info={articleData.info}
        />
        <section>
          {sectionData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </section>
      </main>

      <footer>
        <NavbarComponent />
      </footer>
    </div>
  );
}

export default PersonPage;
