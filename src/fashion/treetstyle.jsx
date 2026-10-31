import FashionStoryPage from "./FashionStoryPage";
import { useLanguage } from "../common/language";
import { streetStyleStories } from "../data/streetStyleStories";

const copy = {
  EN: {
    eyebrow: "The world outside the runway",
    title: "Street Style",
    description:
      "Personal style, city inspiration, and the looks defining fashion beyond the catwalk.",
    closingEyebrow: "The street style edit",
    closingTitle: "Style is personal.",
  },
  FR: {
    eyebrow: "Le monde hors des podiums",
    title: "Street Style",
    description:
      "Style personnel, inspiration urbaine et les looks qui façonnent la mode au-delà du podium.",
    closingEyebrow: "La sélection street style",
    closingTitle: "Le style est personnel.",
  },
};

const StreetStyle = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <FashionStoryPage
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      stories={streetStyleStories}
      closing={{ eyebrow: t.closingEyebrow, title: t.closingTitle }}
    />
  );
};

export default StreetStyle;
