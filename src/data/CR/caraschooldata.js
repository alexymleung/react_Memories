import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";
import CaraSchoolHero from "../../assets/CR/images/fa080412_327ar.jpg";
import fa080412_357ar from "../../assets/CR/images/fa080412_357ar.jpg";
import fa080412_310ar from "../../assets/CR/images/fa080412_310ar.jpg";
import fa080204_041ar from "../../assets/CR/images/fa080204_041ar.jpg";
import fa071006_111ar from "../../assets/CR/images/fa071006_111ar.jpg";
import JL_School_780 from "../../assets/CR/images/JL_School_780.jpg";

export const CaraSchoolData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const caraschoolarticle = {
    image: CaraSchoolHero,
    alt: `${currentTheme.name} School`,
    info: "I am studying in Class 2B at S.K.H. Tin Wan Chi Nam Primary School.",
  };

  const caraschoolsection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate01`,
      title: "My Teacher",
      details: "My teachers love me very much. My class master is 呂穎珩.",
    },

    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate02`,
      title: "My Classmates",
      details: "I like playing with my classmates.",
    },

    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate05`,
      title: "My School",
      details: "Here is a photo of my school.",
    },
  ];

  const caraschoolplates = [
    {
      plate: "plate01",
      img: fa080412_357ar,
      title: "Plate 1",
      info: "With my Chinese teacher 林少玲老師",
    },
    {
      plate: "plate02",
      img: fa080412_310ar,
      title: "Plate 2",
      info: "With classmate 鄭楚楠 in school golden jubilee day.",
    },
    {
      plate: "plate03",
      img: fa080204_041ar,
      title: "Plate 3",
      info: "With good friend Clara at school.",
    },
    {
      plate: "plate04",
      img: fa071006_111ar,
      title: "Plate 4",
      info: "I am near school with the school building as background",
    },
    {
      plate: "plate05",
      img: JL_School_780,
      title: "Plate 5",
      info: "My school, Tin Wan Chi Nam.",
    },
  ];

  return {
    caraheader,
    caraschoolarticle,
    caraschoolsection,
    caraschoolplates,
  };
};
