
import React from "react";

const latestStories = [
  {
    category: "PARIS FASHION",
    title: "The Effortless Elegance of Parisian Street Style",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "MILAN RUNWAY",
    title: "Bold Silhouettes Taking Over the Fashion Scene",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "LONDON STYLE",
    title: "The New Generation of British Fashion",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "NEW YORK FASHION",
    title: "Street Style That Makes Its Own Rules",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "COUTURE",
    title: "The Art of Dressing With Confidence",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "GLOBAL TRENDS",
    title: "International Looks Defining Modern Luxury",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
  },
];

const HomeLatestGrid = () => {
  return (
    <section className="w-full bg-white px-4 py-16 text-black sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div className="mb-10 flex items-end justify-between border-b-2 border-black pb-5">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-500">
              Fashion Around the World
            </p>

            <h2 className="font-serif text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
              The Latest
            </h2>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] sm:block">
            Global Style Edition
          </span>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {latestStories.map((story) => (
            <article key={story.category} className="group cursor-pointer">
              {/* Story Image */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Story Details */}
              <div className="pt-4">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  {story.category}
                </p>

                <h3 className="font-serif text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-gray-500 sm:text-2xl">
                  {story.title}
                </h3>

                <div className="mt-4 h-px w-12 bg-black transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLatestGrid;
