import { useNavigate } from "react-router-dom";

function usePrevNextHandler(name, alias, topics, photoNo) {
  const navigate = useNavigate();

  // Extract topic directly from URL path
  const getCurrentTopic = () => {
    const path = window.location.pathname;

    // Simple regex to extract topic from path
    const topicMatch = path.match(
      /\/([a-z]+)(family|school|music|sports|hobby|photos|links|info)/i
    );

    if (topicMatch && topicMatch[2]) {
      return topicMatch[2].toLowerCase();
    }

    // Fallback to topics parameter if provided
    if (topics && typeof topics === "string") {
      return topics;
    }
    return "info";
  };

  const handlePrev = () => {
    // Extract current plate number from URL
    const currentPath = window.location.pathname;
    const plateNum = parseInt(currentPath.match(/plate(\d+)/)?.[1] || "1");
    const currentTopic = getCurrentTopic();

    if (plateNum === 1) {
      navigate(
        `/${name}/${alias}${currentTopic}/plate${String(photoNo).padStart(
          2,
          "0"
        )}`
      );
    } else if (plateNum > 1 && plateNum <= photoNo) {
      navigate(
        `/${name}/${alias}${currentTopic}/plate${String(plateNum - 1).padStart(
          2,
          "0"
        )}`
      );
    }
  };

  const handleNext = () => {
    const currentPath = window.location.pathname;
    const plateNum = parseInt(currentPath.match(/plate(\d+)/)?.[1] || "1");
    const currentTopic = getCurrentTopic();

    if (plateNum === photoNo) {
      navigate(`/${name}/${alias}${currentTopic}/plate01`);
    } else if (plateNum >= 1 && plateNum < photoNo) {
      navigate(
        `/${name}/${alias}${currentTopic}/plate${String(plateNum + 1).padStart(
          2,
          "0"
        )}`
      );
    }
  };

  const handleUp = () => {
    const currentTopic = getCurrentTopic();
    navigate(`/${name}/${alias}${currentTopic}`);
  };

  return { handlePrev, handleNext, handleUp };
}

export default usePrevNextHandler;
