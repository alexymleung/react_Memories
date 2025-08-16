const Article = ({ image, alt, info }) => {
  return (
    <article className="FullHorzBox">
      <img src={image} alt={alt} className="MainImageFull" />
      <div id="FullBoxText">
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Article;
