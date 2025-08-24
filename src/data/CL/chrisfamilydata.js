import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.webp";
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
    info: "This is my family: father, mother, elder brother Joanthan and sister Cara at the back of the castle in Hong Kong Disney in year 2006.",
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
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate02`,
      title: "My Mother",
      details: "We love each other very much.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate05`,
      title: "My Brother, Jonathan",
      details: "Jonathan is studying at class 4E in the same school. ",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate07`,
      title: "My Sister, Cara",
      details: "Cara too is studying in my school in class 2B. ",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate08`,
      title: "Birthday Party",
      details:
        "Whenever I am with my family, I will be very happy. See how happy I am in this ocassion!",
    },
    {
      id: 6,
      link: `/${currentTheme.name}/${currentTheme.alias}family/plate09`,
      title: "Outing",
      details: "We go out a lot during weekends.",
    },
  ];

  const chrisfamilyplates = [
    {
      plate: "plate01",
      img: "/src/assets/CL/images/fa021109_029ar.jpg",
      title: "Plate 1",
      info: "Me, father, brother and sister at Tai Tam.",
    },
    {
      plate: "plate02",
      img: "/src/assets/CL/images/fa000404_141A.jpg",
      title: "Plate 2",
      info: "Mother and the 4-month old me.",
    },
    {
      plate: "plate03",
      img: "/src/assets/CL/images/fa070107_548ar.jpg",
      title: "Plate 3",
      info: "7-year old me with Mom",
    },
    {
      plate: "plate04",
      img: "/src/assets/CL/images/fa070819_175ar.jpg",
      title: "Plate 4",
      info: "Mother and the very sweet me.",
    },
    {
      plate: "plate05",
      img: "/src/assets/CL/images/fa070513_001Bar.jpg",
      title: "Plate 5",
      info: "My borther Jonathan.",
    },
    {
      plate: "plate06",
      img: "/src/assets/CL/images/fa070602_400ar.jpg",
      title: "Plate 6",
      info: "Jonathan and me after playing football.",
    },
    {
      plate: "plate07",
      img: "/src/assets/CL/images/fa070902_003Bar.jpg",
      title: "Plate 7",
      info: "My young sister Cara",
    },
    {
      plate: "plate08",
      img: "/src/assets/CL/images/fa040101_021ar.jpg",
      title: "Plate 8",
      info: "My four year old party with family",
    },
    {
      plate: "plate09",
      img: "/src/assets/CL/images/fa071208_039ar.jpg",
      title: "Plate 9",
      info: "Me and my brother and sister at Lamma island.",
    },
  ];

  return {
    chrisheader,
    chrisfamilyarticle,
    chrisfamilysection,
    chrisfamilyplates,
  };
};
