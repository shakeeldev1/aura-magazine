
import React from "react";

const stories = [
  {
    category: "EDITOR'S PICK",
    title: "The Fashion Pieces Our Editors Love",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "MODERN TAILORING",
    title: "A New Take on Timeless Tailoring",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "ACCESSORIES",
    title: "Little Details, Big Impact",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "EVENING WEAR",
    title: "Getting Ready for After Dark",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "LUXURY DETAILS",
    title: "The Beauty of Thoughtful Design",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "WARDROBE ESSENTIALS",
    title: "The Pieces That Make an Outfit",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "THE EDITORIAL",
    title: "A Different Point of View",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },
];

const EditorsPicks = () => {
  return (
    <section
      id="editors-picks"
      className="scroll-mt-20 bg-[#171715] px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-[5%]"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/25 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              04 / Curated by AURA
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl">
              Editor's Picks
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-neutral-400">
            The looks, details, and ideas our editors can't stop thinking
            about.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-7 sm:gap-y-12 lg:grid-cols-4">
          {stories.map((story, index) => (
            <article key={story.category} className="group min-w-0">
              <div className="overflow-hidden bg-neutral-800">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mb-2 mt-4 text-[9px] uppercase tracking-[0.18em] text-neutral-400">
                {story.category}
              </p>
              <h3 className="font-serif text-xl leading-snug sm:text-2xl">
                {story.title}
              </h3>
              <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                AURA Selection • {String(index + 1).padStart(2, "0")}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-white/25 pt-6 text-center">
          <p className="font-serif text-2xl italic sm:text-3xl">
            Wear what feels like you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
