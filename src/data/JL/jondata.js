import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.webp";
import JonHero from "../../assets/JL/images/fa081018_724ar.jpg";

export const JonData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const joninfoarticle = {
    image: JonHero,
    alt: `Surfing ${currentTheme.name}`,
    info: "Hello, I am Leung, Sik Chi Jonathan. I was born happily into this world on the 2nd December, 1998 with a weight of 8lbs and 11ozs, after which I spent 2 years happily wandering around my home before I was put into a nusery for 4 years where I played and learnt. Now, I am studying in Primary Four and have a lot of things going on. Please surf around my site to see yourself.",
  };

  const joninfosection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}family/`,
      title: "My Family",
      details:
        "I am living with my parents and younger brother Chris and sister Cara.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}school/`,
      title: "My School",
      details:
        "I am studying at Class 4E in S.K.H. Tin Wan Chi Nam Primary School located at Tin Wan, Aberdeen.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}music/`,
      title: "My Music",
      details:
        "I like music. I love playing Piano, Violin, & Harmonica. When I grow bigger, I would like to play guitar too.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/`,
      title: "My Sports",
      details:
        "I love sports. Tennis, table tennis, swimming, golf, soccer, canoeing are all my favourite sports.",
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

  return {
    jonheader,
    joninfoarticle,
    joninfosection,
  };
};
