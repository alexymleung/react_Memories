import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.webp";
import f0981205_003ar from "../../assets/JL/images/f0981205_003ar.jpg";
import f0981211_002ar from "../../assets/JL/images/f0981211_002ar.jpg";
import f0990101_222ar from "../../assets/JL/images/f0990101_222ar.jpg";
import f0990110_014ar from "../../assets/JL/images/f0990110_014ar.jpg";
import f0990130_006a from "../../assets/JL/images/f0990130_006a.jpg";
import f0990304_019ar from "../../assets/JL/images/f0990304_019ar.jpg";
import f0990407_020ar from "../../assets/JL/images/f0990407_020ar.jpg";
import f0990603_034ar from "../../assets/JL/images/f0990603_034ar.jpg";
import f0990702_007ar from "../../assets/JL/images/f0990702_007ar.jpg";
import f0990827_030ar from "../../assets/JL/images/f0990827_030ar.jpg";
import f0991009_028ar from "../../assets/JL/images/f0991009_028ar.jpg";
import f0991029_024ar from "../../assets/JL/images/f0991029_024ar.jpg";
import f0991204_124ar from "../../assets/JL/images/f0991204_124ar.jpg";
import fa000109_015ar from "../../assets/JL/images/fa000109_015ar.jpg";
import fa000112_019ar from "../../assets/JL/images/fa000112_019ar.jpg";
import fa000403_131ar from "../../assets/JL/images/fa000403_131ar.jpg";
import fa000622_221ar from "../../assets/JL/images/fa000622_221ar.jpg";
import fa001210_109ar from "../../assets/JL/images/fa001210_109ar.jpg";
import fa010928_001 from "../../assets/JL/images/fa010928_001.jpg";
import fa011125_041ar from "../../assets/JL/images/fa011125_041ar.jpg";
import fa020210_034ar from "../../assets/JL/images/fa020210_034ar.jpg";
import fa020212_082ar from "../../assets/JL/images/fa020212_082ar.jpg";
import fa020213_151_1000 from "../../assets/JL/images/fa020213_151_1000.jpg";
import fa020427_008ar from "../../assets/JL/images/fa020427_008ar.jpg";
import fa020811_018ar from "../../assets/JL/images/fa020811_018ar.jpg";
import fa020824_001B from "../../assets/JL/images/fa020824_001B.jpg";
import fa021201_026ar from "../../assets/JL/images/fa021201_026ar.jpg";
import fa030105_043ar from "../../assets/JL/images/fa030105_043ar.jpg";
import fa030501_068ar from "../../assets/JL/images/fa030501_068ar.jpg";
import fa031101_015ar from "../../assets/JL/images/fa031101_015ar.jpg";
import fa031116_030ar from "../../assets/JL/images/fa031116_030ar.jpg";
import fa040118_006ar from "../../assets/JL/images/fa040118_006ar.jpg";
import fa040701_123Bar from "../../assets/JL/images/fa040701_123Bar.jpg";
import fa041003_014ar from "../../assets/JL/images/fa041003_014ar.jpg";
import fa041217_001Bar from "../../assets/JL/images/fa041217_001Bar.jpg";
import fa050417_043ar from "../../assets/JL/images/fa050417_043ar.jpg";
import fa050703_001Bar from "../../assets/JL/images/fa050703_001Bar.jpg";
import fa050903_107ar from "../../assets/JL/images/fa050903_107ar.jpg";
import fa051204_323ar from "../../assets/JL/images/fa051204_323ar.jpg";
import fa060617_293ar from "../../assets/JL/images/fa060617_293ar.jpg";
import fa060820_001Bar from "../../assets/JL/images/fa060820_001Bar.jpg";
import fa061217_123Bar from "../../assets/JL/images/fa061217_123Bar.jpg";
import fa070513_001Bar from "../../assets/JL/images/fa070513_001Bar.jpg";
import fa070603_123Bar from "../../assets/JL/images/fa070603_123Bar.jpg";
import fa070616_001Bar from "../../assets/JL/images/fa070616_001Bar.jpg";
import fa070707_001Bar from "../../assets/JL/images/fa070707_001Bar.jpg";
import fa071208_300cr from "../../assets/JL/images/fa071208_300cr.jpg";
import fa080420_171ar from "../../assets/JL/images/fa080420_171ar.jpg";
import fa080511_585ar from "../../assets/JL/images/fa080511_585ar.jpg";

