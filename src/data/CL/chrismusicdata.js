import { useTheme } from "../../hooks/useTheme";
import ChrisBanner from "../../assets/CL/images/Buttons/ChrisBanner.webp";
import ChrisMusicHero from "../../assets/CL/images/fa080404_325ar.jpg";
import fa080404_113ar from "../../assets/CL/images/fa080404_113ar.jpg";
import fa050305_129ar from "../../assets/CL/images/fa050305_129ar.jpg";

export const ChrisMusicData = () => {
  const { currentTheme } = useTheme();

  const chrisheader = {
    image: ChrisBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const chrismusicarticle = {
    image: ChrisMusicHero,
    alt: `${currentTheme.name} Music`,
    info: "I like playing piano and Cello.",
  };

  const chrismusicsection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate01`,
      title: "Cello",
      details: "I play and have regular lessons in the Music Office",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate02`,
      title: "Piano",
      details: "I also have regular Piano lessons.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate03`,
      title: "Karaoke",
      details: "I  like singing Karaoke, especially Ultraman, any Ultraman.",
    },
  ];

  const chrismusicplates = [
    {
      plate: "plate01",
      img: fa080404_113ar,
      title: "Plate 1",
      info: "I had regular lessons in Cello in the Music Office of LCSD.",
    },
    {
      plate: "plate02",
      img: ChrisMusicHero,
      title: "Plate 2",
      info: "Below is a link to Prelude in C I like playing.",
    },
    {
      plate: "plate03",
      img: fa050305_129ar,
      title: "Plate 3",
      info: "Singing Karaoke with dad and brother Jonathan.",
    },
  ];

  return {
    chrisheader,
    chrismusicarticle,
    chrismusicsection,
    chrismusicplates,
  };
};
