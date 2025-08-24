import Article from "./Article";
import Card from "./Card";
import Header from "./Header";
import HeaderNav from "./HeaderNav";

function PersonPage({
  headerData,
  articleData,
  sectionData,
  SubNavbar,
  cssClass,
}) {
  return (
    <>
      <div id="container" className={cssClass}>
        <HeaderNav SubNavbar={SubNavbar} headerData={headerData} />
        {/* <Header pic={headerData.image} alt={headerData.alt} /> */}

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

        <footer></footer>
      </div>
    </>
  );
}

export default PersonPage;
