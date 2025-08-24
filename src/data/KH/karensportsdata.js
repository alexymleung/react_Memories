import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";
import KarenSportsHero from "../../assets/KH/images/AL939400360.webp";

export const KarenSportsData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const karensportsarticle = {
    image: KarenSportsHero,
    alt: `${currentTheme.name} Sports`,
    info: "I like playing sports a lot. Here, I am enjoying canoeing in Stanley beach in the lovely autumn weather.",
  };

  const karensportssection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate01`,
      title: "Tennis",
      details: "Tennis is our family favourite game.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate02`,
      title: "Swimming",
      details: "Swimming is always fun.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate04`,
      title: "Horse <Riding></Riding>",
      details: "I used to love horse riding.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate05`,
      title: "Golf",
      details: "I played a lot of golf before",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate06`,
      title: "Badminton",
      details: "Lately, I began to fall in love with badminton.",
    },
  ];

  const karensportsplates = [
    {
      plate: "plate01",
      img: "/src/assets/KH/images/fa080501_096ar.jpg",
      title: "Plate 1",
      info: "I have been playing tennis for a long time.",
    },
    {
      plate: "plate02",
      img: "/src/assets/KH/images/f0990712_036ar.jpg",
      title: "Plate 2",
      info: "Swimming with Alex and 8-month old Jonathan.",
    },
    {
      plate: "plate03",
      img: "/src/assets/KH/images/fa020824_032ar.jpg",
      title: "Plate 3",
      info: "Swimming with phone-styled.",
    },
    {
      plate: "plate04",
      img: "/src/assets/KH/images/fa030501_076ar.jpg",
      title: "Plate 4",
      info: "On the back of horse with Cara",
    },
    {
      plate: "plate05",
      img: "/src/assets/KH/images/950629_031.jpg",
      title: "Plate 5",
      info: "I played golf in KSC a lot.",
    },
    {
      plate: "plate06",
      img: "/src/assets/KH/images/fa080506_304ar.jpg",
      title: "Plate 6",
      info: "I like playing badminton with my friends.",
    },
  ];

  return {
    karenheader,
    karensportsarticle,
    karensportssection,
    karensportsplates,
  };
};
