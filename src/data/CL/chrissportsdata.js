import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.webp";

import ChrisSportsHero from "../../assets/CL/images/fa061030_099ar.jpg";

export const ChrisSportsData = () => {
  const { currentTheme } = useTheme();

  const chrisheader = {
    image: ChrisBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const chrissportsarticle = {
    image: ChrisSportsHero,
    alt: `${currentTheme.name} Sports`,
    info: "I like playing sports a lot. Here, I am enjoying canoeing in Stanley beach in the lovely autumn weather.",
  };

  const chrissportssection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate01`,
      title: "Windsurfing",
      details:
        "I began learning windsurfing. Luckily, I got through the beginner's class.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate04`,
      title: "Canoeing",
      details:
        "I recently learned canoeing and have amassed all five junior medals already.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate07`,
      title: "Sailing",
      details:
        "I started learning sailing and was quickly enjoying myself in this fabulous sport.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate08`,
      title: "tennis",
      details:
        "I always have fun playing tennis with my family, father, mother, and Jonathan.",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate11`,
      title: "cycling",
      details:
        "I love being in a bicycle. The fun of bicycle and the speed is just great.",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate14`,
      title: "swimming",
      details:
        "I learnt to swim quite a few years ago. But fun in the water may be more enjoyable.",
    },
    {
      id: 7,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate15`,
      title: "Horse Riding",
      details: "Some of these days, I am going to be a good horse rider.",
    },
    {
      id: 8,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate16`,
      title: "golf",
      details: "I like playing golf with father and brother.",
    },
    {
      id: 9,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate17`,
      title: "Soccer",
      details: "I had soccer lessons.",
    },
    {
      id: 10,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate19`,
      title: "Judo",
      details: "Sometimes, I played Judo with Jonathan.",
    },
    {
      id: 11,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate20`,
      title: "Badminton",
      details: "Badminton class I had.",
    },
    {
      id: 12,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate21`,
      title: "running",
      details: "I can run long and fast.",
    },
    {
      id: 13,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate22`,
      title: "parachuting",
      details:
        "I played the wonderful parachuting in my trip to Thailand. What a moment!",
    },
    {
      id: 14,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/plate23`,
      title: "Archery",
      details: "First Try",
    },
  ];

  const chrissportsplates = [
    {
      plate: "plate01",
      img: "/src/assets/CL/images/fa080406_076ar.jpg",
      title: "Plate 1",
      info: ">I want to become a good windsurfer",
    },
    {
      plate: "plate02",
      img: "/src/assets/CL/images/fa081018_539ar.jpg",
      title: "Plate 2",
      info: "I am beginning to master the skill of windsurfing",
    },
    {
      plate: "plate03",
      img: "/src/assets/CL/images/fa080413_152ar.jpg",
      title: "Plate 3",
      info: "I was learning canoe.",
    },
    {
      plate: "plate04",
      img: "/src/assets/CL/images/fa080413_347ar.jpg",
      title: "Plate 4",
      info: "I was beginning to enjoy canoeing.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CL/images/fa080413_556ar.jpg",
      title: "Plate 6",
      info: "Obviously, I enjoy being in a canoe.",
    },
    {
      plate: "plate06",
      img: "/src/assets/CL/images/fa080427_078a.jpg",
      title: "Plate 6",
      info: "Getting the hang of canoeing.",
    },
    {
      plate: "plate07",
      img: "/src/assets/CL/images/fa081001_500ar.jpg",
      title: "Plate 7",
      info: "Can you see me smiling sweetly in my dingy?",
    },
    {
      plate: "plate08",
      img: "/src/assets/CL/images/fa040725_040ar.jpg",
      title: "Plate 8",
      info: "Tennis lesson when I was four and a half.",
    },
    {
      plate: "plate09",
      img: "/src/assets/CL/images/fa050822_156ar.jpg",
      title: "Plate 9",
      info: "See how serious I am on the ball when I was five and a half!",
    },
    {
      plate: "plate10",
      img: "/src/assets/CL/images/fa080512_216ar.jpg",
      title: "Plate 10",
      info: "I like playing tennis with Jonathan.!",
    },
    {
      plate: "plate11",
      img: "/src/assets/CL/images/fa060326_279ar.jpg",
      title: "Plate 11",
      info: "How good it feels riding on a bicycle!",
    },
    {
      plate: "plate12",
      img: "/src/assets/CL/images/fa070819_069ar.jpg",
      title: "Plate 12",
      info: "I totally enjoy it!",
    },
    {
      plate: "plate13",
      img: "/src/assets/CL/images/fa070819_341ar.jpg",
      title: "Plate 13",
      info: "Really fun!",
    },

    {
      plate: "plate14",
      img: "/src/assets/CL/images/fa040613_101ar.jpg",
      title: "Plate 14",
      info: "What a way to spend in the pool in the heat of summer!.",
    },
    {
      plate: "plate15",
      img: "/src/assets/CL/images/fa080119_388ar.jpg",
      title: "Plate 15",
      info: "See how happy I am on the back on a horse!",
    },
    {
      plate: "plate16",
      img: "/src/assets/CL/images/fa070204_586ar.jpg",
      title: "Plate 16",
      info: "turning the body well in the swing",
    },
    {
      plate: "plate17",
      img: "/src/assets/CL/images/fa070311_064ar.jpg",
      title: "Plate 17",
      info: "powerful kick!",
    },
    {
      plate: "plate18",
      img: "/src/assets/CL/images/fa070303_147.jpg",
      title: "Plate 18",
      info: "powerful kick!",
    },
    {
      plate: "plate19",
      img: "/src/assets/CL/images/fa071223_316ar.jpg",
      title: "Plate 19",
      info: "My judo lesson!",
    },
    {
      plate: "plate20",
      img: "/src/assets/CL/images/fa070707_242ar.jpg",
      title: "Plate 20",
      info: "Badminton is another racket skills I enjoyed!.",
    },
    {
      plate: "plate21",
      img: "/src/assets/CL/images/fa070722_356ar.jpg",
      title: "Plate 22",
      info: "I want to run fast and far!",
    },
    {
      plate: "plate22",
      img: "/src/assets/CL/images/Fa050624s005a.jpg",
      title: "Plate 22",
      info: "So much fun up in the sky!",
    },
    {
      plate: "plate23",
      img: "/src/assets/CL/images/fa080517_029a.jpg",
      title: "Plate 23",
      info: "Archery is fun!",
    },
  ];

  return {
    chrisheader,
    chrissportsarticle,
    chrissportssection,
    chrissportsplates,
  };
};
