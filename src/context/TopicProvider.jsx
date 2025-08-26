import { useState, useEffect } from "react";
import { TopicContext } from "./TopicContext";

export const TopicProvider = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState(null);

  useEffect(() => {
    const updateTopic = () => {
      const path = window.location.pathname;

      // Simple regex approach to extract topic
      const topicMatch = path.match(
        /\/([a-z]+)(family|school|music|sports|hobby|photos|links|info)/i
      );

      if (topicMatch && topicMatch[2]) {
        setCurrentTopic(topicMatch[2].toLowerCase());
      } else {
        setCurrentTopic("info");
      }
    };

    // Initial update
    updateTopic();

    // Listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", updateTopic);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", updateTopic);
    };
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
    <TopicContext.Provider value={{ currentTopic, setCurrentTopic }}>
      {children}
    </TopicContext.Provider>
  );
};
