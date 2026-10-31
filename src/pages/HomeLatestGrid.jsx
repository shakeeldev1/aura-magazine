import { StoryImage } from "../common/ui";

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
    <section id="latest" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col gap-5 border-b border-ink pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-stone">Fashion Around the World</p>

            <h2 className="mt-5 font-serif text-6xl leading-none sm:text-7xl lg:text-8xl">
              The Latest
            </h2>
          </div>

          <p className="eyebrow text-stone">Global Style Edition</p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-x-7 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {latestStories.map((story) => (
            <article key={story.category} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-linen">
                <StoryImage
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover img-tone"
                />
              </div>

              <div className="pt-6">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-stone uppercase">
                  {story.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl leading-snug transition-colors duration-300 group-hover:text-oxblood sm:text-[1.7rem]">
                  {story.title}
                </h3>

                <div className="mt-5 h-px w-12 bg-ink transition-all duration-500 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLatestGrid;
