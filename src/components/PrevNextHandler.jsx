import usePrevNextHandler from "../hooks/usePrevNextHandler";

function PrevNextHandler({ name, alias, topics, photoNo }) {
  const { handlePrev, handleNext, handleUp } = usePrevNextHandler(
    name,
    alias,
    topics,
    photoNo
  );

  return (
    <div
      style={{
        display: photoNo === 1 && "none",
      }}
      className="photo-navigation"
    >
      <button className="nav-button prev-button" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      {/* Up button hidden but logic preserved for future use */}
      <button
        className="nav-button thumb-button"
        onClick={handleUp}
        style={{ display: "none" }}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
      <button className="nav-button next-button" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default PrevNextHandler;