export const JonPhotosData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const jonPhotosPlates = [
    {
      plate: "plate01",
      img: f0981205_003ar,
      title: "Plate 1",
      info: "3 Days into this world.",
    },
    {
      plate: "plate02",
      img: f0981211_002ar,
      title: "Plate 2",
      info: "Nine-day Old",
    },
    {
      plate: "plate03",
      img: f0990101_222ar,
      title: "Plate 3",
      info: "One month old where Auntie is holding happily me in the full month dinner.",
    },
    {
      plate: "plate04",
      img: f0990110_014ar,
      title: "Plate 4",
      info: "Mama & 39d-old me.",
    },
    {
      plate: "plate05",
      img: f0990130_006a,
      title: "Plate 5",
      info: "First-glimpse smiling in the 2-month old.",
    },
    {
      plate: "plate06",
      img: f0990304_019ar,
      title: "Plate 6",
      info: "3m-old in Dad's arms smiling.",
    },
    {
      plate: "plate07",
      img: f0990407_020ar,
      title: "Plate 7",
      info: "4m-old giggling with Dad in the playground.",
    },
    {
      plate: "plate08",
      img: f0990603_034ar,
      title: "Plate 8",
      info: "6m-old in the heat of summer.",
    },
    {
      plate: "plate09",
      img: f0990702_007ar,
      title: "Plate 9",
      info: "7m old Jon contemplating swimming.",
    },
    {
      plate: "plate10",
      img: f0990827_030ar,
      title: "Plate 10",
      info: "8m-old with eyes wide open in a restaurant with Mom.",
    },
    {
      plate: "plate11",
      img: f0991009_028ar,
      title: "Plate 11",
      info: "10 month old with big foot sitting on the dinning table at home.",
    },
    {
      plate: "plate12",
      img: f0991029_024ar,
      title: "Plate 12",
      info: "11 month old with Mom in Stanley Market Road in the evening two days before Halloween.",
    },
    {
      plate: "plate13",
      img: f0991204_124ar,
      title: "Plate 13",
      info: "1y-old birthday party.",
    },
    {
      plate: "plate14",
      img: fa000109_015ar,
      title: "Plate 14",
      info: "13-m old wandering at home.",
    },
    {
      plate: "plate15",
      img: fa000112_019ar,
      title: "Plate 15",
      info: "13-m old sitting on a crouch",
    },
    {
      plate: "plate16",
      img: fa000403_131ar,
      title: "Plate 16",
      info: "16m old me with 3m old brother Chris.",
    },
    {
      plate: "plate17",
      img: fa000622_221ar,
      title: "Plate 17",
      info: "19m old in the playground.",
    },
    {
      plate: "plate18",
      img: fa001210_109ar,
      title: "Plate 18",
      info: "2y old at home.",
    },
    {
      plate: "plate19",
      img: fa010928_001,
      title: "Plate 19",
      info: "Going to N1 at 宣道會海怡幼兒學校 in 2001.",
    },
    {
      plate: "plate20",
      img: fa011125_041ar,
      title: "Plate 20",
      info: "At home with Chris and Cara when I was almost 3y-old.",
    },
    {
      plate: "plate21",
      img: fa020210_034ar,
      title: "Plate 21",
      info: "With Chris and Cara just outside the Marina Square when I was three.",
    },
    {
      plate: "plate22",
      img: fa020212_082ar,
      title: "Plate 22",
      info: "Chris and Cara with me in the Garden.",
    },
    {
      plate: "plate23",
      img: fa020213_151_1000,
      title: "Plate 23",
      info: "Playing happily in the playground in the Chinese New Year 2002.",
    },
    {
      plate: "plate24",
      img: fa020427_008ar,
      title: "Plate 24",
      info: "With brother Chris when I was 3 year and 5 month old.",
    },
    {
      plate: "plate25",
      img: fa020811_018ar,
      title: "Plate 25",
      info: "I was playing tennis while Cara was at the back playing with Mom's racket.",
    },
    {
      plate: "plate26",
      img: fa020824_001B,
      title: "Plate 26",
      info: "Much fun swimming in the pool when I was 3 and a half year old.",
    },
    {
      plate: "plate27",
      img: fa021201_026ar,
      title: "Plate 27",
      info: "With Chris and Cara in the garden.",
    },
    {
      plate: "plate28",
      img: fa030105_043ar,
      title: "Plate 28",
      info: "4y old me in Yuk Kwai Shan",
    },
    {
      plate: "plate29",
      img: fa030501_068ar,
      title: "Plate 29",
      info: "Four and a half year old me with Chris and Cara, just finished hiking in Pok Fu Lam trail, resting on top of the service reservoir.",
    },
    {
      plate: "plate30",
      img: fa031101_015ar,
      title: "Plate 30",
      info: "Taken in the school sports day in Wu Kai Sha with 李采嫣 on my right and 梁浠潁 to my left.",
    },
    {
      plate: "plate31",
      img: fa031116_030ar,
      title: "Plate 31",
      info: "Nearly 5-year-old in Lamma Island 南丫島洪聖爺海灘 with Cara and Chris.",
    },
    {
      plate: "plate32",
      img: fa040118_006ar,
      title: "Plate 32",
      info: "Hiking in Pok Fu Lam Reservoir with Chris and Cara when I was five.",
    },
    {
      plate: "plate33",
      img: fa040701_123Bar,
      title: "Plate 33",
      info: "Five and a half me just having bike rides with Chris and Cara.",
    },
    {
      plate: "plate34",
      img: fa041003_014ar,
      title: "Plate 34",
      info: "In 西灣河太安樓太興燒味 after a tennis lesson in 2004.",
    },
    {
      plate: "plate35",
      img: fa041217_001Bar,
      title: "Plate 35",
      info: "6y old in the final year N4, on the way to school, 宣道會",
    },
    {
      plate: "plate36",
      img: fa050417_043ar,
      title: "Plate 36",
      info: "Having fun in a cart while camping at 麥理浩夫人度假村",
    },
    {
      plate: "plate37",
      img: fa050703_001Bar,
      title: "Plate 37",
      info: "Six and a half year old in the summer just before going into primary One, swimming at Deep Water Bay",
    },
    {
      plate: "plate38",
      img: fa050903_107ar,
      title: "Plate 38",
      info: "Attending a table-tennis class in Wanchai Harbour Road Sports Centre in the summer of 2005.",
    },
    {
      plate: "plate39",
      img: fa051204_323ar,
      title: "Plate 39",
      info: "7y-old birthday party with my family at Aberdeen McDonald.",
    },
    {
      plate: "plate40",
      img: fa060617_293ar,
      title: "Plate 40",
      info: "Seven and a half year old me at eh sunset by the seaside promenade in South Horizons.",
    },
    {
      plate: "plate41",
      img: fa060820_001Bar,
      title: "Plate 41",
      info: "Seven and a half year old me in the deep water bay after finishing Primary One in the summer of 2006.",
    },
    {
      plate: "plate42",
      img: fa061217_123Bar,
      title: "Plate 42",
      info: "8-Year-old me with Chris and Cara in the sunshine.",
    },
    {
      plate: "plate43",
      img: fa070513_001Bar,
      title: "Plate 43",
      info: "Eight and a half year old me forever smiling.",
    },
    {
      plate: "plate44",
      img: fa070603_123Bar,
      title: "Plate 44",
      info: "In the garden with Chris and Cara",
    },
    {
      plate: "plate45",
      img: fa070616_001Bar,
      title: "Plate 45",
      info: "After a soccer game",
    },
    {
      plate: "plate46",
      img: fa070707_001Bar,
      title: "Plate 46",
      info: "After a tennis lesson in Wong Chuk Hang Sports Stadium in the summer of 2007.",
    },
    {
      plate: "plate47",
      img: fa071208_300cr,
      title: "Plate 47",
      info: "Nine year old me in St. Stephen Bay at Stanley.",
    },
    {
      plate: "plate48",
      img: fa080420_171ar,
      title: "Plate 48",
      info: "In a tennis game at home.",
    },
    {
      plate: "plate49",
      img: fa080511_585ar,
      title: "Plate 49",
      info: "Nine and a half me in the Scout Sports Day in Wanchai Sports Ground. The one next to me is Liu King Yan.",
    },
  ];

  return {
    jonheader,
    jonPhotosPlates,
  };
};
