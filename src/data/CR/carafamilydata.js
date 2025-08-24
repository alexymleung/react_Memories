import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";
import CaraFamilyHero from "../../assets/CR/images/fa060704_093ar.jpg";

export const CaraFamilyData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const carafamilyarticle = {
    image: CaraFamilyHero,
    alt: `${currentTheme.name} Family`,
    info: "This is my family - my father, mother, elder brothers Jonathan and Chris playing in Hong Kong Disney in 2006.",
  };

  const carafamilysection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate01`,
      title: "My Father",
      details: "I am always Jewels to my father",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate03`,
      title: "My Mother",
      details: "We love each other very much.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate04`,
      title: "My Brother, Jonathan",
      details: "Jonathan is studying at class 4E in the same school. ",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate06`,
      title: "My brother, Chris",
      details: "Chris too is studying in my school in class 3B. ",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate07`,
      title: "Outing",
      details: "We go out a lot during weekends.",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate08`,
      title: "Macau",
      details: "See the Venetian Macau with my brothers.",
    },
  ];

  const carafamilyplates = [
    {
      plate: "plate01",
      img: "/src/assets/CR/images/fa050710_154ar.jpg",
      title: "Plate 1",
      info: "With father in a picnic.",
    },
    {
      plate: "plate02",
      img: "/src/assets/CR/images/fa030413_041ar.jpg",
      title: "Plate 2",
      info: "In Deep Water Bay with father",
    },
    {
      plate: "plate03",
      img: "/src/assets/CR/images/fa060617_365ar.jpg",
      title: "Plate 3",
      info: "Mother",
    },
    {
      plate: "plate04",
      img: "/src/assets/CR/images/fa040229_035ar.jpg",
      title: "Plate 4",
      info: "My elderest brother Jonathan in Hiking back in 2004.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CR/images/fa070707_001Bar.jpg",
      title: "Plate 5",
      info: "My elderest brother Jonathan.",
    },
    {
      plate: "plate06",
      img: "/src/assets/CR/images/fa060501_001Bar.jpg",
      title: "Plate 6",
      info: "Brother Chris",
    },
    {
      plate: "plate07",
      img: "/src/assets/CR/images/fa070128_100ar.jpg",
      title: "Plate 7",
      info: "My family at the ShauKeiWan shelter.",
    },
    {
      plate: "plate08",
      img: "/src/assets/CR/images/fa070824_397ar.jpg",
      title: "Plate 8",
      info: "This is the new Venetian Macau Casino we visited at the openings.",
    },
  ];

  return {
    caraheader,
    carafamilyarticle,
    carafamilysection,
    carafamilyplates,
  };
};
