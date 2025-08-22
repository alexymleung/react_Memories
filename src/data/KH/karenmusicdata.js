import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.jpg";
import KarenMusicHero from "../../assets/KH/images/fa070107_593ar.jpg";

export const KarenMusicData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const karenmusicarticle = {
    image: KarenMusicHero,
    alt: `${currentTheme.name} Music`,
    info: "Music is such an indispensable part in my life that I literally wears music on my lips wherever I go.",
  };

  const karenmusicsection = [
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

  const karenmusicplates = [
    {
      plate: "plate01",
      img: "/src/assets/KH/images/fa080405_062ar.jpg",
      title: "Plate 1",
      info: "I am concentrating in playing violin.",
    },
    {
      plate: "plate02",
      img: "/src/assets/KH/images/fa080506_396ar.jpg",
      title: "Plate 2",
      info: "Taken with my Violin Tutor Mr. Kam in my Music Office class.",
    },
    {
      plate: "plate03",
      img: "/src/assets/KH/images/fa020310_029a.jpg",
      title: "Plate 3",
      info: "See me playing keyboard at the age of three.",
    },
    {
      plate: "plate04",
      img: "/src/assets/KH/images/fa080405_097ar.jpg",
      title: "Plate 4",
      info: "I am practising for my Grade 5 examination next year. Below is a piece I played named 'Prelude in C' by JS Bach",
      link: "/src/assets/KH/multimedia/KH070908_PreludeInC.mp3",
    },
    {
      plate: "plate05",
      img: "/src/assets/KH/images/F1140028.jpg",
      title: "Plate 5",
      info: "Singing with daddy in a Karaoke contest.",
    },
    {
      plate: "plate06",
      img: "/src/assets/KH/images/fa071202_462a.jpg",
      title: "Plate 6",
      info: "Singing Karaoke in California Red",
    },
    {
      plate: "plate07",
      img: "/src/assets/KH/images/KH_Harmonica_Montage_ar.jpg",
      title: "Plate 7",
      info: "Enjoy playing harmonica.",
    },
  ];

  return {
    karenheader,
    karenmusicarticle,
    karenmusicsection,
    karenmusicplates,
  };
};
