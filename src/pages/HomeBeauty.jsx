import { StoryImage } from "../common/ui";

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
    <section id="beauty" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-stone">The art of self-care</p>

            <h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
              Beauty <em className="italic text-stone">Edit.</em>
            </h2>
          </div>

          <p className="max-w-xs font-sans text-sm leading-7 text-stone">
            A curated world of beauty, skincare and the little rituals that
            make you feel extraordinary.
          </p>
        </div>

        <div className="mt-14 grid gap-x-7 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {beautyStories.map((story) => (
            <article key={story.number} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <StoryImage
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover img-tone"
                />

                <span className="absolute top-4 left-4 bg-ivory px-3 py-1.5 font-serif text-base italic">
                  {story.number}
                </span>
              </div>

              <div className="pt-6">
                <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-stone uppercase">
                  {story.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-oxblood sm:text-3xl">
                  {story.title}
                </h3>

                <p className="mt-4 max-w-sm font-sans text-sm leading-7 text-stone">
                  {story.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBeauty;
