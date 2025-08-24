import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.webp";

export const JonPhotosData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const jonPhotosPlates = [
    {
      plate: "plate01",
      img: "/src/assets/JL/images/f0981205_003ar.jpg",
      title: "Plate 1",
      info: "3 Days into this world.",
    },
    {
      plate: "plate02",
      img: "/src/assets/JL/images/f0981211_002ar.jpg",
      title: "Plate 2",
      info: "Nine-day Old",
    },
    {
      plate: "plate03",
      img: "/src/assets/JL/images/f0990101_222ar.jpg",
      title: "Plate 3",
      info: "One month old where Auntie is holding happily me in the full month dinner.",
    },
    {
      plate: "plate04",
      img: "/src/assets/JL/images/f0990110_014ar.jpg",
      title: "Plate 4",
      info: "Mama & 39d-old me.",
    },
    {
      plate: "plate05",
      img: "/src/assets/JL/images/f0990130_006a.jpg",
      title: "Plate 5",
      info: "First-glimpse smiling in the 2-month old.",
    },
    {
      plate: "plate06",
      img: "/src/assets/JL/images/f0990304_019ar.jpg",
      title: "Plate 6",
      info: "3m-old in Dad's arms smiling.",
    },
    {
      plate: "plate07",
      img: "/src/assets/JL/images/f0990407_020ar.jpg",
      title: "Plate 7",
      info: "4m-old giggling with Dad in the playground.",
    },
    {
      plate: "plate08",
      img: "/src/assets/JL/images/f0990603_034ar.jpg",
      title: "Plate 8",
      info: "6m-old in the heat of summer.",
    },
    {
      plate: "plate09",
      img: "/src/assets/JL/images/f0990702_007ar.jpg",
      title: "Plate 9",
      info: "7m old Jon contemplating swimming.",
    },
    {
      plate: "plate10",
      img: "/src/assets/JL/images/f0990827_030ar.jpg",
      title: "Plate 10",
      info: "8m-old with eyes wide open in a restaurant with Mom.",
    },
    {
      plate: "plate11",
      img: "/src/assets/JL/images/f0991009_028ar.jpg",
      title: "Plate 11",
      info: "10 month old with big foot sitting on the dinning table at home.",
    },
    {
      plate: "plate12",
      img: "/src/assets/JL/images/f0991029_024ar.jpg",
      title: "Plate 12",
      info: "11 month old with Mom in Stanley Market Road in the evening two days before Halloween.",
    },
    {
      plate: "plate13",
      img: "/src/assets/JL/images/f0991204_124ar.jpg",
      title: "Plate 13",
      info: "1y-old birthday party.",
    },
    {
      plate: "plate14",
      img: "/src/assets/JL/images/fa000109_015ar.jpg",
      title: "Plate 14",
      info: "13-m old wandering at home.",
    },
    {
      plate: "plate15",
      img: "/src/assets/JL/images/fa000112_019ar.jpg",
      title: "Plate 15",
      info: "13-m old sitting on a crouch",
    },
    {
      plate: "plate16",
      img: "/src/assets/JL/images/fa000403_131ar.jpg",
      title: "Plate 16",
      info: "16m old me with 3m old brother Chris.",
    },
    {
      plate: "plate17",
      img: "/src/assets/JL/images/fa000622_221ar.jpg",
      title: "Plate 17",
      info: "19m old in the playground.",
    },
    {
      plate: "plate18",
      img: "/src/assets/JL/images/fa001210_109ar.jpg",
      title: "Plate 18",
      info: "2y old at home.",
    },
    {
      plate: "plate19",
      img: "/src/assets/JL/images/fa010928_001.jpg",
      title: "Plate 19",
      info: "Going to N1 at 宣道會海怡幼兒學校 in 2001.",
    },
    {
      plate: "plate20",
      img: "/src/assets/JL/images/fa011125_041ar.jpg",
      title: "Plate 20",
      info: "At home with Chris and Cara when I was almost 3y-old.",
    },
    {
      plate: "plate21",
      img: "/src/assets/JL/images/fa020210_034ar.jpg",
      title: "Plate 21",
      info: "With Chris and Cara just outside the Marina Square when I was three.",
    },
    {
      plate: "plate22",
      img: "/src/assets/JL/images/fa020212_082ar.jpg",
      title: "Plate 22",
      info: "Chris and Cara with me in the Garden.",
    },
    {
      plate: "plate23",
      img: "/src/assets/JL/images/fa020213_151_1000.jpg",
      title: "Plate 23",
      info: "Playing happily in the playground in the Chinese New Year 2002.",
    },
    {
      plate: "plate24",
      img: "/src/assets/JL/images/fa020427_008ar.jpg",
      title: "Plate 24",
      info: "With brother Chris when I was 3 year and 5 month old.",
    },
    {
      plate: "plate25",
      img: "/src/assets/JL/images/fa020811_018ar.jpg",
      title: "Plate 25",
      info: "I was playing tennis while Cara was at the back playing with Mom's racket.",
    },
    {
      plate: "plate26",
      img: "/src/assets/JL/images/fa020824_001B.jpg",
      title: "Plate 26",
      info: "Much fun swimming in the pool when I was 3 and a half year old.",
    },
    {
      plate: "plate27",
      img: "/src/assets/JL/images/fa021201_026ar.jpg",
      title: "Plate 27",
      info: "With Chris and Cara in the garden.",
    },
    {
      plate: "plate28",
      img: "/src/assets/JL/images/fa030105_043ar.jpg",
      title: "Plate 28",
      info: "4y old me in Yuk Kwai Shan",
    },
    {
      plate: "plate29",
      img: "/src/assets/JL/images/fa030501_068ar.jpg",
      title: "Plate 29",
      info: "Four and a half year old me with Chris and Cara, just finished hiking in Pok Fu Lam trail, resting on top of the service reservoir.",
    },
    {
      plate: "plate30",
      img: "/src/assets/JL/images/fa031101_015ar.jpg",
      title: "Plate 30",
      info: "Taken in the school sports day in Wu Kai Sha with 李采嫣 on my right and 梁浠潁 to my left.",
    },
    {
      plate: "plate31",
      img: "/src/assets/JL/images/fa031116_030ar.jpg",
      title: "Plate 31",
      info: "Nearly 5-year-old in Lamma Island 南丫島洪聖爺海灘 with Cara and Chris.",
    },
    {
      plate: "plate32",
      img: "/src/assets/JL/images/fa040118_006ar.jpg",
      title: "Plate 32",
      info: "Hiking in Pok Fu Lam Reservoir with Chris and Cara when I was five.",
    },
    {
      plate: "plate33",
      img: "/src/assets/JL/images/fa040701_123Bar.jpg",
      title: "Plate 33",
      info: "Five and a half me just having bike rides with Chris and Cara.",
    },
    {
      plate: "plate34",
      img: "/src/assets/JL/images/fa041003_014ar.jpg",
      title: "Plate 34",
      info: "In 西灣河太安樓太興燒味 after a tennis lesson in 2004.",
    },
    {
      plate: "plate35",
      img: "/src/assets/JL/images/fa041217_001Bar.jpg",
      title: "Plate 35",
      info: "6y old in the final year N4, on the way to school, 宣道會",
    },
    {
      plate: "plate36",
      img: "/src/assets/JL/images/fa050417_043ar.jpg",
      title: "Plate 36",
      info: "Having fun in a cart while camping at 麥理浩夫人度假村",
    },
    {
      plate: "plate37",
      img: "/src/assets/JL/images/fa050703_001Bar.jpg",
      title: "Plate 37",
      info: "Six and a half year old in the summer just before going into primary One, swimming at Deep Water Bay",
    },
    {
      plate: "plate38",
      img: "/src/assets/JL/images/fa050903_107ar.jpg",
      title: "Plate 38",
      info: "Attending a table-tennis class in Wanchai Harbour Road Sports Centre in the summer of 2005.",
    },
    {
      plate: "plate39",
      img: "/src/assets/JL/images/fa051204_323ar.jpg",
      title: "Plate 39",
      info: "7y-old birthday party with my family at Aberdeen McDonald.",
    },
    {
      plate: "plate40",
      img: "/src/assets/JL/images/fa060617_293ar.jpg",
      title: "Plate 40",
      info: "Seven and a half year old me at eh sunset by the seaside promenade in South Horizons.",
    },
    {
      plate: "plate41",
      img: "/src/assets/JL/images/fa060820_001Bar.jpg",
      title: "Plate 41",
      info: "Seven and a half year old me in the deep water bay after finishing Primary One in the summer of 2006.",
    },
    {
      plate: "plate42",
      img: "/src/assets/JL/images/fa061217_123Bar.jpg",
      title: "Plate 42",
      info: "8-Year-old me with Chris and Cara in the sunshine.",
    },
    {
      plate: "plate43",
      img: "/src/assets/JL/images/fa070513_001Bar.jpg",
      title: "Plate 43",
      info: "Eight and a half year old me forever smiling.",
    },
    {
      plate: "plate44",
      img: "/src/assets/JL/images/fa070603_123Bar.jpg",
      title: "Plate 44",
      info: "In the garden with Chris and Cara",
    },
    {
      plate: "plate45",
      img: "/src/assets/JL/images/fa070616_001Bar.jpg",
      title: "Plate 45",
      info: "After a soccer game",
    },
    {
      plate: "plate46",
      img: "/src/assets/JL/images/fa070707_001Bar.jpg",
      title: "Plate 46",
      info: "After a tennis lesson in Wong Chuk Hang Sports Stadium in the summer of 2007.",
    },
    {
      plate: "plate47",
      img: "/src/assets/JL/images/fa071208_300cr.jpg",
      title: "Plate 47",
      info: "Nine year old me in St. Stephen Bay at Stanley.",
    },
    {
      plate: "plate48",
      img: "/src/assets/JL/images/fa080420_171ar.jpg",
      title: "Plate 48",
      info: "In a tennis game at home.",
    },
    {
      plate: "plate49",
      img: "/src/assets/JL/images/fa080511_585ar.jpg",
      title: "Plate 49",
      info: "Nine and a half me in the Scout Sports Day in Wanchai Sports Ground. The one next to me is Liu King Yan.",
    },
  ];

  return {
    jonheader,
    jonPhotosPlates,
  };
};
