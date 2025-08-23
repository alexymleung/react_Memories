import { useNavigate } from "react-router-dom";

function usePrevNextHandler(name, alias, topics, photoNo) {
  const navigate = useNavigate();

  // Extract topic from current URL path instead of relying on topics parameter
  const getCurrentTopicFromUrl = () => {
    const currentPath = window.location.pathname;
    const parts = currentPath.split("/");
    const topicSegment = parts[2]; // jonphotos, jonfamily, etc

    if (topicSegment.includes("family")) return "family";
    if (topicSegment.includes("school")) return "school";
    if (topicSegment.includes("music")) return "music";
    if (topicSegment.includes("sports")) return "sports";
    if (topicSegment.includes("hobby")) return "hobby";
    if (topicSegment.includes("photos")) return "photos";
    if (topicSegment.includes("links")) return "links";
    return "info";
  };

  const handlePrev = () => {
    // Extract current plate number from URL
    const currentPath = window.location.pathname;
    const plateNum = parseInt(currentPath.match(/plate(\d+)/)?.[1] || "1");
    const currentTopic = getCurrentTopicFromUrl();

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
    const currentTopic = getCurrentTopicFromUrl();

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
    const currentTopic = getCurrentTopicFromUrl();
    navigate(`/${name}/${alias}${currentTopic}`);
  };

  return { handlePrev, handleNext, handleUp };
}

export default usePrevNextHandler;
