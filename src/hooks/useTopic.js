import { useContext } from "react";
import { TopicContext } from "../context/TopicContext";

export const useTopic = () => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error("useTopic must be used within a TopicProvider");
  }
  return context;
};
