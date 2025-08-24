import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";

export const CaraPhotosData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const caraPhotosPlates = [
    {
      plate: "plate01",
      img: "/src/assets/CR/images/fa010802_134a.jpg",
      title: "Plate 1",
      info: "Just coming into this world.",
    },
    {
      plate: "plate02",
      img: "/src/assets/CR/images/fa010811_156a.jpg",
      title: "Plate 2",
      info: "Mother holding the 10 day old me",
    },
    {
      plate: "plate03",
      img: "/src/assets/CR/images/fa010828_060a.jpg",
      title: "Plate 3",
      info: 'The 26 day old me "sitting" on sofa',
    },
    {
      plate: "plate04",
      img: "/src/assets/CR/images/fa010930_051L.webp",
      title: "Plate 4",
      info: "Nearly two month old.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CR/images/fa011013_004a.jpg",
      title: "Plate 5",
      info: "The first glimpse of smile from the two and a half month old me.",
    },
    {
      plate: "plate06",
      img: "/src/assets/CR/images/fa011202_266a.jpg",
      title: "Plate 6",
      info: "4 month old leaning on a cushion.",
    },
    {
      plate: "plate07",
      img: "/src/assets/CR/images/fa011207_007a.jpg",
      title: "Plate 7",
      info: "The 4 month old me in a walking chair.",
    },
    {
      plate: "plate08",
      img: "/src/assets/CR/images/fa011230_022a.jpg",
      title: "Plate 8",
      info: "Nearly 5 month old.",
    },
    {
      plate: "plate09",
      img: "/src/assets/CR/images/fa020101_056ar.jpg",
      title: "Plate 9",
      info: "The first New Year day for me, in 2002.",
    },
    {
      plate: "plate10",
      img: "/src/assets/CR/images/fa020113_203a.jpg",
      title: "Plate 10",
      info: "Five and a half month old.",
    },
    {
      plate: "plate11",
      img: "/src/assets/CR/images/fa020203_042a.jpg",
      title: "Plate 11",
      info: "Six month old me smiling happily.",
    },
    {
      plate: "plate12",
      img: "/src/assets/CR/images/fa020213_005ar.jpg",
      title: "Plate 12",
      info: "Securely in the care of mom.",
    },
    {
      plate: "plate13",
      img: "/src/assets/CR/images/fa020213_111a.jpg",
      title: "Plate 13",
      info: "My first Chinese New Year for the six and a half month old me.",
    },
    {
      plate: "plate14",
      img: "/src/assets/CR/images/fa020217_026a.jpg",
      title: "Plate 14",
      info: "Smiling at six and a half month old.",
    },
    {
      plate: "plate15",
      img: "/src/assets/CR/images/fa020223_069a.jpg",
      title: "Plate 15",
      info: "See me in purple and a hat.",
    },
    {
      plate: "plate16",
      img: "/src/assets/CR/images/fa020310_026ar.jpg",
      title: "Plate 16",
      info: "At seven month old, I am enjoying the joy of my foot.",
    },
    {
      plate: "plate17",
      img: "/src/assets/CR/images/fa020310_031a.jpg",
      title: "Plate 17",
      info: "More joy with foot.",
    },
    {
      plate: "plate18",
      img: "/src/assets/CR/images/fa020413_025a.jpg",
      title: "Plate 18",
      info: "Eight and a half month old me in the park, with female cousin Lily at my back",
    },
    {
      plate: "plate19",
      img: "/src/assets/CR/images/fa020427_047a.jpg",
      title: "Plate 19",
      info: "Nearly nine month old.",
    },
    {
      plate: "plate20",
      img: "/src/assets/CR/images/fa020508_007a.jpg",
      title: "Plate 20",
      info: "My early days in the beach.",
    },
    {
      plate: "plate21",
      img: "/src/assets/CR/images/fa020615_079a.jpg",
      title: "Plate 21",
      info: "Ten and a half month old me still learning hard to walk.",
    },
    {
      plate: "plate22",
      img: "/src/assets/CR/images/fa020714_032a.jpg",
      title: "Plate 22",
      info: "See! I can finally walk after 11 months and 12 days coming into this world.",
    },
    {
      plate: "plate23",
      img: "/src/assets/CR/images/fa020728_247a.jpg",
      title: "Plate 23",
      info: "My first Birthday party at McDonald.",
    },
    {
      plate: "plate24",
      img: "/src/assets/CR/images/fa021027_123Bar.jpg",
      title: "Plate 24",
      info: "14 month old with Jonathan and Chris.",
    },
    {
      plate: "plate25",
      img: "/src/assets/CR/images/fa021109_003Bar.jpg",
      title: "Plate 25",
      info: "15 month old me in Tai Tam Country Park.",
    },
    {
      plate: "plate26",
      img: "/src/assets/CR/images/fa030112_052ar.jpg",
      title: "Plate 26",
      info: "In a restaurant in South Horizons when I was 17 month old.",
    },
    {
      plate: "plate27",
      img: "/src/assets/CR/images/fa030203_108ar.jpg",
      title: "Plate 27",
      info: "A taste of Tennis for the 18 month old me.",
    },
    {
      plate: "plate28",
      img: "/src/assets/CR/images/fa030330_008ar.jpg",
      title: "Plate 28",
      info: "The 20 month old me playing in the sand as ever.",
    },
    {
      plate: "plate29",
      img: "/src/assets/CR/images/fa030413_002ar.jpg",
      title: "Plate 29",
      info: "The 20 month old me getting ready for the beach.",
    },
    {
      plate: "plate30",
      img: "/src/assets/CR/images/fa030518_005ar.jpg",
      title: "Plate 30",
      info: "At home when I was 21 month old.",
    },
    {
      plate: "plate31",
      img: "/src/assets/CR/images/fa030727_012ar.jpg",
      title: "Plate 31",
      info: "With mother in my two year old birthday party.",
    },
    {
      plate: "plate32",
      img: "/src/assets/CR/images/fa030907_057ar.jpg",
      title: "Plate 32",
      info: "In the podium garden with my brothers when I was 25 month old.",
    },
    {
      plate: "plate33",
      img: "/src/assets/CR/images/fa040411_003Bar.jpg",
      title: "Plate 33",
      info: "Two and a half year old me again in the Country Park.",
    },
    {
      plate: "plate34",
      img: "/src/assets/CR/images/fa040622_123Bar.jpg",
      title: "Plate 34",
      info: "With brothers in the garden for the almost 3 year old me.",
    },
    {
      plate: "plate35",
      img: "/src/assets/CR/images/fa040802_102ar.jpg",
      title: "Plate 35",
      info: "Celebrating my 3 year old birthday in karaoke with my family..",
    },
    {
      plate: "plate36",
      img: "/src/assets/CR/images/fa050212_071ar.jpg",
      title: "Plate 36",
      info: "In Aberdeen Country Park when I was almost 4 year old.",
    },
    {
      plate: "plate37",
      img: "/src/assets/CR/images/fa060513_194ar.jpg",
      title: "Plate 37",
      info: "Smiling in black.",
    },
    {
      plate: "plate38",
      img: "/src/assets/CR/images/fa060530_006ar.jpg",
      title: "Plate 38",
      info: "See me in black and bag.",
    },
    {
      plate: "plate39",
      img: "/src/assets/CR/images/fa060617_003Bar.jpg",
      title: "Plate 39",
      info: "By the seaside during sunset when I was almost five.",
    },
    {
      plate: "plate40",
      img: "/src/assets/CR/images/fa060910_139ar.jpg",
      title: "Plate 40",
      info: "Making Fun.",
    },
    {
      plate: "plate41",
      img: "/src/assets/CR/images/fa061022_126ar.jpg",
      title: "Plate 41",
      info: "On a Yacht.",
    },
    {
      plate: "plate42",
      img: "/src/assets/CR/images/fa070221_354250824SQ.webp",
      title: "Plate 42",
      info: "Five and a half in a white shirt.",
    },
    {
      plate: "plate43",
      img: "/src/assets/CR/images/fa070401_123Bar.jpg",
      title: "Plate 43",
      info: "At the peak with brothers when I was five and a half.",
    },
    {
      plate: "plate44",
      img: "/src/assets/CR/images/fa070602_003Bar.jpg",
      title: "Plate 44",
      info: "Lady in red.",
    },
    {
      plate: "plate45",
      img: "/src/assets/CR/images/fa070902_123Bar.jpg",
      title: "Plate 45",
      info: "In Stanley with Jonathan and Chris.",
    },
    {
      plate: "plate46",
      img: "/src/assets/CR/images/fa071117_003B.jpg",
      title: "Plate 46",
      info: "Smile and sunshine.",
    },
    {
      plate: "plate47",
      img: "/src/assets/CR/images/fa080511_831ar.jpg",
      title: "Plate 47",
      info: "I was at the Scout Olympic sports day at the Wanchai Sports Ground with Jonathan and Chris.",
    },
    {
      plate: "plate48",
      img: "/src/assets/CR/images/fa080512_260ar.jpg",
      title: "Plate 48",
      info: "Hitting a forehand with mother's racket.",
    },
  ];

  return {
    caraheader,
    caraPhotosPlates,
  };
};
