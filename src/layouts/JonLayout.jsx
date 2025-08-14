import { Outlet } from "react-router-dom";
import JonNavbar from "../ui/JonNavbar";

function JonLayout() {
  return (
    <>
      <JonNavbar />

      <Outlet />

      {/* <JonNavbar /> */}
    </>
  );
}

export default JonLayout;
