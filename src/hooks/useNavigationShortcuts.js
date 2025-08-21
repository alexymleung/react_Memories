import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navname } from "../data/navdata";

export const useNavigationShortcuts = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only handle if no modifier keys are pressed (except Shift for capital letters)
      if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }

      // Navbar navigation: R & T keys
      if (event.key === "r" || event.key === "R") {
        event.preventDefault();
        navigateToPreviousSection();
      } else if (event.key === "t" || event.key === "T") {
        event.preventDefault();
        navigateToNextSection();
      }

      // Sub-navbar navigation: F & G keys
      if (event.key === "f" || event.key === "F") {
        event.preventDefault();
        navigateToPreviousSubSection();
      } else if (event.key === "g" || event.key === "G") {
        event.preventDefault();
        navigateToNextSubSection();
      }
    };

    const navigateToPreviousSection = () => {
      const currentPath = location.pathname;
      const currentSection = getCurrentSection(currentPath);
      const sections = navname.map((item) => item.name);
      const currentIndex = sections.indexOf(currentSection);

      if (currentIndex > 0) {
        const previousSection = sections[currentIndex - 1];
        navigateToSection(previousSection, currentPath);
      } else {
        // Wrap around to last section
        const lastSection = sections[sections.length - 1];
        navigateToSection(lastSection, currentPath);
      }
    };

    const navigateToNextSection = () => {
      const currentPath = location.pathname;
      const currentSection = getCurrentSection(currentPath);
      const sections = navname.map((item) => item.name);
      const currentIndex = sections.indexOf(currentSection);

      if (currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        navigateToSection(nextSection, currentPath);
      } else {
        // Wrap around to first section
        const firstSection = sections[0];
        navigateToSection(firstSection, currentPath);
      }
    };

    const navigateToPreviousSubSection = () => {
      const currentPath = location.pathname;
      const currentSection = getCurrentSection(currentPath);
      const currentSubSection = getCurrentSubSection(currentPath);
      const subSections = [
        "info",
        "family",
        "school",
        "music",
        "sports",
        "hobby",
        "photos",
        "links",
      ];
      const currentIndex = subSections.indexOf(currentSubSection);

      if (currentIndex > 0) {
        const previousSubSection = subSections[currentIndex - 1];
        navigateToSubSection(currentSection, previousSubSection);
      } else {
        // Wrap around to last subsection
        const lastSubSection = subSections[subSections.length - 1];
        navigateToSubSection(currentSection, lastSubSection);
      }
    };

    const navigateToNextSubSection = () => {
      const currentPath = location.pathname;
      const currentSection = getCurrentSection(currentPath);
      const currentSubSection = getCurrentSubSection(currentPath);
      const subSections = [
        "info",
        "family",
        "school",
        "music",
        "sports",
        "hobby",
        "photos",
        "links",
      ];
      const currentIndex = subSections.indexOf(currentSubSection);

      if (currentIndex < subSections.length - 1) {
        const nextSubSection = subSections[currentIndex + 1];
        navigateToSubSection(currentSection, nextSubSection);
      } else {
        // Wrap around to first subsection
        const firstSubSection = subSections[0];
        navigateToSubSection(currentSection, firstSubSection);
      }
    };

    const getCurrentSection = (path) => {
      const parts = path.split("/");
      return parts[1] || "jonathan"; // Default to jonathan if no section
    };

    const getCurrentSubSection = (path) => {
      const parts = path.split("/");
      if (parts.length >= 3) {
        const subSection = parts[2];
        // Remove the alias prefix (e.g., "jon" from "jonfamily")
        return subSection.replace(/^(jon|chris|cara|karen)/, "");
      }
      return "info"; // Default to info
    };

    const navigateToSection = (section, currentPath) => {
      const currentSubSection = getCurrentSubSection(currentPath);
      navigate(`/${section}/${section}${currentSubSection}`);
    };

    const navigateToSubSection = (section, subSection) => {
      navigate(`/${section}/${section}${subSection}`);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, location]);
};
