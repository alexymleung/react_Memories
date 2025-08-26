import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.webp";

import JonSportsHero from "../../assets/JL/images/fa070902_649ar.jpg";
import fa070902_669ar from "../../assets/JL/images/fa070902_669ar.jpg";
import fa071014_056ar from "../../assets/JL/images/fa071014_056ar.jpg";
import fa081018_724ar from "../../assets/JL/images/fa081018_724ar.jpg";
import fa081001_699ar from "../../assets/JL/images/fa081001_699ar.jpg";
import fa050822_230_780 from "../../assets/JL/images/fa050822_230_780.jpg";
import fa070408_075ar from "../../assets/JL/images/fa070408_075ar.jpg";
import fa080512_319ar from "../../assets/JL/images/fa080512_319ar.jpg";
import fa061226_016ar from "../../assets/JL/images/fa061226_016ar.jpg";
import fa070311_021ar from "../../assets/JL/images/fa070311_021ar.jpg";
import IMG_0811_JPG from "../../assets/JL/images/IMG_0811_JPG.jpg";
import IMG_0844 from "../../assets/JL/images/IMG_0844.jpg";
import fa070204_603ar from "../../assets/JL/images/fa070204_603ar.jpg";
import fa060811_605ar from "../../assets/JL/images/fa060811_605ar.jpg";
import fa070707_179ar from "../../assets/JL/images/fa070707_179ar.jpg";
import Thailand_001Cr from "../../assets/JL/images/Thailand_001Cr.jpg";
import fa070902_533ar from "../../assets/JL/images/fa070902_533ar.jpg";

export const JonSportsData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const jonsportsarticle = {
    image: JonSportsHero,
    alt: `${currentTheme.name} Sports`,
    info: "I like playing sports a lot. Here, I am enjoying canoeing in Stanley beach in the lovely autumn weather.",
  };

  const jonsportssection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate01`,
      title: "Canoeing",
      details:
        "I started learning canoeing last year and have now acquired all the badges for kids, including starfish, sea horse, seal, sea lion and walrus.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate02`,
      title: "Windsurfing",
      details:
        "Together with canoeing, I also began learning windsurfing, which is not the easiest sports in the world especially when it becomes windy.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate04`,
      title: "Sailing",
      details:
        "Apart from Windsurfing and Canoeing, I started learning sailing. It's so good to be sailing everywhere on my own.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate05`,
      title: "tennis",
      details:
        "I began playing tennis at the age of 3 and has never given up the love of it. I play regular in Tennis classes as well with father.",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate08`,
      title: "cycling",
      details:
        "Ever since I was a small kid, I love cycling around the Neighourhood. Here is a photo where I was cycling happily around.",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate09`,
      title: "soccer",
      details:
        "Soccer gives me very good exercise, and besides, it's very convenient to play. I can go downstairs anytime and play with my father and Chris.",
    },
    {
      id: 7,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate10`,
      title: "School Althletic Competition",
      details: "Two gold medals I won in the School Althletic Meet.",
    },
    {
      id: 8,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate12`,
      title: "golf",
      details: "Golf wing can be difficult yet fun",
    },
    {
      id: 9,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate13`,
      title: "judo",
      details: "I have a lot of Judo classes.",
    },
    {
      id: 10,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate14`,
      title: "badminton",
      details: "I had badminton classes",
    },
    {
      id: 11,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate15`,
      title: "parachuting",
      details: "One of the most exciting thing",
    },
  ];

  const jonsportsplates = [
    {
      plate: "plate01",
      img: fa070902_669ar,
      title: "Plate 1",
      info: "Paddling hard in a Kayak",
    },
    {
      plate: "plate02",
      img: fa071014_056ar,
      title: "Plate 2",
      info: "Windsurfing I went all the way out!",
    },
    {
      plate: "plate03",
      img: fa081018_724ar,
      title: "Plate 3",
      info: "This was my best day in Windsurfing in 2008.",
    },
    {
      plate: "plate04",
      img: fa081001_699ar,
      title: "Plate 4",
      info: "Free as the wind!",
    },
    {
      plate: "plate05",
      img: fa050822_230_780,
      title: "Plate 5",
      info: "Playing tennis when I was six and a half, see my eyes on the ball.",
    },
    {
      plate: "plate06",
      img: fa070408_075ar,
      title: "Plate 6",
      info: "The eight and a half me playing tennis with dad.",
    },
    {
      plate: "plate07",
      img: fa080512_319ar,
      title: "Plate 7",
      info: "The nine and a half me enjoying tennis.",
    },
    {
      plate: "plate08",
      img: fa061226_016ar,
      title: "Plate 8",
      info: "How good it feels riding on a bicycle!",
    },
    {
      plate: "plate09",
      img: fa070311_021ar,
      title: "Plate 9",
      info: "Soccer with my father, sister and brother in our yard.",
    },
    {
      plate: "plate10",
      img: IMG_0811_JPG,
      title: "Plate 10",
      info: "I got a gold medal in 100m run!",
    },
    {
      plate: "plate11",
      img: IMG_0844,
      title: "Plate 11",
      info: "A gold medal in 4X60m relay!",
    },
    {
      plate: "plate12",
      img: fa070204_603ar,
      title: "Plate 12",
      info: "Swinging the club trying to hit the ball",
    },
    {
      plate: "plate13",
      img: fa060811_605ar,
      title: "Plate 13",
      info: "Judo with fun.",
    },
    {
      plate: "plate14",
      img: fa070707_179ar,
      title: "Plate 14",
      info: "Fun, is it not?",
    },
    {
      plate: "plate15",
      img: Thailand_001Cr,
      title: "Plate 15",
      info: "parachuting in Thailand.",
    },
    {
      plate: "plate16",
      img: fa070902_533ar,
      title: "Plate 16",
      info: "One day by the seaside",
    },
  ];

  return {
    jonheader,
    jonsportsarticle,
    jonsportssection,
    jonsportsplates,
  };
};
