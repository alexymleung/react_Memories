import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";
import CaraMusicHero from "../../assets/CR/images/fa080404_352ar.jpg";
import fa080404_347ar from "../../assets/CR/images/fa080404_347ar.jpg";

export const CaraMusicData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const caramusicarticle = {
    image: CaraMusicHero,
    alt: `${currentTheme.name} Music`,
    info: "Music is such an indispensable part in my life that I literally wears music on my lips wherever I go.",
  };

  const caramusicsection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate01`,
      title: "Piano",
      details: "I have regular lessons in piano.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}music/plate01`,
      title: "Karaoke",
      details: "I  like singing Karaoke, especially 叮噹.",
    },
  ];

  const caramusicplates = [
    {
      plate: "plate01",
      img: fa080404_347ar,
      title: "Plate 1",
      info: "I love playing piano. Here, I am playing 'Mountain Climbing'.",
    },
  ];

  return {
    caraheader,
    caramusicarticle,
    caramusicsection,
    caramusicplates,
  };
};
