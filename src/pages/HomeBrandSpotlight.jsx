
import React from "react";

const HomeBrandSpotlight = () => {
  return (
    <section className="bg-white px-5 py-16 text-black sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-3 -top-3 h-full w-full border border-[#702632] sm:-left-5 sm:-top-5" />

          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
            alt="Luxury fashion editorial"
            loading="lazy"
            className="relative z-10 h-[360px] w-full object-cover grayscale sm:h-[500px]"
          />

          <span className="absolute -bottom-4 right-3 z-20 bg-[#702632] px-5 py-3 font-serif text-sm italic text-white sm:right-6">
            The Art of Style
          </span>
        </div>

        {/* Content */}
        <div className="pt-4 md:pt-0">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#702632]">
            The Aura Spotlight
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Style is
            <br />
            <span className="italic text-[#702632]">
              an attitude.
            </span>
          </h2>

          <div className="my-6 h-px w-16 bg-black" />

          <p className="max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
            Fashion is more than what you wear. It is the confidence
            you carry, the details you choose, and the story you tell
            without saying a word.
          </p>

          <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
            Discover a world of expressive looks, timeless elegance,
            and unexpected inspiration with Aura Magazine.
          </p>

          <a
            href="#fashion"
            className="mt-8 inline-flex items-center gap-5 border border-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
          >
            Discover our world
            <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeBrandSpotlight;
