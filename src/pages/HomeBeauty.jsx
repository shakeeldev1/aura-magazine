
import React from "react";

const beautyStories = [
  {
    number: "01",
    category: "SKINCARE",
    title: "The Art of Glowing Skin",
    description:
      "Discover the rituals and essentials behind naturally radiant skin.",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    category: "MAKEUP",
    title: "Beauty in Every Detail",
    description:
      "A closer look at timeless beauty, soft glam and effortless elegance.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    category: "FRAGRANCE",
    title: "A Scent to Remember",
    description:
      "Explore the fragrances that leave a lasting impression.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
  },
];

const HomeBeauty = () => {
  return (
    <section id="beauty" className="bg-white px-5 py-16 text-black sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-black/20 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-500">
              THE ART OF SELF-CARE
            </p>

            <h2 className="font-serif text-5xl font-normal tracking-tight sm:text-6xl lg:text-7xl">
              Beauty<span className="italic text-neutral-400"> Edit.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-neutral-600">
            A curated world of beauty, skincare and the little rituals that
            make you feel extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {beautyStories.map((story) => (
            <article key={story.number} className="group">
              <a href="#beauty" className="block">
                <div className="relative overflow-hidden bg-neutral-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] tracking-widest text-black">
                    {story.number}
                  </span>
                </div>

                <div className="pt-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                    {story.category}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl transition-colors duration-300 group-hover:text-neutral-500 sm:text-3xl">
                    {story.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
                    {story.description}
                  </p>

                  <span className="mt-5 inline-block border-b border-black pb-1 text-[10px] uppercase tracking-[0.2em]">
                    Discover story ↗
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBeauty;
