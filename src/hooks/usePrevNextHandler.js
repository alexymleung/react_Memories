import { useNavigate } from "react-router-dom";

function usePrevNextHandler(name, alias, topics, photoNo) {
  const navigate = useNavigate();

  const handlePrev = () => {
    // Extract current plate number from URL
    const currentPath = window.location.pathname;
    const plateNum = parseInt(currentPath.match(/plate(\d+)/)?.[1] || "1");
    if (plateNum === 1) {
      navigate(
        `/${name}/${alias}${topics}/plate${String(photoNo).padStart(2, "0")}`
      );
    } else if (plateNum > 1 && plateNum <= photoNo) {
      navigate(
        `/${name}/${alias}${topics}/plate${String(plateNum - 1).padStart(
          2,
          "0"
        )}`
      );
    }
  };

  const handleNext = () => {
    const currentPath = window.location.pathname;
    const plateNum = parseInt(currentPath.match(/plate(\d+)/)?.[1] || "1");
    if (plateNum === photoNo) {
      navigate(`/${name}/${alias}${topics}/plate01`);
    } else if (plateNum >= 1 && plateNum < photoNo) {
      navigate(
        `/${name}/${alias}${topics}/plate${String(plateNum + 1).padStart(
          2,
          "0"
        )}`
      );
    }
  };

  const handleUp = () => {
    navigate(`/${name}/${alias}${topics}`);
  };

  return { handlePrev, handleNext, handleUp };
}

export default usePrevNextHandler;
