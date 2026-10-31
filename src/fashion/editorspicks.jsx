import FashionStoryPage from "./FashionStoryPage";
import { useLanguage } from "../common/language";
import { editorStories } from "../data/editorStories";

const copy = {
  EN: {
    eyebrow: "Selected with an editor's eye",
    title: "Editor's Picks",
    description:
      "The standout fashion stories, timeless pieces, and inspiring looks chosen by our editors.",
    closingEyebrow: "The editor's selection",
    closingTitle: "Chosen for you.",
  },
  FR: {
    eyebrow: "Sélectionné avec l’œil d’un rédacteur",
    title: "Choix de la rédaction",
    description:
      "Les histoires mode marquantes, pièces intemporelles et looks inspirants choisis par notre équipe éditoriale.",
    closingEyebrow: "La sélection de la rédaction",
    closingTitle: "Choisi pour vous.",
  },
};

const EditorsPicks = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <FashionStoryPage
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.description}
      stories={editorStories}
      closing={{ eyebrow: t.closingEyebrow, title: t.closingTitle }}
    />
  );
};

export default EditorsPicks;
