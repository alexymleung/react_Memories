import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.webp";
import JonHobbyHero from "../../assets/JL/images/fa071208_118ar.jpg";

export const JonHobbyData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const jonhobbyarticle = {
    image: JonHobbyHero,
    alt: `${currentTheme.name} Hobby`,
    info: "I have lots of hobbies keeping me busy all the times.",
  };

  const jonhobbysection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate01`,
      title: "hiking",
      details:
        "My father and mother takes us to hiking a lot of times around the year especially around the autumn and winter times.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate03`,
      title: "computer",
      details:
        "I love playing computer ever since I could lay my fingers on the keyboard. I still spend a majority of my leisure time in computer.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate05`,
      title: "Calligraphy",
      details: "I sometimes try out calligraphy.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate06`,
      title: "Exhibition",
      details: "Mother takes us a lot to different exhibitions.",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate07`,
      title: "Fishing",
      details:
        "While I played water sports in Stanley, I also managed to do fishing.",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}hobby/plate08`,
      title: "Boy Scout",
      details:
        "I joined boy scout at school, and there are a lot of activities we can played there.",
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
  const jonhobbyplates = [
    {
      plate: "plate01",
      img: "/src/assets/JL/images/fa031116_017ar.jpg",
      title: "Plate 1",
      info: "Hiking in Lamma Island in 2003",
    },
    {
      plate: "plate02",
      img: "/src/assets/JL/images/fa071208_118ar.jpg",
      title: "Plate 2",
      info: "Lamma revisited in 2007.",
    },
    {
      plate: "plate03",
      img: "/src/assets/JL/images/fa000125_238ar.jpg",
      title: "Plate 3",
      info: "See me head start in computer when I am just one year old!",
    },
    {
      plate: "plate04",
      img: "/src/assets/JL/images/fa020120_130ar.jpg",
      title: "Plate 4",
      info: "Playing computer games with brother Chris.",
    },
    {
      plate: "plate05",
      img: "/src/assets/JL/images/fa050212s029ar.jpg",
      title: "Plate 5",
      info: "Here, I am participating in a charity Chinese Calligraphy event for the new year.",
    },
    {
      plate: "plate06",
      img: "/src/assets/JL/images/fa050705_070ar.jpg",
      title: "Plate 6",
      info: "The dinosaur exhibition in Taikoo Place in 2005.",
    },
    {
      plate: "plate07",
      img: "/src/assets/JL/images/fa080426_269ar.jpg",
      title: "Plate 7",
      info: "This is the first fish I catched all my life",
    },
    {
      plate: "plate08",
      img: "/src/assets/JL/images/fa080504_262ar.jpg",
      title: "Plate 8",
      info: "I was participating in the Hong Kong history medal and this was taken at the Boy Scout headquarter in Wanchai after I finished the event.",
    },
  ];

  return {
    jonheader,
    jonhobbyarticle,
    jonhobbysection,
    jonhobbyplates,
  };
};
