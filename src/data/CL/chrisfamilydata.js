import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.jpg";
import ChrisFamilyHero from "../../assets/CL/images/fa060704_404ar.jpg";

export const ChrisFamilyData = () => {
  const { currentTheme } = useTheme();

  const chrisheader = {
    image: ChrisBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const chrisfamilyarticle = {
    image: ChrisFamilyHero,
    alt: `${currentTheme.name} Family`,
    info: "This is my family: father, mother, elder brother Joanthan and sister Yoyo at the back of the castle in Hong Kong Disney in year 2006.",
  };

  const chrisfamilysection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate01`,
      title: "My Father",
      details: "I like playing sports with father.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate03`,
      title: "My Mother",
      details: "We love each other very much.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate06`,
      title: "My Brother, Jonathan",
      details: "Jonathan is studying at class 4E in the same school. ",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate08`,
      title: "My Sister, Cara",
      details: "Cara too is studying in my school in class 1B. ",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate06`,
      title: "Birthday Party",
      details:
        "Whenever I am with my family, I will be very happy. See how happy I am in this ocassion!",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate08`,
      title: "Outing",
      details: "We go out a lot during weekends.",
    },
  ];

  const chrisfamilyplates = [
    {
      plate: "plate01",
      img: "/src/assets/CL/images/f0991204_023ar.jpg",
      title: "Plate 1",
      info: "With father in my 1-year old birthday party.",
    },
    {
      plate: "plate02",
      img: "/src/assets/CL/images/fa021011_029ar.jpg",
      title: "Plate 2",
      info: "Father and son.",
    },
    {
      plate: "plate03",
      img: "/src/assets/CL/images/fa070128_073ar.jpg",
      title: "Plate 3",
      info: "Looking onward.",
    },
    {
      plate: "plate04",
      img: "/src/assets/CL/images/fa020303_039ar.jpg",
      title: "Plate 4",
      info: "3y-old me with mother and brother.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CL/images/fa040424_006ar.jpg",
      title: "Plate 5",
      info: "Mother and me strolling along in Deep Water Bay.",
    },
    {
      plate: "plate06",
      img: "/src/assets/CL/images/fa020113_120Bar.jpg",
      title: "Plate 6",
      info: "3 year old me with 2 year old Chris.",
    },
    {
      plate: "plate07",
      img: "/src/assets/CL/images/fa060127_002Bar.jpg",
      title: "Plate 7",
      info: "Chris ecstatic with the big hammer in the New Year Flower Market.",
    },
    {
      plate: "plate08",
      img: "/src/assets/CL/images/fa070602_003Bar.jpg",
      title: "Plate 8",
      info: "Sister Cara giggling.",
    },
  ];

  return {
    chrisheader,
    chrisfamilyarticle,
    chrisfamilysection,
    chrisfamilyplates,
  };
};
