import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";
import CaraHero from "../../assets/CR/images/fa060131_409ar.jpg";

export const CaraData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const carainfoarticle = {
    image: CaraHero,
    alt: `Hero ${currentTheme.name}`,
    info: "Hello, I am Leung, Pak Yung Cara. I was merrily born into this  world in the year 2001. I am now studying in Primary two. My  interest is playing computer games. Please feel free to cruise  along my web pages.",
  };

  const carainfosection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}family/`,
      title: "My Family",
      details:
        "I live with both of my parents, & my brothers Jonathan and Chris.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}school/`,
      title: "My School",
      details:
        "I study at Class 2E in S.K.H. Tin Wan Chi Nam Primary School located at Tin Wan, Aberdeen.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}music/`,
      title: "My Music",
      details: "I like music. I love playing piano and singing Karaoke.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/`,
      title: "My Sports",
      details:
        "I love sports. Swimming, and cycling are all my favourite sports.",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/`,
      title: "My Hobby",
      details:
        "I like playing computer, I learned much academic knowledge from them, sometimes, I played recreational games like PS2.",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}photos/`,
      title: "My Photos",
      details:
        "Please feel free to visit my photo album where there are lots of precious memories there to share with you",
    },
    {
      id: 7,
      link: `/${currentTheme.name}/${currentTheme.alias}links/`,
      title: "My Links",
      details:
        "Please go to enjoy the games and everything that's in my links.",
    },
  ];

  return { caraheader, carainfoarticle, carainfosection };
};
