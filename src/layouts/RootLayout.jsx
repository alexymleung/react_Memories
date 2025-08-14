import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

export default function Rootlayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}
