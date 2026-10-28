
import React from "react";

const stories = [
  {
    category: "STREET STYLE",
    title: "Personal Style Has No Rules",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "GLOBAL STREET STYLE",
    title: "A City-by-City Guide to Getting Dressed",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "FASHION ICONS",
    title: "The Women Changing Street Fashion",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "THE STYLE FILE",
    title: "Everyday Looks With Main-Character Energy",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=85",
  },
];

const StreetStyle = () => {
  return (
    <section
      id="street-style"
      className="scroll-mt-20 bg-white px-4 py-12 text-black sm:px-8 sm:py-16 lg:px-[5%]"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-8 border-b border-black/20 pb-5">
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            02 / Out in the World
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl">
            Street Style
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-600">
            Real people, personal expression, and outfits that turn the
            pavement into a runway.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-7 sm:gap-y-12 lg:grid-cols-4">
          {stories.map((story) => (
            <article key={story.category} className="group min-w-0">
              <div className="overflow-hidden bg-neutral-100">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mb-2 mt-4 text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                {story.category}
              </p>
              <h3 className="font-serif text-xl leading-snug sm:text-2xl">
                {story.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreetStyle;