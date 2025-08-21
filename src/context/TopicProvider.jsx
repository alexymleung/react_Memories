import { useState, useEffect } from "react";
import { TopicContext } from "./TopicContext";

export const TopicProvider = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const parts = path.split("/");
    const topicSegment = parts[2]; // jonphotos, jonfamily, etc

    if (!topicSegment) {
      setCurrentTopic("info");
    } else if (topicSegment.includes("family")) {
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
  }, []);

  if (currentTopic === null) {
    return null; // Render nothing until topic is determined
  }

  return (
    <TopicContext.Provider value={{ currentTopic, setCurrentTopic }}>
      {children}
    </TopicContext.Provider>
  );
};
