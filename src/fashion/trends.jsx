import FashionStoryPage from "./FashionStoryPage";
import { useLanguage } from "../common/language";
import { trendStories } from "../data/trendStories";

const copy = {
  EN: {
    eyebrow: "What's next in fashion",
    title: "Trends",
    description: "The colors, silhouettes, and defining details shaping the season ahead.",
    closingEyebrow: "The trend report",
    closingTitle: "The season starts here.",
  },
  FR: {
    eyebrow: "Ce qui arrive dans la mode",
    title: "Tendances",
    description: "Les couleurs, silhouettes et détails qui façonnent la saison à venir.",
    closingEyebrow: "Le rapport de tendances",
    closingTitle: "La saison commence ici.",
  },
};

const Trends = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <FashionStoryPage
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      stories={trendStories}
      closing={{ eyebrow: t.closingEyebrow, title: t.closingTitle }}
    />
  );
};

export default Trends;
