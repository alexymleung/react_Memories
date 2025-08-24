import { useTheme } from "../../hooks/useTheme";
import JonBanner from "../../assets/JL/images/Buttons/JonathanBanner.webp";

import JonSchoolHero from "../../assets/JL/images/JL@School_060211_780.jpg";

export const JonSchoolData = () => {
  const { currentTheme } = useTheme();

  const jonheader = {
    image: JonBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const jonschoolarticle = {
    image: JonSchoolHero,
    alt: `${currentTheme.name} School`,
    info: "I am studying in Class 4E at S.K.H. Tin Wan Chi Nam Primary School. This picture was taken when I was in Class 3B.",
  };

  const jonschoolsection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate01`,
      title: "My Principal",
      details:
        "Here is a photo I took with our principal(林嫣莉校長) during the golden jubilee of Chi Nam on 12th April, 2008.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate02`,
      title: "My Teachers",
      details:
        "蕭嘉寶老師 is my current class master. Below are some photos I took with my past class masters and teachers - 梁曼盈老師; 吳玉瑩主任; 李珮琪老師.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate05`,
      title: "My Classmates",
      details:
        "I have a lot of good friends among my classmates. 梁俊斌,王惠謙,麥子俊,廖樂文,麥梓聰,梁卓軒是我的好朋友.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate10`,
      title: "School Events",
      details:
        "I took part in a lot of school events including singing contest, drama competition, athletic meets, and Golden Jubilee show, etc.",
    },
    {
      id: 5,
      link: `/${currentTheme.name}/${currentTheme.alias}school/plate13`,
      title: "My School",
      details: "Here is a photo of my school.",
    },
  ];

  const jonschoolplates = [
    {
      plate: "plate01",
      img: "/src/assets/JL/images/fa080412_193ar.jpg",
      title: "Plate 1",
      info: "林嫣莉校長和我攝於金禧校慶",
    },
    {
      plate: "plate02",
      img: "/src/assets/JL/images/fa080412_181ar.jpg",
      title: "Plate 2",
      info: "Miss Leung with me",
    },
    {
      plate: "plate03",
      img: "/src/assets/JL/images/JL_MissLEE_780.jpg",
      title: "Plate 3",
      info: "Miss Lee was my class master when I was in class 1A.",
    },
    {
      plate: "plate04",
      img: "/src/assets/JL/images/fa080412_419ar.jpg",
      title: "Plate 4",
      info: "Taken with Miss Ng, mother and sister Cara.",
    },
    {
      plate: "plate05",
      img: "/src/assets/JL/images/fa050909_066aar.jpg",
      title: "Plate 5",
      info: "A photo taken in 2005 with 李采嫣 who was my classmate in Kindergarten.",
    },
    {
      plate: "plate06",
      img: "/src/assets/JL/images/fa070401_164ar.jpg",
      title: "Plate 6",
      info: "From left to right,  father of Liu, 廖樂文, myself, my brother Chris, Miss Ng.",
    },
    {
      plate: "plate07",
      img: "/src/assets/JL/images/fa080412_313ar.jpg",
      title: "Plate 7",
      info: "From left to right, 黃彥男, myself, 麥梓聰.",
    },
    {
      plate: "plate08",
      img: "/src/assets/JL/images/fa080204_038ar.jpg",
      title: "Plate 8",
      info: "Sister Cara giggling.With classmate and good friend 黃芊芊 and brother Chris. ",
    },
    {
      plate: "plate09",
      img: "/src/assets/JL/images/fa080412_402ar.jpg",
      title: "Plate 9",
      info: "My good friend 王惠謙 and me.",
    },
    {
      plate: "plate10",
      img: "/src/assets/JL/images/fa070114_552ar.jpg",
      title: "Plate 10",
      info: "Sand Castle Competition in Shek O on 14 January, 2007",
    },
    {
      plate: "plate11",
      img: "/src/assets/JL/images/fa070401_067ar.jpg",
      title: "Plate 11",
      info: "Walk to the peak with scouts in the fool's day, 2007.",
    },
    {
      plate: "plate12",
      img: "/src/assets/JL/images/fa080412_377ar.jpg",
      title: "Plate 12",
      info: "I was taking part in the Chi Nam Golden Jubilee Show.",
    },
    {
      plate: "plate13",
      img: "/src/assets/JL/images/JL_School_780.jpg",
      title: "Plate 13",
      info: "My school, Tin Wan Chi Nam.",
    },
  ];

  return {
    jonheader,
    jonschoolarticle,
    jonschoolsection,
    jonschoolplates,
  };
};
