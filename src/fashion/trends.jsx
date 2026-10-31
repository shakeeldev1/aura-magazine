import FashionStoryPage from "./FashionStoryPage";
import { useLanguage } from "../common/language";

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

const trendStories = [
  { title: "The Trends Defining This Season", category: "TREND REPORT", image: "photo-1539109136881-3be0616acf4b" },
  { title: "The Return of Romantic Dressing", category: "FASHION", image: "photo-1515372039744-b8f02a3ae446" },
  { title: "Soft Neutrals Take the Lead", category: "COLOR STORY", image: "photo-1490481651871-ab68de25d43d" },
  { title: "The Modern Minimalist Wardrobe", category: "WARDROBE", image: "photo-1558769132-cb1aea458c5e" },
  { title: "The New Shape of Denim", category: "DENIM", image: "photo-1541099649105-f69ad21f3246" },
  { title: "A Softer Kind of Luxury", category: "LUXURY", image: "photo-1525507119028-ed4c629a60a3" },
  { title: "The Statement Coat Edit", category: "OUTERWEAR", image: "photo-1548126032-079a0fb0099d" },
  { title: "Accessories with a Point of View", category: "ACCESSORIES", image: "photo-1584917865442-de89df76afd3" },
  { title: "The New Evening Silhouette", category: "EVENINGWEAR", image: "photo-1566174053879-31528523f8ae" },
  { title: "Modern Classics Revisited", category: "CLASSICS", image: "photo-1617137968427-85924c800a22" },
  { title: "The Power of a Perfect Dress", category: "DRESSING", image: "photo-1595777457583-95e059d581b8" },
  { title: "Prints That Feel Fresh", category: "PRINTS", image: "photo-1496747611176-843222e1e57c" },
  { title: "The Elevated Everyday", category: "EVERYDAY LUXURY", image: "photo-1483985988355-763728e1935b" },
  { title: "A New Take on Tailoring", category: "TAILORING", image: "photo-1591047139829-d91aecb6caea" },
  { title: "The Art of Monochrome", category: "COLOR STORY", image: "photo-1509631179647-0177331693ae" },
  { title: "The Season of Statement Bags", category: "BAGS", image: "photo-1548036328-c9fa89d128fa" },
  { title: "Texture Makes the Look", category: "DETAILS", image: "photo-1551232864-3f0890e580d9" },
  { title: "The Return of Ballet Flats", category: "SHOES", image: "photo-1543163521-1bf539c55dd2" },
  { title: "Effortless Weekend Dressing", category: "WEEKEND", image: "photo-1529139574466-a303027c1d8b" },
  { title: "The Next Big Fashion Mood", category: "THE TREND EDIT", image: "photo-1539008835657-9e8e9680c956" },
];


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
