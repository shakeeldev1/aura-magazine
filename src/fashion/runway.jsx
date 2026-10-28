
import React from "react";


const runwayStories = [
  {
    title: "The Art of Haute Couture",
    category: "RUNWAY",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Sculptural Silhouettes",
    category: "SPRING COLLECTION",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "A New Era of Elegance",
    category: "DESIGNERS",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Beauty of Minimalism",
    category: "FALL COLLECTION",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Romance on the Runway",
    category: "COUTURE",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Modern Fashion Icons",
    category: "MODELS",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Timeless Tailoring",
    category: "STYLE",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The New Eveningwear",
    category: "COLLECTIONS",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Fashion in Motion",
    category: "RUNWAY REPORT",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Art of Draping",
    category: "COUTURE",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Tailoring Reimagined",
    category: "DESIGN",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Runway to Reality",
    category: "STREET STYLE",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Future of Fashion",
    category: "NEW TALENT",
    image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Statement Dressing",
    category: "TREND REPORT",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "An Ode to Texture",
    category: "DETAILS",
    image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Fashion Muse",
    category: "PORTRAITS",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Soft Tones, Modern Shapes",
    category: "DESIGNERS",
    image: "https://images.unsplash.com/photo-1551048632-24e444b48e90?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Effortless Sophistication",
    category: "STYLE",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Runway Edit",
    category: "EDITOR'S PICKS",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Fashion's Next Chapter",
    category: "THE NEW SEASON",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
  },
];


const Runway = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* RUNWAY HEADING */}
      <section className="px-4 pb-10 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-[1440px] text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-gray-500 sm:text-xs">
            The World of Fashion
          </p>

          <h1 className="font-serif text-6xl font-bold uppercase tracking-tight sm:text-8xl lg:text-[110px]">
            Runway
          </h1>

          {/* CIRCLE DESIGN */}
          <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full border border-black sm:mt-8 sm:h-20 sm:w-20">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black sm:h-12 sm:w-12">
              <span className="font-serif text-xl italic sm:text-2xl">
                R
              </span>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Discover the collections, creative visions and defining moments
            shaping fashion on the world's most influential runways.
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-black" />
        </div>
      </section>

      {/* RUNWAY STORIES */}
      <section className="px-4 pb-16 pt-4 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex items-center justify-between border-b border-black pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl">
              The Runway Edit
            </h2>

            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
              Fashion / 01–20
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 md:grid-cols-3 lg:grid-cols-4">
            {runwayStories.map((story, index) => (
              <article key={`${story.category}-${index}`} className="group min-w-0">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="pt-3 sm:pt-4">
                  <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.15em] text-gray-500 sm:text-[10px] sm:tracking-[0.2em]">
                    {story.category}
                  </p>

                  <h3 className="font-serif text-base font-semibold leading-snug sm:text-xl lg:text-2xl">
                    {story.title}
                  </h3>

                  <div className="mt-3 h-px w-8 bg-black transition-all duration-300 group-hover:w-14" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING EDITORIAL */}
      <section className="border-t border-black px-4 py-16 text-center sm:px-8 sm:py-24">
        <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-gray-500">
          Beyond the Catwalk
        </p>

        <h2 className="font-serif text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">
          Fashion moves forward.
          <span className="mt-2 block italic">
            The runway sets the mood.
          </span>
        </h2>

        <div className="mx-auto mt-8 h-px w-16 bg-black" />
      </section>
    </main>
  );
};

export default Runway;