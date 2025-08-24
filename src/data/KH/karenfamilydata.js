import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";
import KarenFamilyHero from "../../assets/KH/images/fa080405_564a.jpg";

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
      img: "/src/assets/KH/images/PKA_Wedding_043cr.jpg",
      title: "Plate 1",
      info: "with Alex in the woods.",
    },
    {
      plate: "plate02",
      img: "/src/assets/KH/images/AKA_Wedding_006cr.jpg",
      title: "Plate 2",
      info: "Majesty look in yellow and gold.",
    },
    {
      plate: "plate03",
      img: "/src/assets/KH/images/fa021109_029ar.jpg",
      title: "Plate 3",
      info: "My husband with three darlings at Tai Tam on a sunny day.",
    },
    {
      plate: "plate04",
      img: "/src/assets/KH/images/f0990304_023ar.jpg",
      title: "Plate 4",
      info: "Me and the 3-month old Jonathan, see how round he is!",
    },
    {
      plate: "plate05",
      img: "/src/assets/KH/images/f0990827_031ar.jpg",
      title: "Plate 5",
      info: "Alex, myself and the 9-month old Jonathan in the restaurant",
    },
    {
      plate: "plate06",
      img: "/src/assets/KH/images/f0990924_001ar.jpg",
      title: "Plate 6",
      info: "Alex, myself and the 9-month old Jonathan celebrating mid-autumn.",
    },
    {
      plate: "plate07",
      img: "/src/assets/KH/images/fa000205_224ar.jpg",
      title: "Plate 7",
      info: "With 14m old Jonathan",
    },
    {
      plate: "plate08",
      img: "/src/assets/KH/images/fa010325_119ar.jpg",
      title: "Plate 8",
      info: "Having lunch with 2 year old Jonathan.",
    },
    {
      plate: "plate09",
      img: "/src/assets/KH/images/fa030126_032ar.jpg",
      title: "Plate 9",
      info: "Playing tennis with 4y old Jonathan",
    },

    {
      plate: "plate10",
      img: "/src/assets/KH/images/fa080405_410ar.jpg",
      title: "Plate 10",
      info: "With Jonathan in a rocky shore in Stanley.",
    },
    {
      plate: "plate11",
      img: "/src/assets/KH/images/fa000404_148ar.jpg",
      title: "Plate 11",
      info: "Me and the 4-month old Chris.",
    },
    {
      plate: "plate12",
      img: "/src/assets/KH/images/fa020427_024ar.jpg",
      title: "Plate 12",
      info: "Me and the 2-year old Chris.",
    },
    {
      plate: "plate13",
      img: "/src/assets/KH/images/fa070107_548ar.jpg",
      title: "Plate 13",
      info: "Me and the 7-year old Chris.",
    },
    {
      plate: "plate14",
      img: "/src/assets/KH/images/fa070819_175ar.jpg",
      title: "Plate 14",
      info: "Me and a very sweet Chris",
    },
    {
      plate: "plate15",
      img: "/src/assets/KH/images/fa070826_042ar.jpg",
      title: "Plate 15",
      info: "With Chris in Venetian, Macau in August 2007",
    },
    {
      plate: "plate16",
      img: "/src/assets/KH/images/fa021013_030ar.jpg",
      title: "Plate 16",
      info: "With one year old Cara in South Horizon Plaza.",
    },
    {
      plate: "plate17",
      img: "/src/assets/KH/images/fa030216_110ar.jpg",
      title: "Plate 17",
      info: "With Cara and Jonathan at the back.",
    },
    {
      plate: "plate18",
      img: "/src/assets/KH/images/fa030705_003ar.jpg",
      title: "Plate 18",
      info: "Having fun with 2y old Cara in the pool",
    },
    {
      plate: "plate19",
      img: "/src/assets/KH/images/fa061223_467ar.jpg",
      title: "Plate 19",
      info: "With Cara and a smile",
    },
    {
      plate: "plate20",
      img: "/src/assets/KH/images/fa080309_277ar.jpg",
      title: "Plate 20",
      info: "My lovely kids",
    },
    {
      plate: "plate21",
      img: "/src/assets/KH/images/fa070826_269ar.jpg",
      title: "Plate 21",
      info: "With my kids in Macau.",
    },
    {
      plate: "plate22",
      img: "/src/assets/KH/images/fa070902_866A.jpg",
      title: "Plate 22",
      info: "My kids at Stanley.",
    },
    {
      plate: "plate23",
      img: "/src/assets/KH/images/fa060115_059ar.jpg",
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
