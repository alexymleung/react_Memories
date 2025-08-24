import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.webp";

export const ChrisPhotosData = () => {
  const { currentTheme } = useTheme();

  const chrisheader = {
    image: ChrisBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const chrisPhotosPlates = [
    {
      plate: "plate01",
      img: "/src/assets/CL/images/fa000109_026ar.jpg",
      title: "Plate 1",
      info: "4 Day old me sleeping sweetly.",
    },
    {
      plate: "plate02",
      img: "/src/assets/CL/images/fa000113_048ar.jpg",
      title: "Plate 2",
      info: "Eight Day old me looking into the world.",
    },
    {
      plate: "plate03",
      img: "/src/assets/CL/images/fa000117_303ar.jpg",
      title: "Plate 3",
      info: "12 Day old wrapped tightly in the warmth of blanket during winter",
    },
    {
      plate: "plate04",
      img: "/src/assets/CL/images/fa000125_213ar.jpg",
      title: "Plate 4",
      info: "20 Day old me posing together with brother Jonathan.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CL/images/fa000206_115ar.jpg",
      title: "Plate 5",
      info: "One month old",
    },
    {
      plate: "plate06",
      img: "/src/assets/CL/images/fa000218_105ar.jpg",
      title: "Plate 6",
      info: "45 Day old smiling sweetly.",
    },
    {
      plate: "plate07",
      img: "/src/assets/CL/images/fa000417_125ar.jpg",
      title: "Plate 7",
      info: "See the cute three and a half month old me.",
    },
    {
      plate: "plate08",
      img: "/src/assets/CL/images/fa000515_121ar.jpg",
      title: "Plate 8",
      info: "Four and a half month old me smiling broadly.",
    },
    {
      plate: "plate09",
      img: "/src/assets/CL/images/fa000615_116ar.jpg",
      title: "Plate 9",
      info: "Nearly half a year old.",
    },
    {
      plate: "plate10",
      img: "/src/assets/CL/images/fa001008_105ar.jpg",
      title: "Plate 10",
      info: "10 month old me sitting in a double cart with Jonathan.",
    },
    {
      plate: "plate11",
      img: "/src/assets/CL/images/fa010107_124ar.jpg",
      title: "Plate 11",
      info: "One year old me looking on with Jonathan.",
    },
    {
      plate: "plate12",
      img: "/src/assets/CL/images/fa010117_103ar.jpg",
      title: "Plate 12",
      info: "With father in a restaurant.",
    },
    {
      plate: "plate13",
      img: "/src/assets/CL/images/fa010811_172ar.jpg",
      title: "Plate 13",
      info: "The one and a half year old me",
    },
    {
      plate: "plate14",
      img: "/src/assets/CL/images/fa011225_002Bar.jpg",
      title: "Plate 14",
      info: "Nearly two year old me in Ocean Park.",
    },
    {
      plate: "plate15",
      img: "/src/assets/CL/images/fa020120_130ar.jpg",
      title: "Plate 15",
      info: "Two year old me playing computer with Jonathan",
    },
    {
      plate: "plate16",
      img: "/src/assets/CL/images/fa020216_002Bar.jpg",
      title: "Plate 16",
      info: "In TaiKoo Plaza during Chinese New Year.",
    },
    {
      plate: "plate17",
      img: "/src/assets/CL/images/fa020217_057ar.jpg",
      title: "Plate 17",
      info: "Big smile in the garden.",
    },
    {
      plate: "plate18",
      img: "/src/assets/CL/images/fa020824_025ar.jpg",
      title: "Plate 18",
      info: "Enjoying swimming when I was 2 and a half year old.",
    },
    {
      plate: "plate19",
      img: "/src/assets/CL/images/fa030105_042ar.jpg",
      title: "Plate 19",
      info: "3 Year old me hiking in Yuk Kwai Shan.",
    },
    {
      plate: "plate20",
      img: "/src/assets/CL/images/fa030406_123Bar.jpg",
      title: "Plate 20",
      info: ">With Jonathan and Cara in South Horizons Plaza.",
    },
    {
      plate: "plate21",
      img: "/src/assets/CL/images/fa030407_006ar.jpg",
      title: "Plate 21",
      info: "Playing computer with Jonathan and Cara at home.",
    },
    {
      plate: "plate22",
      img: "/src/assets/CL/images/fa030820_034ar.jpg",
      title: "Plate 22",
      info: "3 and a half year old me with Cara in South Horizons",
    },
    {
      plate: "plate23",
      img: "/src/assets/CL/images/fa031123_003ar.jpg",
      title: "Plate 23",
      info: "Nearly 4 year old in Shek Lei Pei Restaurant.",
    },
    {
      plate: "plate24",
      img: "/src/assets/CL/images/fa040725_040ar.jpg",
      title: "Plate 24",
      info: "Playing tennis when I was 4 and a half.",
    },
    {
      plate: "plate25",
      img: "/src/assets/CL/images/fa041003_002Bar.jpg",
      title: "Plate 25",
      info: "Nearly five year old me by the side of Mother.",
    },
    {
      plate: "plate26",
      img: "/src/assets/CL/images/fa050106_030ar.jpg",
      title: "Plate 26",
      info: "Five year old me playing tennis with Jonathan.",
    },
    {
      plate: "plate27",
      img: "/src/assets/CL/images/fa050705_101ar.jpg",
      title: "Plate 27",
      info: "Marvelling at the Dinosaur exhibition n Taikoo Shing.",
    },
    {
      plate: "plate28",
      img: "/src/assets/CL/images/fa060101_253ar.jpg",
      title: "Plate 28",
      info: "Six year old birthday party with family",
    },
    {
      plate: "plate29",
      img: "/src/assets/CL/images/fa060102_386ar.jpg",
      title: "Plate 29",
      info: "See me ride in a two wheel bike.",
    },
    {
      plate: "plate30",
      img: "/src/assets/CL/images/fa060127_247ar.jpg",
      title: "Plate 30",
      info: "N3 at the New Year Bonanza.",
    },
    {
      plate: "plate31",
      img: "/src/assets/CL/images/fa060212_002Bar.jpg",
      title: "In the peak garden.",
    },
    {
      plate: "plate32",
      img: "/src/assets/CL/images/fa060617_075ar.jpg",
      title: "Plate 32",
      info: "Six and a half in the garden.",
    },
    {
      plate: "plate33",
      img: "/src/assets/CL/images/fa070101_139ar.jpg",
      title: "Plate 33",
      info: "Taken in my 7 year old birthday party.",
    },
    {
      plate: "plate34",
      img: "/src/assets/CL/images/fa070204_123Bar.jpg",
      title: "Plate 34",
      info: "Smiling happily with Jonathan and Chris in the tennis court.",
    },
    {
      plate: "plate35",
      img: "/src/assets/CL/images/fa070401_002Bar.jpg",
      title: "Plate 35",
      info: "In the peak after a walk as a scout.",
    },
    {
      plate: "plate36",
      img: "/src/assets/CL/images/fa070513_123Bar.jpg",
      title: "Plate 36",
      info: "7 year old me in the garden with Jonathan and Cara",
    },
    {
      plate: "plate37",
      img: "/src/assets/CL/images/fa070818_002Bar.jpg",
      title: "Plate 37",
      info: "Seven and a half year old me in Wong Chuk Hang.",
    },
    {
      plate: "plate38",
      img: "/src/assets/CL/images/fa080102_006ar.jpg",
      title: "Plate 38",
      info: "Eight Year old me smiling happily with Jonathan in a soccer class.",
    },
    {
      plate: "plate39",
      img: "/src/assets/CL/images/fa080411_094ar.jpg",
      title: "Plate 39",
      info: "In a tennis class with brother Jonathan.",
    },
    {
      plate: "plate40",
      img: "/src/assets/CL/images/fa080420_101ar.jpg",
      title: "Plate 40",
      info: "Tennis Fun in South Horizons.",
    },
    {
      plate: "plate41",
      img: "/src/assets/CL/images/fa080511_346ar.jpg",
      title: "Plate 41",
      info: "With Mama in Scout Sports Day.",
    },
    {
      plate: "plate42",
      img: "/src/assets/CL/images/fa0810011335ar.jpg",
      title: "Plate 42",
      info: "Coming off a day in Sailing.",
    },
  ];

  return {
    chrisheader,
    chrisPhotosPlates,
  };
};
