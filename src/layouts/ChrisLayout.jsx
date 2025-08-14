import { Outlet } from "react-router-dom";
import ChrisNavbar from "../ui/ChrisNavbar";

function ChrisLayout() {
  return (
    <>
      <ChrisNavbar />

      <Outlet />
    </>
  );
}

export default ChrisLayout;
