import { ArrowRight } from "lucide-react";
import { StoryImage } from "../common/ui";

const HomeHero = () => {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] items-end gap-14 px-5 pt-12 pb-16 sm:px-8 md:pt-16 md:pb-24 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pt-20">
        {/* Copy */}
        <div className="order-2 lg:order-1 lg:col-span-5 lg:pb-10">
          <p className="eyebrow motion-safe:animate-fade-up">
            Style beyond trends
          </p>

          <p className="mt-8 font-serif text-3xl italic motion-safe:animate-fade-up sm:text-4xl">
            Fashion is a
          </p>

          <h1 className="font-serif text-[clamp(5rem,15vw,11.5rem)] leading-[0.8] tracking-[-0.03em] motion-safe:animate-fade-up">
            <span className="italic">MOOD.</span>
          </h1>

          <p className="mt-10 max-w-sm font-sans text-base leading-8 text-stone motion-safe:animate-fade-up">
            Trendy looks, funny moments, and unfiltered style — because
            fashion isn’t just what you wear, it’s how you feel.
          </p>

          <a href="#latest" className="btn-solid mt-10 motion-safe:animate-fade-up">
            Explore the edit
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>

        {/* Imagery */}
        <div className="relative order-1 lg:order-2 lg:col-span-7">
          <figure className="relative ml-auto w-[88%] sm:w-[80%]">
            <div className="aspect-[4/5] overflow-hidden bg-linen">
              <StoryImage
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=90"
                alt="The main character, a fashion editorial portrait"
                eager
                className="h-full w-full object-cover img-tone"
              />
            </div>

            {/* Progress caption */}
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-4 bg-ivory/95 px-4 py-3 sm:inset-x-6 sm:bottom-6 sm:px-5 sm:py-4">
              <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase">
                The Main Character
              </span>

              <span className="h-px flex-1 bg-ink/20">
                <span className="block h-full w-1/4 bg-ink" />
              </span>

              <span className="font-sans text-[10px] tracking-[0.15em]">0:15</span>
            </figcaption>
          </figure>

          <div className="absolute -bottom-10 left-0 w-[42%] border-[8px] border-ivory bg-linen sm:-left-10 sm:w-[36%] lg:-left-14">
            <div className="aspect-[3/4] overflow-hidden">
              <StoryImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                alt="Funny outfits, a playful street look"
                className="h-full w-full object-cover img-tone"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-ink/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="eyebrow text-ink/70">Aura Magazine x Khim Asriel</p>

        <p className="eyebrow text-ink/70">Be bold &nbsp;/&nbsp; Be you &nbsp;/&nbsp; Be Aura</p>
      </div>
    </section>
  );
};

export default HomeHero;
