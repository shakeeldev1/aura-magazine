import React from "react";

const streetStyleStories = [
  { title: "The New Street Style", category: "STREET STYLE", image: "photo-1529139574466-a303027c1d8b" },
  { title: "Everyday Parisian Chic", category: "CITY STYLE", image: "photo-1483985988355-763728e1935b" },
  { title: "Off-Duty Model Looks", category: "MODEL STYLE", image: "photo-1534528741775-53994a69daeb" },
  { title: "The Art of Layering", category: "STYLE GUIDE", image: "photo-1551232864-3f0890e580d9" },
  { title: "Denim on the Streets", category: "DENIM", image: "photo-1541099649105-f69ad21f3246" },
  { title: "Minimal Looks, Maximum Impact", category: "MINIMALISM", image: "photo-1490481651871-ab68de25d43d" },
  { title: "A City Full of Style", category: "CITY FASHION", image: "photo-1524504388940-b1c1722653e1" },
  { title: "The Perfect Everyday Outfit", category: "EVERYDAY STYLE", image: "photo-1487222477894-8943e31ef7b2" },
  { title: "Relaxed Tailoring", category: "TAILORING", image: "photo-1617137968427-85924c800a22" },
  { title: "The Sneaker Effect", category: "ACCESSORIES", image: "photo-1542291026-7eec264c27ff" },
  { title: "Neutral Streetwear", category: "NEUTRAL TONES", image: "photo-1515886657613-9f3515b0c78f" },
  { title: "Weekend Dressing", category: "WEEKEND STYLE", image: "photo-1525507119028-ed4c629a60a3" },
  { title: "The Oversized Edit", category: "NEW SILHOUETTES", image: "photo-1550614000-4895a10e1bfd" },
  { title: "Cool in the City", category: "CITY LOOKS", image: "photo-1509631179647-0177331693ae" },
  { title: "Effortless Street Chic", category: "STREET EDIT", image: "photo-1539008835657-9e8e9680c956" },
  { title: "Classic Meets Contemporary", category: "MODERN CLASSICS", image: "photo-1551048632-24e444b48e90" },
  { title: "The Bag Everyone Wants", category: "ACCESSORIES", image: "photo-1584917865442-de89df76afd3" },
  { title: "Soft Layers for the City", category: "LAYERING", image: "photo-1544441893-675973e31985" },
  { title: "Street Style Details", category: "DETAILS", image: "photo-1515886657613-9f3515b0c78f" },
  { title: "Your Daily Style Inspiration", category: "THE STREET EDIT", image: "photo-1523381210434-271e8be1f52b" },
];

const StreetStyle = () => {
  return (
    <main className="bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-10">
      <header className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-[10px] tracking-[0.35em] text-gray-500">
          THE WORLD OUTSIDE THE RUNWAY
        </p>
        <h1 className="font-serif text-5xl tracking-tight text-black sm:text-7xl">
          Street Style
        </h1>
        <div className="mx-auto mt-6 h-16 w-16 rounded-full border border-black" />
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-600">
          Personal style, city inspiration, and the looks defining fashion
          beyond the catwalk.
        </p>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {streetStyleStories.map((story, index) => (
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
        <p className="font-serif text-2xl">Style is personal.</p>
        <p className="mt-2 text-xs tracking-widest text-gray-500">
          THE STREET STYLE EDIT
        </p>
      </footer>
    </main>
  );
};

export default StreetStyle;