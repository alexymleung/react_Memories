import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.webp";
import fa000109_026ar from "../../assets/CL/images/fa000109_026ar.jpg";
import fa000113_048ar from "../../assets/CL/images/fa000113_048ar.jpg";
import fa000117_303ar from "../../assets/CL/images/fa000117_303ar.jpg";
import fa000125_213ar from "../../assets/CL/images/fa000125_213ar.jpg";
import fa000206_115ar from "../../assets/CL/images/fa000206_115ar.jpg";
import fa000218_105ar from "../../assets/CL/images/fa000218_105ar.jpg";
import fa000417_125ar from "../../assets/CL/images/fa000417_125ar.jpg";
import fa000515_121ar from "../../assets/CL/images/fa000515_121ar.jpg";
import fa000615_116ar from "../../assets/CL/images/fa000615_116ar.jpg";
import fa001008_105ar from "../../assets/CL/images/fa001008_105ar.jpg";
import fa010107_124ar from "../../assets/CL/images/fa010107_124ar.jpg";
import fa010117_103ar from "../../assets/CL/images/fa010117_103ar.jpg";
import fa010811_172ar from "../../assets/CL/images/fa010811_172ar.jpg";
import fa011225_002Bar from "../../assets/CL/images/fa011225_002Bar.jpg";
import fa020120_130ar from "../../assets/CL/images/fa020120_130ar.jpg";
import fa020216_002Bar from "../../assets/CL/images/fa020216_002Bar.jpg";
import fa020217_057ar from "../../assets/CL/images/fa020217_057ar.jpg";
import fa020824_025ar from "../../assets/CL/images/fa020824_025ar.jpg";
import fa030105_042ar from "../../assets/CL/images/fa030105_042ar.jpg";
import fa030406_123Bar from "../../assets/CL/images/fa030406_123Bar.jpg";
import fa030407_006ar from "../../assets/CL/images/fa030407_006ar.jpg";
import fa030820_034ar from "../../assets/CL/images/fa030820_034ar.jpg";
import fa031123_003ar from "../../assets/CL/images/fa031123_003ar.jpg";
import fa040725_040ar from "../../assets/CL/images/fa040725_040ar.jpg";
import fa041003_002Bar from "../../assets/CL/images/fa041003_002Bar.jpg";
import fa050106_030ar from "../../assets/CL/images/fa050106_030ar.jpg";
import fa050705_101ar from "../../assets/CL/images/fa050705_101ar.jpg";
import fa060101_253ar from "../../assets/CL/images/fa060101_253ar.jpg";
import fa060102_386ar from "../../assets/CL/images/fa060102_386ar.jpg";
import fa060127_247ar from "../../assets/CL/images/fa060127_247ar.jpg";
import fa060212_002Bar from "../../assets/CL/images/fa060212_002Bar.jpg";
import fa060617_075ar from "../../assets/CL/images/fa060617_075ar.jpg";
import fa070101_139ar from "../../assets/CL/images/fa070101_139ar.jpg";
import fa070204_123Bar from "../../assets/CL/images/fa070204_123Bar.jpg";
import fa070401_002Bar from "../../assets/CL/images/fa070401_002Bar.jpg";
import fa070513_123Bar from "../../assets/CL/images/fa070513_123Bar.jpg";
import fa070818_002Bar from "../../assets/CL/images/fa070818_002Bar.jpg";
import fa080102_006ar from "../../assets/CL/images/fa080102_006ar.jpg";
import fa080411_094ar from "../../assets/CL/images/fa080411_094ar.jpg";
import fa080420_101ar from "../../assets/CL/images/fa080420_101ar.jpg";
import fa080511_346ar from "../../assets/CL/images/fa080511_346ar.jpg";
import fa0810011335ar from "../../assets/CL/images/fa0810011335ar.jpg";

