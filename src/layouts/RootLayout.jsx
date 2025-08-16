import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import { ThemeProvider } from "../context/ThemeProvider";
import { useTheme } from "../hooks/useTheme";

function ThemedLayout() {
  const { currentTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: currentTheme?.background || "white",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
      {/* <main>
      </main> */}
    </div>
  );
}

export default function Rootlayout() {
  return (
    <ThemeProvider>
      <ThemedLayout />
    </ThemeProvider>
  );
}
