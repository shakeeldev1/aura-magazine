import FashionStoryPage from "./FashionStoryPage";
import { useLanguage } from "../common/language";
import { runwayStories } from "../data/runwayStories";

const copy = {
  EN: {
    eyebrow: "The World of Fashion",
    title: "Runway",
    description:
      "Discover the collections, creative visions and defining moments shaping fashion on the world's most influential runways.",
    closingEyebrow: "Beyond the Catwalk",
    closingTitle: "Fashion moves forward.",
    closingItalic: "The runway sets the mood.",
  },
  FR: {
    eyebrow: "L’univers de la mode",
    title: "Défilés",
    description:
      "Découvrez les collections, les visions créatives et les moments marquants qui façonnent la mode sur les podiums les plus influents du monde.",
    closingEyebrow: "Au-delà du podium",
    closingTitle: "La mode avance.",
    closingItalic: "Le défilé donne le ton.",
  },
};

const Runway = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <FashionStoryPage
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      stories={runwayStories}
      closing={{
        eyebrow: t.closingEyebrow,
        title: t.closingTitle,
        italic: t.closingItalic,
      }}
    />
  );
};

export default Runway;
