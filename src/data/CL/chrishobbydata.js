import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.webp";
import ChrisHobbyHero from "../../assets/CL/images/fa071208_292ar.jpg";

export const ChrisHobbyData = () => {
  const { currentTheme } = useTheme();

  const chrisheader = {
    image: ChrisBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const chrishobbyarticle = {
    image: ChrisHobbyHero,
    alt: `${currentTheme.name} Hobby`,
    info: "It is fun time just playing sand on the beach.",
  };

  const chrishobbysection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate01`,
      title: "hiking",
      details:
        "My father and mother takes us to hiking a lot of times around the year especially around the autumn and winter times.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate02`,
      title: "computer",
      details:
        "I love playing Mario, Ultraman, and a lot of other games in computer. It can occupy me a whole day, that is if it were not for mother.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate03`,
      title: "In the park",
      details:
        "Just playing in the park is great fun. See me in the slider having fun.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate04`,
      title: "PS2",
      details:
        "Apart from the computer, what else is more interesting than the PS2?",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate05`,
      title: "Sand in the Beach",
      details: "I like playing with sand all day.",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate06`,
      title: "Astronaut",
      details: "I hope to become an astronaut some day.",
    },
    {
      id: 7,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate07`,
      title: "Painting",
      details: "I paint whenever I wanted.",
    },
    {
      id: 8,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate08`,
      title: "Monkey Swing",
      details: "I am quite good at monkey swing!",
    },
  ];
  const chrishobbyplates = [
    {
      plate: "plate01",
      img: "/src/assets/CL/images/fa030105_040ar.jpg",
      title: "Plate 1",
      info: "I love hiking, especially with my mother.",
    },
    {
      plate: "plate02",
      img: "/src/assets/CL/images/fa030406_104ar.jpg",
      title: "Plate 2",
      info: 'Playing one of my favourite PC game "Thomas the Tank Engine" when I was 3 year old.',
    },
    {
      plate: "plate03",
      img: "/src/assets/CL/images/fa060131_239ar.jpg",
      title: "Plate 3",
      info: "Sure have fun in the park!",
    },
    {
      plate: "plate04",
      img: "/src/assets/JL/images/fa020120_130ar.jpg",
      title: "Plate 4",
      info: "Playing PS2 games with brother Chris.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CL/images/fa040424_004ar.jpg",
      title: "Plate 5",
      info: "Just playing sand in the beach.",
    },
    {
      plate: "plate06",
      img: "/src/assets/CL/images/fa060115_260ar.jpg",
      title: "Plate 6",
      info: "Am I a real astrounaut?",
    },
    {
      plate: "plate07",
      img: "/src/assets/CL/images/fa070225_460ar.jpg",
      title: "Plate 7",
      info: "Painting is fun when it subject is right.",
    },
    {
      plate: "plate08",
      img: "/src/assets/CL/images/fa070107_625ar.jpg",
      title: "Plate 8",
      info: "Monkey swing is one of my favourite pastime.",
    },
  ];

  return {
    chrisheader,
    chrishobbyarticle,
    chrishobbysection,
    chrishobbyplates,
  };
};
