import FashionStoryPage from "./FashionStoryPage";
import { useLanguage } from "../common/language";

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

const editorStories = [
  { title: "The Pieces Our Editors Love", category: "EDITOR'S PICKS", image: "photo-1483985988355-763728e1935b" },
  { title: "A Masterclass in Elegance", category: "FASHION", image: "photo-1529139574466-a303027c1d8b" },
  { title: "The Perfect Little Black Dress", category: "WARDROBE ESSENTIALS", image: "photo-1595777457583-95e059d581b8" },
  { title: "Our Favorite Designer Details", category: "DESIGN", image: "photo-1551232864-3f0890e580d9" },
  { title: "The Art of Understated Luxury", category: "LUXURY", image: "photo-1490481651871-ab68de25d43d" },
  { title: "The Bag Worth Knowing", category: "ACCESSORIES", image: "photo-1584917865442-de89df76afd3" },
  { title: "A Fresh Take on Classics", category: "STYLE NOTES", image: "photo-1617137968427-85924c800a22" },
  { title: "The Dresses on Our Wishlist", category: "WISHLIST", image: "photo-1566174053879-31528523f8ae" },
  { title: "The New Fashion Collectibles", category: "COLLECTOR'S EDIT", image: "photo-1548036328-c9fa89d128fa" },
  { title: "A Lesson in Perfect Proportions", category: "STYLE GUIDE", image: "photo-1529139574466-a303027c1d8b" },
  { title: "The Beauty of Fine Details", category: "DETAILS", image: "photo-1544441893-675973e31985" },
  { title: "The Modern Woman's Wardrobe", category: "WARDROBE", image: "photo-1515886657613-9f3515b0c78f" },
  { title: "The Shoes That Finish the Look", category: "SHOES", image: "photo-1543163521-1bf539c55dd2" },
  { title: "Our Favorite Evening Looks", category: "EVENINGWEAR", image: "photo-1515372039744-b8f02a3ae446" },
  { title: "The Power of a Perfect Jacket", category: "OUTERWEAR", image: "photo-1591047139829-d91aecb6caea" },
  { title: "A Palette of Timeless Neutrals", category: "COLOR STORY", image: "photo-1558769132-cb1aea458c5e" },
  { title: "The Pieces to Wear on Repeat", category: "EVERYDAY STYLE", image: "photo-1525507119028-ed4c629a60a3" },
  { title: "A New Definition of Chic", category: "EDITORIAL", image: "photo-1534528741775-53994a69daeb" },
  { title: "The Season's Most Beautiful Looks", category: "THE EDIT", image: "photo-1509631179647-0177331693ae" },
  { title: "The Editor's Final Word", category: "EDITOR'S NOTE", image: "photo-1496747611176-843222e1e57c" },
];


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
