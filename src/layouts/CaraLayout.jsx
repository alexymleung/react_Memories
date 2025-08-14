import { Outlet } from "react-router-dom";
import CaraNavbar from "../ui/CaraNavbar";

function CaraLayout() {
  return (
    <>
      <CaraNavbar />

      <Outlet />
    </>
  );
}

export default CaraLayout;
