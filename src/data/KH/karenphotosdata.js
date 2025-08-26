import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";
import AL901216110 from "../../assets/KH/images/AL901216110.webp";
import AL970327002 from "../../assets/KH/images/AL970327002.webp";
import AL970330004 from "../../assets/KH/images/AL970330004.webp";
import AL970713112 from "../../assets/KH/images/AL970713112.webp";
import AL971005110 from "../../assets/KH/images/AL971005110.webp";
import AL980130010 from "../../assets/KH/images/AL980130010.webp";
import AL970330055 from "../../assets/KH/images/AL970330055.webp";
import AL970717060 from "../../assets/KH/images/AL970717060.webp";
import AL980611020 from "../../assets/KH/images/AL980611020.jpg";
import AL970724025 from "../../assets/KH/images/AL970724025.jpg";
import AL970719101 from "../../assets/KH/images/AL970719101.webp";
import AL951217230 from "../../assets/KH/images/AL951217230.webp";
import AL960101100 from "../../assets/KH/images/AL960101100.webp";
import AL960121300 from "../../assets/KH/images/AL960121300.webp";
import AL970720007 from "../../assets/KH/images/AL970720007.jpg";
import AL939400360 from "../../assets/KH/images/AL939400360.webp";
import AL970330012 from "../../assets/KH/images/AL970330012.webp";
import AL970719060 from "../../assets/KH/images/AL970719060.webp";
import AKA_Wedding_006cr from "../../assets/KH/images/AKA_Wedding_006cr.jpg";
import PKA_Wedding_043cr from "../../assets/KH/images/PKA_Wedding_043cr.jpg";
import f0990407_019ar from "../../assets/KH/images/f0990407_019ar.jpg";
import f0990702_007ar from "../../assets/KH/images/f0990702_007ar.jpg";
import f0990712_034ar from "../../assets/KH/images/f0990712_034ar.jpg";
import f0990924_010ar from "../../assets/KH/images/f0990924_010ar.jpg";
import f0991001_001ar from "../../assets/KH/images/f0991001_001ar.jpg";
import f0991204_122ar from "../../assets/KH/images/f0991204_122ar.jpg";
import fa000217_122ar from "../../assets/KH/images/fa000217_122ar.jpg";
import fa000404_141Aar from "../../assets/KH/images/fa000404_141Aar.jpg";
import fa000625_302ar from "../../assets/KH/images/fa000625_302ar.jpg";
import fa000724_138ar from "../../assets/KH/images/fa000724_138ar.jpg";
import fa001224_146ar from "../../assets/KH/images/fa001224_146ar.jpg";
import fa010811_173a from "../../assets/KH/images/fa010811_173a.jpg";
import fa010917_099ar from "../../assets/KH/images/fa010917_099ar.jpg";
import fa011230_039ar from "../../assets/KH/images/fa011230_039ar.jpg";
import fa020127_057a from "../../assets/KH/images/fa020127_057a.jpg";
import fa020501_221ar from "../../assets/KH/images/fa020501_221ar.jpg";
import fa020512_079a from "../../assets/KH/images/fa020512_079a.jpg";
import fa021001_043ar from "../../assets/KH/images/fa021001_043ar.jpg";
import fa021001_100ar from "../../assets/KH/images/fa021001_100ar.jpg";
import fa021103_038ar from "../../assets/KH/images/fa021103_038ar.jpg";
import fa030112_041Ar from "../../assets/KH/images/fa030112_041Ar.jpg";
import fa031101_021ar from "../../assets/KH/images/fa031101_021ar.jpg";
import fa050612_080ar from "../../assets/KH/images/fa050612_080ar.jpg";
import fa050625_087ar from "../../assets/KH/images/fa050625_087ar.jpg";
import fa050710_096ar from "../../assets/KH/images/fa050710_096ar.jpg";
import fa050820_432ar from "../../assets/KH/images/fa050820_432ar.jpg";
import fa051120_337ar from "../../assets/KH/images/fa051120_337ar.jpg";
import fa060127_167ar from "../../assets/KH/images/fa060127_167ar.jpg";
import fa070114_474ar from "../../assets/KH/images/fa070114_474ar.jpg";
import fa070114_536ar from "../../assets/KH/images/fa070114_536ar.jpg";
import fa070826_351ar from "../../assets/KH/images/fa070826_351ar.jpg";
import fa080426_392ar from "../../assets/KH/images/fa080426_392ar.jpg";
import fa080517_028ar from "../../assets/KH/images/fa080517_028ar.jpg";

