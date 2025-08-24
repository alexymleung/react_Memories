import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";
import KarenHobbyHero from "../../assets/KH/images/fa020512_059ar.jpg";

export const KarenHobbyData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const karenhobbyarticle = {
    image: KarenHobbyHero,
    alt: `${currentTheme.name} Hobby`,
    info: "I have lots of hobbies keeping me busy all the times.",
  };

  const karenhobbysection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate01`,
      title: "hiking",
      details:
        "We went hiking a lot of times around the year especially around autumn and winter times.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate04`,
      title: "Park",
      details:
        "Just playing in the park is great fun. See me in the slider having fun.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate06`,
      title: "Beach",
      details: "My kids like to play in the beach.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate07`,
      title: "Picnic",
      details: "I choose a lot of picnics for the family.",
    },
  ];
  const karenhobbyplates = [
    {
      plate: "plate01",
      img: "/src/assets/KH/images/fa070107_593ar.jpg",
      title: "Plate 1",
      info: "Having good time with Jonathan, Chris and Cara in Yuk Kwai Shan.",
    },
    {
      plate: "plate02",
      img: "/src/assets/KH/images/fa030105_040ar.jpg",
      title: "Plate 2",
      info: "Here again with my Chris.",
    },
    {
      plate: "plate03",
      img: "/src/assets/KH/images/fa031116_014ar.jpg",
      title: "Plate 3",
      info: "In Lamma Island",
    },
    {
      plate: "plate04",
      img: "/src/assets/KH/images/fa060827_303ar.jpg",
      title: "Plate 4",
      info: "Enjoying sliders with Cara while Jonathan was looking on.",
    },
    {
      plate: "plate05",
      img: "/src/assets/KH/images/fa020417_122ar.jpg",
      title: "Plate 5",
      info: "With baby Chris in the Shatin Racing Park.",
    },
    {
      plate: "plate06",
      img: "/src/assets/KH/images/fa040424_006ar.jpg",
      title: "Plate 6",
      info: "Strolling along in the beach with Jonathan",
    },
    {
      plate: "plate07",
      img: "/src/assets/KH/images/fa040725_134ar.jpg",
      title: "Plate 7",
      info: "Enjoying going out with my kids.",
    },
  ];

  return {
    karenheader,
    karenhobbyarticle,
    karenhobbysection,
    karenhobbyplates,
  };
};
