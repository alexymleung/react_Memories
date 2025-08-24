import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";
import KarenHero from "../../assets/KH/images/AL970401008.webp";

export const KarenData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const kareninfoarticle = {
    image: KarenHero,
    alt: `Hero ${currentTheme.name}`,
    info: "Hello, I am Karen Hon, the mother of three of my lovely kids, Jonathan, Chris and Cara. You are welcomed to cruise along my web pages.",
  };

  const kareninfosection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}family/`,
      title: "My Family",
      details:
        "I have a good family: husband Alex; and three most-lovely kids, Jonathan, Chris and Cara.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}school/`,
      title: "My School",
      details:
        "I graduated from the Faculty of Science of the Chinese University of Hong Kong",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}music/`,
      title: "My Music",
      details: "I like listerning to music and also singing Karaoke.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}sports/`,
      title: "My Sports",
      details:
        "I love horse riding, jumping, swimming. Playing tennis, badminton, and squash are all my favourite sports.",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/`,
      title: "My Hobby",
      details: "I like playing knitting and watching movies",
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
      details: "Please go to enjoy the everythings that's in my links.",
    },
  ];

  return { karenheader, kareninfoarticle, kareninfosection };
};
