import React from "react";
import { Outlet } from "react-router-dom";

function Layout({ navbar: Navbar }) {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default Layout;
