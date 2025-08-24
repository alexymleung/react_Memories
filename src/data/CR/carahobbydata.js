import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";
import CaraHobbyHero from "../../assets/CR/images/fa060820_004ar.jpg";

export const CaraHobbyData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const carahobbyarticle = {
    image: CaraHobbyHero,
    alt: `${currentTheme.name} Hobby`,
    info: "I have lots of hobbies keeping me busy all the times.",
  };

  const carahobbysection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate01`,
      title: "Hiking",
      details:
        "Hiking is such my favourite passtime that I would drag my family to it.",
    },
    {
      id: 2,
      // link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate03`,
      title: "Computer & PS2",
      details:
        "Just like my brothers, I am drawn to computer; PS2 and the lots of games with it.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate02`,
      title: "Playing in the Park",
      details: "Just playing in the park is great fun. See me slide.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate03`,
      title: "Sand in the Beach",
      details: "I love playing with sand all day.",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate05`,
      title: "Budda",
      details: "I once visited the Budda in Lantau.",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate06`,
      title: "Picnic",
      details: "I went to picnic often.",
    },
    // {
    //   id: 7,
    //   link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate05`,
    //   title: "chess",
    //   details:
    //     "I am beginning to acquire a interest in Chinese Chess and International Chess.",
    // },
    // {
    //   id: 8,
    //   link: `/${currentTheme.name}/${currentTheme.alias}hobby/ps2`,
    //   title: "PS2",
    //   details:
    //     "Can you find something more interesting than playing games in PS2?",
    // },
  ];
  const carahobbyplates = [
    {
      plate: "plate01",
      img: "/src/assets/CR/images/fa041227_057ar.jpg",
      title: "Plate 1",
      info: "Hiking in the hills",
    },
    {
      plate: "plate02",
      img: "/src/assets/CR/images/fa060212_336ar.jpg",
      title: "Plate 2",
      info: "So much fun playing in the slide.",
    },
    {
      plate: "plate03",
      img: "/src/assets/CR/images/fa040711_012ar.jpg",
      title: "Plate 3",
      info: "See the fun of playing with sand.",
    },
    {
      plate: "plate04",
      img: "/src/assets/CR/images/fa080406_221ar.jpg",
      title: "Plate 4",
      info: "I never get tired of playing in the sand.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CR/images/fa040409_025ar.jpg",
      title: "Plate 5",
      info: "Great Budda behind me.",
    },
    {
      plate: "plate06",
      img: "/src/assets/CR/images/fa040725_122ar.jpg",
      title: "Plate 6",
      info: "Brother and me making bread.",
    },
  ];

  return {
    caraheader,
    carahobbyarticle,
    carahobbysection,
    carahobbyplates,
  };
};
