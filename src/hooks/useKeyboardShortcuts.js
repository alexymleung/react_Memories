import { useEffect } from "react";
import { useNavbar } from "../context/NavbarContext";

export const useKeyboardShortcuts = () => {
  const { toggleNavbar, toggleSubNavbar } = useNavbar();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ctrl/Cmd+B to toggle main navbar
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "b" &&
        !event.shiftKey
      ) {
        event.preventDefault();
        toggleNavbar();
      }

      // Ctrl/Cmd+Shift+B to toggle sub-navbar
      if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        event.key === "b"
      ) {
        event.preventDefault();
        toggleSubNavbar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleNavbar, toggleSubNavbar]);
};