export const KarenPhotosData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const karenPhotosPlates = [
    {
      plate: "plate01",
      img: AL901216110,
      title: "Plate 1",
      info: "In the Maldive resort.",
    },
    {
      plate: "plate02",
      img: AL970327002,
      title: "Plate 2",
      info: "In Toyko with Alex",
    },
    {
      plate: "plate03",
      img: AL970330004,
      title: "Plate 3",
      info: "The famous Mount Fuji.",
    },
    {
      plate: "plate04",
      img: AL970713112,
      title: "Plate 4",
      info: "Venice Railto Bridge above the waterway.",
    },
    {
      plate: "plate05",
      img: AL971005110,
      title: "Plate 5",
      info: "Beijing 故宫博物院.",
    },
    {
      plate: "plate06",
      img: AL980130010,
      title: "Plate 6",
      info: "With Alex at home.",
    },
    {
      plate: "plate07",
      img: AL970330055,
      title: "Plate 7",
      info: "In Japan Nagashima Spaland",
    },
    {
      plate: "plate08",
      img: AL970717060,
      title: "Plate 8",
      info: "In Monaco.",
    },
    {
      plate: "plate09",
      img: AL980611020,
      title: "Plate 9",
      info: "日月潭 in the year 1998",
    },
    {
      plate: "plate10",
      img: AL970724025,
      title: "Plate 10",
      info: "In Windsor, Round Tower on the left looking from Norman Gate B",
    },
    {
      plate: "plate11",
      img: AL970719101,
      title: "Plate 11",
      info: "In Paris Disney.",
    },
    {
      plate: "plate12",
      img: AL951217230,
      title: "Plate 12",
      info: "In SCAA playing golf.",
    },
    {
      plate: "plate13",
      img: AL960101100,
      title: "Plate 13",
      info: "In KSC",
    },
    {
      plate: "plate14",
      img: AL960121300,
      title: "Plate 14",
      info: "肇興七星岩",
    },
    {
      plate: "plate15",
      img: AL970720007,
      title: "Plate 15",
      info: "布魯塞爾大廣場 left of 市政廳A",
    },
    {
      plate: "plate16",
      img: AL939400360,
      title: "Plate 16",
      info: "Horse Jumping at Lei Yue Mum.",
    },
    {
      plate: "plate17",
      img: AL970330012,
      title: "Plate 17",
      info: "in the peace garden.",
    },
    {
      plate: "plate18",
      img: AL970719060,
      title: "Plate 18",
      info: "Scary ride in Paris Disneyland.",
    },
    {
      plate: "plate19",
      img: AKA_Wedding_006cr,
      title: "Plate 19",
      info: "In golden colors",
    },
    {
      plate: "plate20",
      img: PKA_Wedding_043cr,
      title: "Plate 20",
      info: "In the forest.",
    },
    {
      plate: "plate21",
      img: f0990407_019ar,
      title: "Plate 21",
      info: "With 4 month old Jonathan in the park.",
    },
    {
      plate: "plate22",
      img: f0990702_007ar,
      title: "Plate 22",
      info: "Seven month old Jonathan.",
    },
    {
      plate: "plate23",
      img: f0990712_034ar,
      title: "Plate 23",
      info: "With 7 month old Jonathan in the pool.",
    },
    {
      plate: "plate24",
      img: f0990924_010ar,
      title: "Plate 24",
      info: "With 9 month old Jonathan in Mid-Autumn festival.",
    },
    {
      plate: "plate25",
      img: f0991001_001ar,
      title: "Plate 25",
      info: "With Alex and ten month old Jonathan.",
    },
    {
      plate: "plate26",
      img: f0991204_122ar,
      title: "Plate 26",
      info: ">With Alex celebrating first birthday of Jonathan",
    },
    {
      plate: "plate27",
      img: fa000217_122ar,
      title: "Plate 27",
      info: "With 42 day old Chris",
    },
    {
      plate: "plate28",
      img: fa000404_141Aar,
      title: "Plate 28",
      info: "Smiling with 3 month old Chris",
    },
    {
      plate: "plate29",
      img: fa000625_302ar,
      title: "Plate 29",
      info: "19 month old Jonathan and 5 month old Chris happily contained in one cart.",
    },
    {
      plate: "plate30",
      img: fa000724_138ar,
      title: "Plate 30",
      info: "20 month old Jonathan at home.",
    },
    {
      plate: "plate31",
      img: fa001224_146ar,
      title: "Plate 31",
      info: "Year 2000 Christmas with Jonathan & Chris at 將軍澳新都城中心",
    },
    {
      plate: "plate32",
      img: fa010811_173a,
      title: "Plate 32",
      info: "My family with 9 day old Cara.",
    },
    {
      plate: "plate33",
      img: fa010917_099ar,
      title: "Plate 33",
      info: "One month old Cara.",
    },
    {
      plate: "plate34",
      img: fa011230_039ar,
      title: "Plate 34",
      info: "With Chris and Jonathan in Times Square.",
    },
    {
      plate: "plate35",
      img: fa020127_057a,
      title: "Plate 35",
      info: "With my 3 kids in playground when Cara was 6 month old.",
    },
    {
      plate: "plate36",
      img: fa020501_221ar,
      title: "Plate 36",
      info: "14 month old Chris and me.",
    },
    {
      plate: "plate37",
      img: fa020512_079a,
      title: "Plate 37",
      info: "With my sons at Yuk Kwai Shan.",
    },
    {
      plate: "plate38",
      img: fa021001_043ar,
      title: "Plate 38",
      info: "With 14 month old Cara going up Yuk Kwai Shan.",
    },
    {
      plate: "plate39",
      img: fa021001_100ar,
      title: "Plate 39",
      info: "Cara and me at the top of Kuk Kwai Shan.",
    },
    {
      plate: "plate40",
      img: fa021103_038ar,
      title: "Plate 40",
      info: "Playing Tennis with my three kids.",
    },
    {
      plate: "plate41",
      img: fa030112_041Ar,
      title: "Plate 41",
      info: "TsimShaTsui East with my kids.",
    },
    {
      plate: "plate42",
      img: fa031101_021ar,
      title: "Plate 42",
      info: "2 year old Cara with me in school outing day.",
    },
    {
      plate: "plate43",
      img: fa050612_080ar,
      title: "Plate 43",
      info: "With Cara and Chris at the bird's street.",
    },
    {
      plate: "plate44",
      img: fa050625_087ar,
      title: "Plate 44",
      info: "My family in Thailand",
    },
    {
      plate: "plate45",
      img: fa050710_096ar,
      title: "Plate 45",
      info: "城門水塘菠蘿壩徑白千層.",
    },
    {
      plate: "plate46",
      img: fa050820_432ar,
      title: "Plate 46",
      info: "Disney in 2005.",
    },
    {
      plate: "plate47",
      img: fa051120_337ar,
      title: "Plate 47",
      info: "Macau in 2005.",
    },
    {
      plate: "plate48",
      img: fa060127_167ar,
      title: "Plate 48",
      info: "With Chris at the New Year Bonanza.",
    },
    {
      plate: "plate49",
      img: fa070114_474ar,
      title: "Plate 49",
      info: "Cara clinching by my side in Shek O",
    },
    {
      plate: "plate50",
      img: fa070114_536ar,
      title: "Plate 50",
      info: "Shek O in 2007.",
    },
    {
      plate: "plate51",
      img: fa070826_351ar,
      title: "Plate 51",
      info: "With Alex and Chris in Macau.",
    },
    {
      plate: "plate52",
      img: fa080426_392ar,
      title: "Plate 52",
      info: "Having a good time with Cara in the St. Stephen's Bay.",
    },
    {
      plate: "plate53",
      img: fa080517_028ar,
      title: "Plate 53",
      info: "Archery in 鯉魚門度假村.",
    },
  ];

  return {
    karenheader,
    karenPhotosPlates,
  };
};
