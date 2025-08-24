import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";

import CaraSportsHero from "../../assets/CR/images/fa070408_048ar.jpg";

export const CaraSportsData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const carasportsarticle = {
    image: CaraSportsHero,
    alt: `${currentTheme.name} Sports`,
    info: "I like playing sports with my brothers and father, soccer, tennis, table tennis, cycling, you name it.",
  };

  const carasportssection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate01`,
      title: "Tennis",
      details: "Hitting the ball in tennis is great.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate06`,
      title: "Cycling",
      details: "Riding bicycling is so good.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate07`,
      title: "Swimming",
      details:
        "I learnt to swim quite a few years ago. But fun in the water may be more enjoyable.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate08`,
      title: "Golf",
      details: "Golf is good when you hit the ball",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate09`,
      title: "Soccer",
      details: "I like playing soccer with brothers and father.",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate10`,
      title: "Horse Riding",
      details: "Horse riding is fearsome.",
    },
    {
      id: 7,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate11`,
      title: "Judo",
      details: "Again with brothers I had Judo lessons.",
    },
    {
      id: 8,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate12`,
      title: "Running",
      details: "I like running a lot",
    },
  ];

  const carasportsplates = [
    {
      plate: "plate01",
      img: "/src/assets/CR/images/fa040418_036ar.jpg",
      title: "Plate 1",
      info: "Father showed me tennis when I was almost 3 year old.",
    },
    {
      plate: "plate02",
      img: "/src/assets/CR/images/fa061203_212ar.jpg",
      title: "Plate 2",
      info: "Hit and turned when I was five and four month old.",
    },
    {
      plate: "plate03",
      img: "/src/assets/CR/images/fa070408_084ar.jpg",
      title: "Plate 3",
      info: "Eyes on the ball for the almost six year old me.",
    },
    {
      plate: "plate04",
      img: "/src/assets/CR/images/fa080420_196ar.jpg",
      title: "Plate 4",
      info: "Nearly seven year old me playing a forehand.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CR/images/fa080501_024ar.jpg",
      title: "Plate 5",
      info: "Playing ferocious forehand.",
    },
    {
      plate: "plate06",
      img: "/src/assets/CR/images/fa060102_322ar.jpg",
      title: "Plate 6",
      info: "Fun in the Bike",
    },
    {
      plate: "plate07",
      img: "/src/assets/CR/images/fa040613_103ar.jpg",
      title: "Plate 7",
      info: "So good to be in the swimming pool, lots of water, lots of fun.",
    },
    {
      plate: "plate08",
      img: "/src/assets/CR/images/fa041022_011ar.jpg",
      title: "Plate 8",
      info: "Do I look good in my swing?",
    },
    {
      plate: "plate09",
      img: "/src/assets/CR/images/fa070303_247ar.jpg",
      title: "Plate 9",
      info: "Kick the ball away.",
    },
    {
      plate: "plate10",
      img: "/src/assets/CR/images/fa080119_562ar.jpg",
      title: "Plate 10",
      info: " The horse is so lovely.",
    },
    {
      plate: "plate11",
      img: "/src/assets/CR/images/fa071223_349ar.jpg",
      title: "Plate 11",
      info: "Judo with big brothers and sisters.",
    },
    {
      plate: "plate12",
      img: "/src/assets/CR/images/fa070722_361ar.jpg",
      title: "Plate 12",
      info: "Running is really fun.",
    },
  ];

  return {
    caraheader,
    carasportsarticle,
    carasportssection,
    carasportsplates,
  };
};
