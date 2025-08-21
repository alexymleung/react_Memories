import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

export const NavbarProvider = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isSubNavbarVisible, setIsSubNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  const toggleSubNavbar = () => {
    setIsSubNavbarVisible((prev) => !prev);
  };

  const value = {
    isNavbarVisible,
    isSubNavbarVisible,
    toggleNavbar,
    toggleSubNavbar,
    setIsNavbarVisible,
    setIsSubNavbarVisible,
  };

  return React.createElement(NavbarContext.Provider, { value }, children);
};
