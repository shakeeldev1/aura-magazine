import { useLanguage } from "../common/language";
import { StoryImage } from "../common/ui";

const copy = {
  EN: { eyebrow: "The Style Report", titleA: "In", titleB: "Out" },
  FR: { eyebrow: "Le rapport de style", titleA: "Dans", titleB: "Hors" },
};

const stories = [
  {
    category: "IN STYLE",
    title: "The Timeless Appeal of Black and White",
    description:
      "Discover the pieces that make minimal dressing feel effortlessly luxurious.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "OUT OF STYLE",
    title: "When Less Really Becomes More",
    description:
      "A fresh perspective on personal style, confidence and modern fashion.",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80",
  },
];

const HomeInandOut = () => {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section id="in-out" className="bg-ink py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-5 border-b border-ivory/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-ivory/55">{t.eyebrow}</p>

            <h2 className="mt-5 font-serif text-6xl leading-none sm:text-7xl lg:text-8xl">
              {t.titleA} <em className="italic text-ivory/60">&amp;</em> {t.titleB}
            </h2>
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          {stories.map((story) => (
            <article key={story.category} className="group">
              <div className="aspect-[5/4] overflow-hidden bg-ivory/10">
                <StoryImage
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover img-tone"
                />
              </div>

              <div className="pt-7">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-ivory/55 uppercase">
                  {story.category}
                </p>

                <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
                  {story.title}
                </h3>

                <p className="mt-4 max-w-lg font-sans text-sm leading-7 text-ivory/60">
                  {story.description}
                </p>

                <div className="mt-6 h-px w-12 bg-ivory transition-all duration-500 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeInandOut;
