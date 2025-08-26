import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.webp";
import JonMusicHero from "../../assets/JL/images/fa080405_097ar.jpg";
import fa080405_062ar from "../../assets/JL/images/fa080405_062ar.jpg";
import fa080506_396ar from "../../assets/JL/images/fa080506_396ar.jpg";
import fa020310_029a from "../../assets/JL/images/fa020310_029a.jpg";
import F1140028 from "../../assets/JL/images/F1140028.jpg";
import fa071202_462a from "../../assets/JL/images/fa071202_462a.jpg";
import JL_Harmonica_Montage_ar from "../../assets/JL/images/JL_Harmonica_Montage_ar.jpg";
import JL070908_PreludeInC from "../../assets/JL/multimedia/JL070908_PreludeInC.mp3";

export const JonMusicData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const jonmusicarticle = {
    image: JonMusicHero,
    alt: `${currentTheme.name} Music`,
    info: "Music is such an indispensable part in my life that I literally wears music on my lips wherever I go.",
  };

  const jonmusicsection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate01`,
      title: "Violin",
      details: "I play and have regular lessons in the Music Office",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate03`,
      title: "Piano",
      details: "I will try to obtain Grade 5 Piano Certificate next year.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}music/singing`,
      title: "Singing",
      details: "I like singing a lot. Karaoke is one of my favourite.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate07`,
      title: "Harmonica",
      details:
        "I have played Harmonica and loved the wonderful song it produced.",
    },
  ];

  const jonmusicplates = [
    {
      plate: "plate01",
      img: fa080405_062ar,
      title: "Plate 1",
      info: "I am concentrating in playing violin.",
    },
    {
      plate: "plate02",
      img: fa080506_396ar,
      title: "Plate 2",
      info: "Taken with my Violin Tutor Mr. Kam in my Music Office class.",
    },
    {
      plate: "plate03",
      img: fa020310_029a,
      title: "Plate 3",
      info: "See me playing keyboard at the age of three.",
    },
    {
      plate: "plate04",
      img: JonMusicHero,
      title: "Plate 4",
      info: "I am practising for my Grade 5 examination next year. Below is a piece I played named 'Prelude in C' by JS Bach",
      link: JL070908_PreludeInC,
    },
    {
      plate: "plate05",
      img: F1140028,
      title: "Plate 5",
      info: "Singing 祝福 with daddy in a school Karaoke contest.",
    },
    {
      plate: "plate06",
      img: fa071202_462a,
      title: "Plate 6",
      info: "Singing Karaoke in California Red",
    },
    {
      plate: "plate07",
      img: JL_Harmonica_Montage_ar,
      title: "Plate 7",
      info: "Enjoy playing harmonica.",
    },
  ];

  return {
    jonheader,
    jonmusicarticle,
    jonmusicsection,
    jonmusicplates,
  };
};
