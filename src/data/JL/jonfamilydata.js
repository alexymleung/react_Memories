import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.webp";
import JonFamilyHero from "../../assets/JL/images/fa051204_323ar.jpg";
import f0991204_023ar from "../../assets/JL/images/f0991204_023ar.jpg";
import fa021011_029ar from "../../assets/JL/images/fa021011_029ar.jpg";
import fa070128_073ar from "../../assets/JL/images/fa070128_073ar.jpg";
import fa020303_039ar from "../../assets/JL/images/fa020303_039ar.jpg";
import fa040424_006ar from "../../assets/JL/images/fa040424_006ar.jpg";
import fa020113_120Bar from "../../assets/JL/images/fa020113_120Bar.jpg";
import fa060127_002Bar from "../../assets/JL/images/fa060127_002Bar.jpg";
import fa070602_003Bar from "../../assets/JL/images/fa070602_003Bar.jpg";

export const JonFamilyData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const jonfamilyarticle = {
    image: JonFamilyHero,
    alt: `${currentTheme.name} Family`,
    info: "This is my family, my father, mother, younger brother Chris, and sister Cara at my Birthday's party at McDonald in 2005.",
  };

  const jonfamilysection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate01`,
      title: "My Father",
      details: "Father loves me very much.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate03`,
      title: "My Mother",
      details: "I love mother. Here is the link to her web site.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate06`,
      title: "My Brother, Chris",
      details:
        "Chris is now studying in class 3B at the same school. Here is his web site.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate08`,
      title: "My Sister, Cara",
      details:
        "Cara too is studying in my school in class 2B. This is the link to her web site.",
    },
  ];

  const jonfamilyplates = [
    {
      plate: "plate01",
      img: f0991204_023ar,
      title: "Plate 1",
      info: "With father in my 1-year old birthday party.",
    },
    {
      plate: "plate02",
      img: fa021011_029ar,
      title: "Plate 2",
      info: "Father and son.",
    },
    {
      plate: "plate03",
      img: fa070128_073ar,
      title: "Plate 3",
      info: "Looking onward.",
    },
    {
      plate: "plate04",
      img: fa020303_039ar,
      title: "Plate 4",
      info: "3y-old me with mother and brother.",
    },
    {
      plate: "plate05",
      img: fa040424_006ar,
      title: "Plate 5",
      info: "Mother and me strolling along in Deep Water Bay.",
    },
    {
      plate: "plate06",
      img: fa020113_120Bar,
      title: "Plate 6",
      info: "3 year old me with 2 year old Chris.",
    },
    {
      plate: "plate07",
      img: fa060127_002Bar,
      title: "Plate 7",
      info: "Chris ecstatic with the big hammer in the New Year Flower Market.",
    },
    {
      plate: "plate08",
      img: fa070602_003Bar,
      title: "Plate 8",
      info: "Sister Cara giggling.",
    },
  ];

  return {
    jonheader,
    jonfamilyarticle,
    jonfamilysection,
    jonfamilyplates,
  };
};
