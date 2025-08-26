import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";
import fa010802_134a from "../../assets/CR/images/fa010802_134a.jpg";
import fa010811_156a from "../../assets/CR/images/fa010811_156a.jpg";
import fa010828_060a from "../../assets/CR/images/fa010828_060a.jpg";
import fa010930_051L from "../../assets/CR/images/fa010930_051L.webp";
import fa011013_004a from "../../assets/CR/images/fa011013_004a.jpg";
import fa011202_266a from "../../assets/CR/images/fa011202_266a.jpg";
import fa011207_007a from "../../assets/CR/images/fa011207_007a.jpg";
import fa011230_022a from "../../assets/CR/images/fa011230_022a.jpg";
import fa020101_056ar from "../../assets/CR/images/fa020101_056ar.jpg";
import fa020113_203a from "../../assets/CR/images/fa020113_203a.jpg";
import fa020203_042a from "../../assets/CR/images/fa020203_042a.jpg";
import fa020213_005ar from "../../assets/CR/images/fa020213_005ar.jpg";
import fa020213_111a from "../../assets/CR/images/fa020213_111a.jpg";
import fa020217_026a from "../../assets/CR/images/fa020217_026a.jpg";
import fa020223_069a from "../../assets/CR/images/fa020223_069a.jpg";
import fa020310_026ar from "../../assets/CR/images/fa020310_026ar.jpg";
import fa020310_031a from "../../assets/CR/images/fa020310_031a.jpg";
import fa020413_025a from "../../assets/CR/images/fa020413_025a.jpg";
import fa020427_047a from "../../assets/CR/images/fa020427_047a.jpg";
import fa020508_007a from "../../assets/CR/images/fa020508_007a.jpg";
import fa020615_079a from "../../assets/CR/images/fa020615_079a.jpg";
import fa020714_032a from "../../assets/CR/images/fa020714_032a.jpg";
import fa020728_247a from "../../assets/CR/images/fa020728_247a.jpg";
import fa021027_123Bar from "../../assets/CR/images/fa021027_123Bar.jpg";
import fa021109_003Bar from "../../assets/CR/images/fa021109_003Bar.jpg";
import fa030112_052ar from "../../assets/CR/images/fa030112_052ar.jpg";
import fa030203_108ar from "../../assets/CR/images/fa030203_108ar.jpg";
import fa030330_008ar from "../../assets/CR/images/fa030330_008ar.jpg";
import fa030413_002ar from "../../assets/CR/images/fa030413_002ar.jpg";
import fa030518_005ar from "../../assets/CR/images/fa030518_005ar.jpg";
import fa030727_012ar from "../../assets/CR/images/fa030727_012ar.jpg";
import fa030907_057ar from "../../assets/CR/images/fa030907_057ar.jpg";
import fa040411_003Bar from "../../assets/CR/images/fa040411_003Bar.jpg";
import fa040622_123Bar from "../../assets/CR/images/fa040622_123Bar.jpg";
import fa040802_102ar from "../../assets/CR/images/fa040802_102ar.jpg";
import fa050212_071ar from "../../assets/CR/images/fa050212_071ar.jpg";
import fa060513_194ar from "../../assets/CR/images/fa060513_194ar.jpg";
import fa060530_006ar from "../../assets/CR/images/fa060530_006ar.jpg";
import fa060617_003Bar from "../../assets/CR/images/fa060617_003Bar.jpg";
import fa060910_139ar from "../../assets/CR/images/fa060910_139ar.jpg";
import fa061022_126ar from "../../assets/CR/images/fa061022_126ar.jpg";
import fa070221_354250824SQ from "../../assets/CR/images/fa070221_354250824SQ.webp";
import fa070401_123Bar from "../../assets/CR/images/fa070401_123Bar.jpg";
import fa070602_003Bar from "../../assets/CR/images/fa070602_003Bar.jpg";
import fa070902_123Bar from "../../assets/CR/images/fa070902_123Bar.jpg";
import fa071117_003B from "../../assets/CR/images/fa071117_003B.jpg";
import fa080511_831ar from "../../assets/CR/images/fa080511_831ar.jpg";
import fa080512_260ar from "../../assets/CR/images/fa080512_260ar.jpg";

