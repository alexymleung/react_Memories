import { useTheme } from "../../hooks/useTheme";
import KarenBanner from "../../assets/KH/images/Buttons/KarenBanner.webp";

import KarenLinksHero from "../../assets/KH/images/fa070826_269ar.jpg";

export const KarenLinksData = () => {
  const { currentTheme } = useTheme();

  const karenheader = {
    image: KarenBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const karenlinksarticle = {
    image: KarenLinksHero,
    alt: `${currentTheme.name} Links`,
    info: "Enjoy the goodies from the links below",
  };

  const karenlinkssection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}links/plate01`,
      title: "credit",
      details: "Not the credit you are looking for.",
    },
  ];

  const karenlinksplates = [
    {
      plate: "plate01",
      title: "Plate 1",
      info: `<h2>Credit to Alex</h2>`,
    },
  ];

  return {
    karenheader,
    karenlinksarticle,
    karenlinkssection,
    karenlinksplates,
  };
};
