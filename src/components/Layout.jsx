import { Outlet } from "react-router-dom";

function Layout({ subNavbar: SubNavbar }) {
  return (
    <>
      {/* <div className="sticky">
        <SubNavbar />
      </div> */}
      <Outlet />
      <SubNavbar />
    </>
  );
}

export default Layout;