export const CaraPhotosData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const caraPhotosPlates = [
    {
      plate: "plate01",
      img: fa010802_134a,
      title: "Plate 1",
      info: "Just coming into this world.",
    },
    {
      plate: "plate02",
      img: fa010811_156a,
      title: "Plate 2",
      info: "Mother holding the 10 day old me",
    },
    {
      plate: "plate03",
      img: fa010828_060a,
      title: "Plate 3",
      info: 'The 26 day old me "sitting" on sofa',
    },
    {
      plate: "plate04",
      img: fa010930_051L,
      title: "Plate 4",
      info: "Nearly two month old.",
    },
    {
      plate: "plate05",
      img: fa011013_004a,
      title: "Plate 5",
      info: "The first glimpse of smile from the two and a half month old me.",
    },
    {
      plate: "plate06",
      img: fa011202_266a,
      title: "Plate 6",
      info: "4 month old leaning on a cushion.",
    },
    {
      plate: "plate07",
      img: fa011207_007a,
      title: "Plate 7",
      info: "The 4 month old me in a walking chair.",
    },
    {
      plate: "plate08",
      img: fa011230_022a,
      title: "Plate 8",
      info: "Nearly 5 month old.",
    },
    {
      plate: "plate09",
      img: fa020101_056ar,
      title: "Plate 9",
      info: "The first New Year day for me, in 2002.",
    },
    {
      plate: "plate10",
      img: fa020113_203a,
      title: "Plate 10",
      info: "Five and a half month old.",
    },
    {
      plate: "plate11",
      img: fa020203_042a,
      title: "Plate 11",
      info: "Six month old me smiling happily.",
    },
    {
      plate: "plate12",
      img: fa020213_005ar,
      title: "Plate 12",
      info: "Securely in the care of mom.",
    },
    {
      plate: "plate13",
      img: fa020213_111a,
      title: "Plate 13",
      info: "My first Chinese New Year for the six and a half month old me.",
    },
    {
      plate: "plate14",
      img: fa020217_026a,
      title: "Plate 14",
      info: "Smiling at six and a half month old.",
    },
    {
      plate: "plate15",
      img: fa020223_069a,
      title: "Plate 15",
      info: "See me in purple and a hat.",
    },
    {
      plate: "plate16",
      img: fa020310_026ar,
      title: "Plate 16",
      info: "At seven month old, I am enjoying the joy of my foot.",
    },
    {
      plate: "plate17",
      img: fa020310_031a,
      title: "Plate 17",
      info: "More joy with foot.",
    },
    {
      plate: "plate18",
      img: fa020413_025a,
      title: "Plate 18",
      info: "Eight and a half month old me in the park, with female cousin Lily at my back",
    },
    {
      plate: "plate19",
      img: fa020427_047a,
      title: "Plate 19",
      info: "Nearly nine month old.",
    },
    {
      plate: "plate20",
      img: fa020508_007a,
      title: "Plate 20",
      info: "My early days in the beach.",
    },
    {
      plate: "plate21",
      img: fa020615_079a,
      title: "Plate 21",
      info: "Ten and a half month old me still learning hard to walk.",
    },
    {
      plate: "plate22",
      img: fa020714_032a,
      title: "Plate 22",
      info: "See! I can finally walk after 11 months and 12 days coming into this world.",
    },
    {
      plate: "plate23",
      img: fa020728_247a,
      title: "Plate 23",
      info: "My first Birthday party at McDonald.",
    },
    {
      plate: "plate24",
      img: fa021027_123Bar,
      title: "Plate 24",
      info: "14 month old with Jonathan and Chris.",
    },
    {
      plate: "plate25",
      img: fa021109_003Bar,
      title: "Plate 25",
      info: "15 month old me in Tai Tam Country Park.",
    },
    {
      plate: "plate26",
      img: fa030112_052ar,
      title: "Plate 26",
      info: "In a restaurant in South Horizons when I was 17 month old.",
    },
    {
      plate: "plate27",
      img: fa030203_108ar,
      title: "Plate 27",
      info: "A taste of Tennis for the 18 month old me.",
    },
    {
      plate: "plate28",
      img: fa030330_008ar,
      title: "Plate 28",
      info: "The 20 month old me playing in the sand as ever.",
    },
    {
      plate: "plate29",
      img: fa030413_002ar,
      title: "Plate 29",
      info: "The 20 month old me getting ready for the beach.",
    },
    {
      plate: "plate30",
      img: fa030518_005ar,
      title: "Plate 30",
      info: "At home when I was 21 month old.",
    },
    {
      plate: "plate31",
      img: fa030727_012ar,
      title: "Plate 31",
      info: "With mother in my two year old birthday party.",
    },
    {
      plate: "plate32",
      img: fa030907_057ar,
      title: "Plate 32",
      info: "In the podium garden with my brothers when I was 25 month old.",
    },
    {
      plate: "plate33",
      img: fa040411_003Bar,
      title: "Plate 33",
      info: "Two and a half year old me again in the Country Park.",
    },
    {
      plate: "plate34",
      img: fa040622_123Bar,
      title: "Plate 34",
      info: "With brothers in the garden for the almost 3 year old me.",
    },
    {
      plate: "plate35",
      img: fa040802_102ar,
      title: "Plate 35",
      info: "Celebrating my 3 year old birthday in karaoke with my family..",
    },
    {
      plate: "plate36",
      img: fa050212_071ar,
      title: "Plate 36",
      info: "In Aberdeen Country Park when I was almost 4 year old.",
    },
    {
      plate: "plate37",
      img: fa060513_194ar,
      title: "Plate 37",
      info: "Smiling in black.",
    },
    {
      plate: "plate38",
      img: fa060530_006ar,
      title: "Plate 38",
      info: "See me in black and bag.",
    },
    {
      plate: "plate39",
      img: fa060617_003Bar,
      title: "Plate 39",
      info: "By the seaside during sunset when I was almost five.",
    },
    {
      plate: "plate40",
      img: fa060910_139ar,
      title: "Plate 40",
      info: "Making Fun.",
    },
    {
      plate: "plate41",
      img: fa061022_126ar,
      title: "Plate 41",
      info: "On a Yacht.",
    },
    {
      plate: "plate42",
      img: fa070221_354250824SQ,
      title: "Plate 42",
      info: "Five and a half in a white shirt.",
    },
    {
      plate: "plate43",
      img: fa070401_123Bar,
      title: "Plate 43",
      info: "At the peak with brothers when I was five and a half.",
    },
    {
      plate: "plate44",
      img: fa070602_003Bar,
      title: "Plate 44",
      info: "Lady in red.",
    },
    {
      plate: "plate45",
      img: fa070902_123Bar,
      title: "Plate 45",
      info: "In Stanley with Jonathan and Chris.",
    },
    {
      plate: "plate46",
      img: fa071117_003B,
      title: "Plate 46",
      info: "Smile and sunshine.",
    },
    {
      plate: "plate47",
      img: fa080511_831ar,
      title: "Plate 47",
      info: "I was at the Scout Olympic sports day at the Wanchai Sports Ground with Jonathan and Chris.",
    },
    {
      plate: "plate48",
      img: fa080512_260ar,
      title: "Plate 48",
      info: "Hitting a forehand with mother's racket.",
    },
  ];

  return {
    caraheader,
    caraPhotosPlates,
  };
};
