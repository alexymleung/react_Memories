import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import { useTheme } from "../hooks/useTheme";

function ThemedLayout() {
  const { currentTheme } = useTheme();

  return (
    <div
      style={{
        backgroundImage: currentTheme?.background || "white",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default function RootLayout() {
  return <ThemedLayout />;
}
