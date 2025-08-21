import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import { TopicProvider } from "./context/TopicProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TopicProvider>
        <App />
      </TopicProvider>
    </ThemeProvider>
  </StrictMode>
);
