
import React, { useEffect, useState } from "react";


const fashionStories = [
  {
    number: "01",
    category: "STREET STYLE",
    title: "The art of standing out",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
    blackWhite: true,
  },
  {
    number: "02",
    category: "EDITORIAL",
    title: "Less ordinary. More you.",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=85",
  },
  {
    number: "03",
    category: "TIMELESS STYLE",
    title: "A look that says it all",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
    blackWhite: true,
  },
  {
    number: "04",
    category: "MODERN FASHION",
    title: "The new fashion attitude",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
  },
  {
    number: "05",
    category: "STYLE NOTES",
    title: "A statement in every detail",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85",
  },
  {
    number: "06",
    category: "THE NEW EDIT",
    title: "Wear your own story",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=85",
    blackWhite: true,
  },
  {
    number: "07",
    category: "RUNWAY TRENDS",
    title: "A new era of elegance",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
  },
  {
    number: "08",
    category: "CHIC ESSENTIALS",
    title: "Everyday, elevated",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85",
    blackWhite: true,
  },
  {
    number: "09",
    category: "FASHION STORIES",
    title: "Confidence in every look",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
  },
  {
    number: "10",
    category: "STYLE FORECAST",
    title: "The look of tomorrow",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85",
  },
];


const HomeFashion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const repeatedStories = [...fashionStories, ...fashionStories];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % fashionStories.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="fashion"
      className="overflow-hidden bg-white  px-5 py-16 text-black sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#702632]">
              Curated for you
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              The Fashion
              <span className="ml-2 italic text-[#702632]">
                Edit.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-600">
            The latest looks, statement pieces, and personal style
            moments worth saving.
          </p>
        </div>

        {/* Automatic Three-Card Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / 3)}%)`,
            }}
          >
            {repeatedStories.map((story, index) => (
              <article
                key={`${story.number}-${index}`}
                className="w-1/3 flex-none px-2"
              >
                {/* Image */}
                <div className="group relative overflow-hidden bg-neutral-200">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className={`h-[250px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[350px] lg:h-[450px] ${
                      story.blackWhite ? "grayscale" : ""
                    }`}
                  />

                  <span className="absolute left-3 top-3 bg-white px-3 py-2 font-serif text-sm italic text-[#702632] sm:left-4 sm:top-4">
                    {story.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="flex items-start justify-between gap-2 border-b border-black/20 py-4 sm:py-5">
                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.15em] text-[#702632] sm:text-[10px] sm:tracking-[0.25em]">
                      {story.category}
                    </p>

                    <h3 className="font-serif text-lg transition-colors hover:text-[#702632] sm:text-2xl lg:text-3xl">
                      {story.title}
                    </h3>
                  </div>

                  <span className="mt-1 text-lg transition-transform hover:translate-x-1 hover:-translate-y-1 sm:text-xl">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="mt-7 flex justify-center gap-2">
          {fashionStories.map((story, index) => (
            <button
              key={story.number}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-[#702632]"
                  : "w-3 bg-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-10 text-center sm:mt-14">
          <a
            href="#latest"
            className="inline-block border-b border-[#702632] pb-2 text-[10px] uppercase tracking-[0.3em] text-[#702632] transition hover:border-black hover:text-black"
          >
            Explore all fashion stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeFashion;
