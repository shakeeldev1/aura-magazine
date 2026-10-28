
import React from "react";

const stories = [
  {
    category: "THE NEW CLASSICS",
    title: "The Wardrobe Staples Worth Keeping Forever",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "GLOBAL TRENDS",
    title: "The New Season's Biggest Fashion Mood",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "COLOR STORIES",
    title: "A Fresh Perspective on Color",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "DENIM EDIT",
    title: "Denim Gets a Modern Makeover",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "NEW SEASON",
    title: "The Pieces Defining What's Next",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "FASHION FORWARD",
    title: "Unexpected Pairings to Try Now",
    image:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=85",
  },
];

const Trends = () => {
  return (
    <section
      id="trends"
      className="scroll-mt-20 bg-[#f7f7f5] px-4 py-12 text-black sm:px-8 sm:py-16 lg:px-[5%]"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-8 border-b border-black/20 pb-5">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            03 / What's Next
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl">
            Trends & New Ideas
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-600">
            Fresh silhouettes, colors, wardrobe essentials, and the trends
            making their way into everyday style.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
          {stories.map((story, index) => (
            <article key={story.category} className="group min-w-0">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-serif text-2xl italic text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-black/15" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-neutral-500">
                  Trend Report
                </span>
              </div>

              <div className="overflow-hidden bg-neutral-100">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <p className="mb-2 mt-4 text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                {story.category}
              </p>
              <h3 className="font-serif text-2xl leading-snug sm:text-3xl">
                {story.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trends;
