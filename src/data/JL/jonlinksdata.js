import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.jpg";

import JonLinksHero from "../../assets/JL/images/fa020824_001B.jpg";

export const JonLinksData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const jonlinksarticle = {
    image: JonLinksHero,
    alt: `${currentTheme.name} Links`,
    info: "Enjoy the goodies from the links below",
  };

  const jonlinkssection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}links/plate01`,
      title: "classwork",
      details: "Somthing we cannot get away, at least for now.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}links/games`,
      title: "games",
      details: "I love visiting these Pages.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}links/downloads`,
      title: "downloads",
      details: "See the joy of the game downloads.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}links/credit`,
      title: "credit",
      details: "Not the credit you are thinking of",
    },
  ];

  const jonlinksplates = [
    {
      plate: "plate01",
      img: "/src/assets/JL/images/f0991204_023ar.jpg",
      title: "Plate 1",
      info: "With father in my 1-year old birthday party.",
    },
    {
      plate: "plate02",
      img: "/src/assets/JL/images/fa021011_029ar.jpg",
      title: "Plate 2",
      info: "Father and son.",
    },
    {
      plate: "plate03",
      img: "/src/assets/JL/images/fa070128_073ar.jpg",
      title: "Plate 3",
      info: "Looking onward.",
    },
    {
      plate: "plate04",
      img: "/src/assets/JL/images/fa020303_039ar.jpg",
      title: "Plate 4",
      info: "3y-old me with mother and brother.",
    },
  ];

  return {
    jonheader,
    jonlinksarticle,
    jonlinkssection,
    jonlinksplates,
  };
};
