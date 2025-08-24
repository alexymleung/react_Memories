import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.webp";
import ChrisHero from "../../assets/CL/images/fa070819_069ar.jpg";

export const ChrisData = () => {
  const { currentTheme } = useTheme();

  const chrisheader = {
    image: ChrisBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const chrisinfoarticle = {
    image: ChrisHero,
    alt: `Hero ${currentTheme.name}`,
    info: "Hello, I am Leung, Kit Sze Chris. I was merrily born into this world in the year 2000. I am now studying in Primary three. My  interest is playing computer games, NBA. Please feel free to cruise along my web pages",
  };

  const chrisinfosection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}family/`,
      title: "My Family",
      details:
        "I live with both of my parents, my elder brother Chris, and younger sister Cara.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}school/`,
      title: "My School",
      details:
        "I study at Class 3E in S.K.H. Tin Wan Chi Nam Primary School located at Tin Wan, Aberdeen.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}music/`,
      title: "My Music",
      details: "I like music. I love playing Cello, piano and singing Karaoke.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/`,
      title: "My Sports",
      details:
        "I love sports. Tennis, swimming, and soccer are all my favourite sports.",
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

  return { chrisheader, chrisinfoarticle, chrisinfosection };
};
