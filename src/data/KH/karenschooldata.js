import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";

import KarenSchoolHero from "../../assets/KH/images/AL901110013.webp";

export const KarenSchoolData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const karenschoolarticle = {
    image: KarenSchoolHero,
    alt: `${currentTheme.name} School`,
    info: "I am studying in Class 4E at S.K.H. Tin Wan Chi Nam Primary School. This picture was taken when I was in Class 3B.",
  };

  const karenschoolsection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate01`,
      title: "My Classmates",
      details: "I have lots of classmates.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate02`,
      title: "My University",
      details: "I studied at CUHK",
    },
  ];

  const karenschoolplates = [
    {
      plate: "plate01",
      img: "/src/assets/KH/images/fa020421_002ar.jpg",
      title: "Plate 1",
      info: "We sometimes have gatherings.",
    },
    {
      plate: "plate02",
      img: "/src/assets/KH/images/IMG-20170131-WA0022.jpg",
      title: "Plate 2",
      info: "This is a rare photo of me with classmate taken at CUHK",
    },
    {
      plate: "plate03",
      img: "/src/assets/KH/images/ka_CU_Picnic.jpg",
      title: "Plate 2",
      info: "This is a rare photo of me having picnic with my CUHK classmates",
    },
  ];

  return {
    karenheader,
    karenschoolarticle,
    karenschoolsection,
    karenschoolplates,
  };
};
