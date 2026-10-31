import FashionStoryPage from "./FashionStoryPage";
import { useLanguage } from "../common/language";
import { fashionStories } from "../data/fashionHomeStories";

const copy = {
  EN: {
    title: "Fashion",
    closingEyebrow: "A point of view",
    closingTitle: "Style is personal.",
    closingItalic: "Fashion is a statement.",
  },
  FR: {
    title: "Mode",
    closingEyebrow: "Un point de vue",
    closingTitle: "Le style est personnel.",
    closingItalic: "La mode est une déclaration.",
  },
};

const FashionHome = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <FashionStoryPage
      title={t.title}
      stories={fashionStories}
      closing={{
        eyebrow: t.closingEyebrow,
        title: t.closingTitle,
        italic: t.closingItalic,
      }}
    />
  );
};

export default FashionHome;
