import { Outlet } from "react-router-dom";
import KarenNavbar from "../ui/KarenNavbar";

function KarenLayout() {
  return (
    <>
      <KarenNavbar />

      <Outlet />
    </>
  );
}

export default KarenLayout;
