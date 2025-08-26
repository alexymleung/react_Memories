import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";
import KarenFamilyHero from "../../assets/KH/images/fa080405_564a.jpg";
import PKA_Wedding_043cr from "../../assets/KH/images/PKA_Wedding_043cr.jpg";
import AKA_Wedding_006cr from "../../assets/KH/images/AKA_Wedding_006cr.jpg";
import fa021109_029ar from "../../assets/KH/images/fa021109_029ar.jpg";
import f0990304_023ar from "../../assets/KH/images/f0990304_023ar.jpg";
import f0990827_031ar from "../../assets/KH/images/f0990827_031ar.jpg";
import f0990924_001ar from "../../assets/KH/images/f0990924_001ar.jpg";
import fa000205_224ar from "../../assets/KH/images/fa000205_224ar.jpg";
import fa010325_119ar from "../../assets/KH/images/fa010325_119ar.jpg";
import fa030126_032ar from "../../assets/KH/images/fa030126_032ar.jpg";
import fa080405_410ar from "../../assets/KH/images/fa080405_410ar.jpg";
import fa000404_148ar from "../../assets/KH/images/fa000404_148ar.jpg";
import fa020427_024ar from "../../assets/KH/images/fa020427_024ar.jpg";
import fa070107_548ar from "../../assets/KH/images/fa070107_548ar.jpg";
import fa070819_175ar from "../../assets/KH/images/fa070819_175ar.jpg";
import fa070826_042ar from "../../assets/KH/images/fa070826_042ar.jpg";
import fa021013_030ar from "../../assets/KH/images/fa021013_030ar.jpg";
import fa030216_110ar from "../../assets/KH/images/fa030216_110ar.jpg";
import fa030705_003ar from "../../assets/KH/images/fa030705_003ar.jpg";
import fa061223_467ar from "../../assets/KH/images/fa061223_467ar.jpg";
import fa080309_277ar from "../../assets/KH/images/fa080309_277ar.jpg";
import fa070826_269ar from "../../assets/KH/images/fa070826_269ar.jpg";
import fa070902_866A from "../../assets/KH/images/fa070902_866A.jpg";
import fa060115_059ar from "../../assets/KH/images/fa060115_059ar.jpg";

export const KarenFamilyData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const karenfamilyarticle = {
    image: KarenFamilyHero,
    alt: `${currentTheme.name} Family`,
    info: "This is my family, my husband Alex, and my three kids : elderest son Joanthan, younger son Chris, and daughter Cara.",
  };

  const karenfamilysection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate01`,
      title: "My Husband, Alex",
      details: "Did I love my husband?",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate04`,
      title: "My Eldest Son, Jonathan",
      details: "Jonathan is my pride.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate11`,
      title: "My Younger son, Chris",
      details: "Chris is my love ever since his birth ",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate16`,
      title: "My daughter, Cara",
      details: "Cara is always my lovely daughter. ",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate23`,
      title: "My Sisters and Brothers",
      details: "I have 6 sisters and 1 brother.",
    },
  ];

  const karenfamilyplates = [
    {
      plate: "plate01",
      img: PKA_Wedding_043cr,
      title: "Plate 1",
      info: "with Alex in the woods.",
    },
    {
      plate: "plate02",
      img: AKA_Wedding_006cr,
      title: "Plate 2",
      info: "Majesty look in yellow and gold.",
    },
    {
      plate: "plate03",
      img: fa021109_029ar,
      title: "Plate 3",
      info: "My husband with three darlings at Tai Tam on a sunny day.",
    },
    {
      plate: "plate04",
      img: f0990304_023ar,
      title: "Plate 4",
      info: "Me and the 3-month old Jonathan, see how round he is!",
    },
    {
      plate: "plate05",
      img: f0990827_031ar,
      title: "Plate 5",
      info: "Alex, myself and the 9-month old Jonathan in the restaurant",
    },
    {
      plate: "plate06",
      img: f0990924_001ar,
      title: "Plate 6",
      info: "Alex, myself and the 9-month old Jonathan celebrating mid-autumn.",
    },
    {
      plate: "plate07",
      img: fa000205_224ar,
      title: "Plate 7",
      info: "With 14m old Jonathan",
    },
    {
      plate: "plate08",
      img: fa010325_119ar,
      title: "Plate 8",
      info: "Having lunch with 2 year old Jonathan.",
    },
    {
      plate: "plate09",
      img: fa030126_032ar,
      title: "Plate 9",
      info: "Playing tennis with 4y old Jonathan",
    },

    {
      plate: "plate10",
      img: fa080405_410ar,
      title: "Plate 10",
      info: "With Jonathan in a rocky shore in Stanley.",
    },
    {
      plate: "plate11",
      img: fa000404_148ar,
      title: "Plate 11",
      info: "Me and the 4-month old Chris.",
    },
    {
      plate: "plate12",
      img: fa020427_024ar,
      title: "Plate 12",
      info: "Me and the 2-year old Chris.",
    },
    {
      plate: "plate13",
      img: fa070107_548ar,
      title: "Plate 13",
      info: "Me and the 7-year old Chris.",
    },
    {
      plate: "plate14",
      img: fa070819_175ar,
      title: "Plate 14",
      info: "Me and a very sweet Chris",
    },
    {
      plate: "plate15",
      img: fa070826_042ar,
      title: "Plate 15",
      info: "With Chris in Venetian, Macau in August 2007",
    },
    {
      plate: "plate16",
      img: fa021013_030ar,
      title: "Plate 16",
      info: "With one year old Cara in South Horizon Plaza.",
    },
    {
      plate: "plate17",
      img: fa030216_110ar,
      title: "Plate 17",
      info: "With Cara and Jonathan at the back.",
    },
    {
      plate: "plate18",
      img: fa030705_003ar,
      title: "Plate 18",
      info: "Having fun with 2y old Cara in the pool",
    },
    {
      plate: "plate19",
      img: fa061223_467ar,
      title: "Plate 19",
      info: "With Cara and a smile",
    },
    {
      plate: "plate20",
      img: fa080309_277ar,
      title: "Plate 20",
      info: "My lovely kids",
    },
    {
      plate: "plate21",
      img: fa070826_269ar,
      title: "Plate 21",
      info: "With my kids in Macau.",
    },
    {
      plate: "plate22",
      img: fa070902_866A,
      title: "Plate 22",
      info: "My kids at Stanley.",
    },
    {
      plate: "plate23",
      img: fa060115_059ar,
      title: "Plate 23",
      info: "With brother and my kids in the police fun day in 2006.",
    },
  ];

  return {
    karenheader,
    karenfamilyarticle,
    karenfamilysection,
    karenfamilyplates,
  };
};
