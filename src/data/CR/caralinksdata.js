import { useTheme } from "../../hooks/useTheme";
import CaraBanner from "../../assets/CR/images/Buttons/CaraBanner.webp";
import CaraLinksHero from "../../assets/CR/images/fa071117_003B.jpg";

export const CaraLinksData = () => {
  const { currentTheme } = useTheme();

  const caraheader = {
    image: CaraBanner,
    alt: `${currentTheme.name} Banner`,
  };

  const caralinksarticle = {
    image: CaraLinksHero,
    alt: `${currentTheme.name} Links`,
    info: "Enjoy the goodies from the links below",
  };

  const caralinkssection = [
    {
      id: 1,
      link: `/${currentTheme.name}/${currentTheme.alias}links/plate01`,
      title: "classwork",
      details: "Somthing we cannot get away, at least for now.",
    },
    {
      id: 2,
      link: `/${currentTheme.name}/${currentTheme.alias}links/plate02`,
      title: "games",
      details: "I love visiting these Pages.",
    },
    {
      id: 3,
      link: `/${currentTheme.name}/${currentTheme.alias}links/plate03`,
      title: "downloads",
      details: "See the joy of the game downloads.",
    },
    {
      id: 4,
      link: `/${currentTheme.name}/${currentTheme.alias}links/plate04`,
      title: "credit",
      details: "Not the credit you are thinking of",
    },
  ];

  const caralinksplates = [
    {
      plate: "plate01",
      title: "Plate 1",
      info: `<h1 ><a href="http://smallcampus.net/entrance/">小校園</a></h1>
      <h1><a href="http://www.prof-ho.com/reading/">每日一篇</a></h1>
      <h1><a href="https://icograms.com/usage-school-maps">MAP Maths Adventure Platform</a></h1>
      <h1 id="line1"><a href="https://www.gsis.edu.hk/en/">常識Ready Go</a></h1>
      `,
    },
    {
      plate: "plate02",
      title: "Plate 2",
      info: `<div id="games">
      <h1 align="left">Games</h1>
      </div>

      <div class="link-box">
        <h2><a href="http://www.asiadog.com/game/" target="_blank">Asiadog Games</a></h2>
      </div>

      <div class="link-box">
        <h2><a href="http://mario.ngamer.net/index.shtml" target="_blank">Mario Games</a></h2>
      </div>

      <div class="link-box">
        <h2><a href="http://www.newgrounds.com/games/" target="_blank">Newgrounds Games</a></h2>
      </div>

      <div class="link-box">
        <h2><a href="http://hk10.com/" target="_blank">HK10 Games</a></h2>
      </div>

      <div class="link-box">
        <h2><a href="http://www.ugameasia.com/i-game/" target="_blank">Ugameasia Games</a></h2>
      </div>

      `,
    },
    {
      plate: "plate03",
      title: "Plate 3",
      info: `<h1><a href="http://www.download.com/Mario-Forever/3000-7435_4-10344976.html">mario forever</a></h1>
      <p>It is a game. It's good.I like it very much.</p>`,
    },
    {
      plate: "plate04",
      title: "Plate 4",
      info: `<h1>boss: Leung Pak Yung</h1>`,
    },
  ];

  return {
    caraheader,
    caralinksarticle,
    caralinkssection,
    caralinksplates,
  };
};
