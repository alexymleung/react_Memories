import { NavLink } from "react-router-dom";
import { useTopic } from "../hooks/useTopic";

const SubNavList = ({ link, innerText }) => {
  const { setCurrentTopic } = useTopic();

  const handleClick = () => {
    // Extract topic from route like "/jonathan/jonphotos/plate08"
    const parts = link.split("/");
    const topicSegment = parts[2]; // jonphotos, jonfamily, etc

    if (topicSegment.includes("family")) {
      setCurrentTopic("family");
    } else if (topicSegment.includes("school")) {
      setCurrentTopic("school");
    } else if (topicSegment.includes("music")) {
      setCurrentTopic("music");
    } else if (topicSegment.includes("sports")) {
      setCurrentTopic("sports");
    } else if (topicSegment.includes("hobby")) {
      setCurrentTopic("hobby");
    } else if (topicSegment.includes("photos")) {
      setCurrentTopic("photos");
    } else if (topicSegment.includes("links")) {
      setCurrentTopic("links");
    } else {
      setCurrentTopic("info");
    }
  };

  return (
    <li>
      <NavLink to={link} onClick={handleClick}>
        {innerText}
      </NavLink>
    </li>
  );
};

export default SubNavList;
