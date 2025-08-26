import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.webp";

import ChrisSchoolHero from "../../assets/CL/images/fa080523_092ar.jpg";
import fa071006_110ar from "../../assets/CL/images/fa071006_110ar.jpg";

export const ChrisSchoolData = () => {
  const { currentTheme } = useTheme();

  const chrisheader = {
    image: ChrisBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const chrisschoolarticle = {
    image: ChrisSchoolHero,
    alt: `${currentTheme.name} School`,
    info: "I am studying in Class 3B at S.K.H. Tin Wan Chi Nam Primary School.",
  };

  const chrisschoolsection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate01`,
      title: "My Teacher",
      details: "My teachers love me very much. My class master is 黃思齡",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate01`,
      title: "My Classmates",
      details:
        "I love my classmates. There was a classmate and good friend of mine called 蔡國均.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate01`,
      title: "My School",
      details: "A photo of my school",
    },
  ];

  const chrisschoolplates = [
    {
      plate: "plate01",
      img: fa071006_110ar,
      title: "Plate 1",
      info: "You can see my school at the back.",
    },
  ];

  return {
    chrisheader,
    chrisschoolarticle,
    chrisschoolsection,
    chrisschoolplates,
  };
};
