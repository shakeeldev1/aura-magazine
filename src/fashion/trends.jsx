import React from "react";

const trendStories = [
  { title: "The Trends Defining This Season", category: "TREND REPORT", image: "photo-1539109136881-3be0616acf4b" },
  { title: "The Return of Romantic Dressing", category: "FASHION", image: "photo-1515372039744-b8f02a3ae446" },
  { title: "Soft Neutrals Take the Lead", category: "COLOR STORY", image: "photo-1490481651871-ab68de25d43d" },
  { title: "The Modern Minimalist Wardrobe", category: "WARDROBE", image: "photo-1551048632-24e444b48e90" },
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
  return (
    <main className="bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-10">
      <header className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-[10px] tracking-[0.35em] text-gray-500">
          WHAT'S NEXT IN FASHION
        </p>
        <h1 className="font-serif text-5xl tracking-tight text-black sm:text-7xl">
          Trends
        </h1>
        <div className="mx-auto mt-6 h-16 w-16 rounded-full border border-black" />
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-600">
          The colors, silhouettes, and defining details shaping the season
          ahead.
        </p>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {trendStories.map((story, index) => (
          <article key={`${story.title}-${index}`} className="group">
            <div className="overflow-hidden bg-gray-100">
              <img
                src={`https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=900&q=85`}
                alt={story.title}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mb-2 mt-4 text-[10px] tracking-[0.2em] text-gray-500">
              {story.category}
            </p>
            <h2 className="font-serif text-xl leading-snug text-black transition group-hover:underline">
              {story.title}
            </h2>
          </article>
        ))}
      </section>

      <footer className="mx-auto mt-16 max-w-7xl border-t border-black pt-6 text-center">
        <p className="font-serif text-2xl">The season starts here.</p>
        <p className="mt-2 text-xs tracking-widest text-gray-500">
          THE TREND REPORT
        </p>
      </footer>
    </main>
  );
};

export default Trends;