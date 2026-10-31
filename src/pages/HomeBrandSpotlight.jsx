import { ArrowRight } from "lucide-react";
import { StoryImage } from "../common/ui";

const HomeBrandSpotlight = () => {
  return (
    <section className="bg-linen">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-16 md:py-28 lg:px-12">
        {/* Image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="aspect-[4/5] overflow-hidden bg-ivory">
            <StoryImage
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85"
              alt="Luxury fashion editorial"
              className="h-full w-full object-cover img-tone"
            />
          </div>

          <p className="absolute bottom-6 left-0 bg-ivory px-5 py-3 font-serif text-lg italic sm:px-6 sm:py-4 sm:text-xl">
            The Art of Style
          </p>
        </div>

        {/* Content */}
        <div className="max-w-xl md:pl-4">
          <p className="eyebrow text-stone">The Insolite Spotlight</p>

          <h2 className="mt-6 font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Style is
            <span className="block italic text-oxblood">an attitude.</span>
          </h2>

          <div className="mt-8 h-px w-16 bg-ink" />

          <p className="mt-8 font-sans text-base leading-8 text-stone">
            Fashion is more than what you wear. It is the confidence
            you carry, the details you choose, and the story you tell
            without saying a word.
          </p>

          <p className="mt-5 font-sans text-base leading-8 text-stone">
            Discover a world of expressive looks, timeless elegance,
            and unexpected inspiration with Insolite Magazine.
          </p>

          <a href="#fashion" className="link-line mt-10">
            Discover our world
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeBrandSpotlight;