export const ChrisPhotosData = () => {
  const { currentTheme } = useTheme();

  const chrisheader = {
    image: ChrisBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const chrisPhotosPlates = [
    {
      plate: "plate01",
      img: fa000109_026ar,
      title: "Plate 1",
      info: "4 Day old me sleeping sweetly.",
    },
    {
      plate: "plate02",
      img: fa000113_048ar,
      title: "Plate 2",
      info: "Eight Day old me looking into the world.",
    },
    {
      plate: "plate03",
      img: fa000117_303ar,
      title: "Plate 3",
      info: "12 Day old wrapped tightly in the warmth of blanket during winter",
    },
    {
      plate: "plate04",
      img: fa000125_213ar,
      title: "Plate 4",
      info: "20 Day old me posing together with brother Jonathan.",
    },
    {
      plate: "plate05",
      img: fa000206_115ar,
      title: "Plate 5",
      info: "One month old",
    },
    {
      plate: "plate06",
      img: fa000218_105ar,
      title: "Plate 6",
      info: "45 Day old smiling sweetly.",
    },
    {
      plate: "plate07",
      img: fa000417_125ar,
      title: "Plate 7",
      info: "See the cute three and a half month old me.",
    },
    {
      plate: "plate08",
      img: fa000515_121ar,
      title: "Plate 8",
      info: "Four and a half month old me smiling broadly.",
    },
    {
      plate: "plate09",
      img: fa000615_116ar,
      title: "Plate 9",
      info: "Nearly half a year old.",
    },
    {
      plate: "plate10",
      img: fa001008_105ar,
      title: "Plate 10",
      info: "10 month old me sitting in a double cart with Jonathan.",
    },
    {
      plate: "plate11",
      img: fa010107_124ar,
      title: "Plate 11",
      info: "One year old me looking on with Jonathan.",
    },
    {
      plate: "plate12",
      img: fa010117_103ar,
      title: "Plate 12",
      info: "With father in a restaurant.",
    },
    {
      plate: "plate13",
      img: fa010811_172ar,
      title: "Plate 13",
      info: "The one and a half year old me",
    },
    {
      plate: "plate14",
      img: fa011225_002Bar,
      title: "Plate 14",
      info: "Nearly two year old me in Ocean Park.",
    },
    {
      plate: "plate15",
      img: fa020120_130ar,
      title: "Plate 15",
      info: "Two year old me playing computer with Jonathan",
    },
    {
      plate: "plate16",
      img: fa020216_002Bar,
      title: "Plate 16",
      info: "In TaiKoo Plaza during Chinese New Year.",
    },
    {
      plate: "plate17",
      img: fa020217_057ar,
      title: "Plate 17",
      info: "Big smile in the garden.",
    },
    {
      plate: "plate18",
      img: fa020824_025ar,
      title: "Plate 18",
      info: "Enjoying swimming when I was 2 and a half year old.",
    },
    {
      plate: "plate19",
      img: fa030105_042ar,
      title: "Plate 19",
      info: "3 Year old me hiking in Yuk Kwai Shan.",
    },
    {
      plate: "plate20",
      img: fa030406_123Bar,
      title: "Plate 20",
      info: ">With Jonathan and Cara in South Horizons Plaza.",
    },
    {
      plate: "plate21",
      img: fa030407_006ar,
      title: "Plate 21",
      info: "Playing computer with Jonathan and Cara at home.",
    },
    {
      plate: "plate22",
      img: fa030820_034ar,
      title: "Plate 22",
      info: "3 and a half year old me with Cara in South Horizons",
    },
    {
      plate: "plate23",
      img: fa031123_003ar,
      title: "Plate 23",
      info: "Nearly 4 year old in Shek Lei Pei Restaurant.",
    },
    {
      plate: "plate24",
      img: fa040725_040ar,
      title: "Plate 24",
      info: "Playing tennis when I was 4 and a half.",
    },
    {
      plate: "plate25",
      img: fa041003_002Bar,
      title: "Plate 25",
      info: "Nearly five year old me by the side of Mother.",
    },
    {
      plate: "plate26",
      img: fa050106_030ar,
      title: "Plate 26",
      info: "Five year old me playing tennis with Jonathan.",
    },
    {
      plate: "plate27",
      img: fa050705_101ar,
      title: "Plate 27",
      info: "Marvelling at the Dinosaur exhibition n Taikoo Shing.",
    },
    {
      plate: "plate28",
      img: fa060101_253ar,
      title: "Plate 28",
      info: "Six year old birthday party with family",
    },
    {
      plate: "plate29",
      img: fa060102_386ar,
      title: "Plate 29",
      info: "See me ride in a two wheel bike.",
    },
    {
      plate: "plate30",
      img: fa060127_247ar,
      title: "Plate 30",
      info: "N3 at the New Year Bonanza.",
    },
    {
      plate: "plate31",
      img: fa060212_002Bar,
      title: "In the peak garden.",
    },
    {
      plate: "plate32",
      img: fa060617_075ar,
      title: "Plate 32",
      info: "Six and a half in the garden.",
    },
    {
      plate: "plate33",
      img: fa070101_139ar,
      title: "Plate 33",
      info: "Taken in my 7 year old birthday party.",
    },
    {
      plate: "plate34",
      img: fa070204_123Bar,
      title: "Plate 34",
      info: "Smiling happily with Jonathan and Chris in the tennis court.",
    },
    {
      plate: "plate35",
      img: fa070401_002Bar,
      title: "Plate 35",
      info: "In the peak after a walk as a scout.",
    },
    {
      plate: "plate36",
      img: fa070513_123Bar,
      title: "Plate 36",
      info: "7 year old me in the garden with Jonathan and Cara",
    },
    {
      plate: "plate37",
      img: fa070818_002Bar,
      title: "Plate 37",
      info: "Seven and a half year old me in Wong Chuk Hang.",
    },
    {
      plate: "plate38",
      img: fa080102_006ar,
      title: "Plate 38",
      info: "Eight Year old me smiling happily with Jonathan in a soccer class.",
    },
    {
      plate: "plate39",
      img: fa080411_094ar,
      title: "Plate 39",
      info: "In a tennis class with brother Jonathan.",
    },
    {
      plate: "plate40",
      img: fa080420_101ar,
      title: "Plate 40",
      info: "Tennis Fun in South Horizons.",
    },
    {
      plate: "plate41",
      img: fa080511_346ar,
      title: "Plate 41",
      info: "With Mama in Scout Sports Day.",
    },
    {
      plate: "plate42",
      img: fa0810011335ar,
      title: "Plate 42",
      info: "Coming off a day in Sailing.",
    },
  ];

  return {
    chrisheader,
    chrisPhotosPlates,
  };
};
