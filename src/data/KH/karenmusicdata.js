import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";
import KarenMusicHero from "../../assets/KH/images/fa070107_593ar.jpg";

export const KarenMusicData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const karenmusicarticle = {
    image: KarenMusicHero,
    alt: `${currentTheme.name} Music`,
    info: "I play piano and sing Karaoke.",
  };

  const karenmusicsection = [
    {
      id: 1,
      // link: `/${currentTheme.name}/${currentTheme.alias}music/plate01`,
      title: "Listening to Music",
      details: "I love Kenny G",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate01`,
      title: "Karaoke",
      details: "I enjoy Karaoke with my family.",
    },
  ];

  const karenmusicplates = [
    {
      plate: "plate01",
      img: "/src/assets/KH/images/fa050305_129ar.jpg",
      title: "Plate 1",
      info: "Karaoke with family is always great fun.",
    },
  ];

  return {
    karenheader,
    karenmusicarticle,
    karenmusicsection,
    karenmusicplates,
  };
};
