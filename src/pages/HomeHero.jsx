
import React from "react";

const fashionImages = [
  {
    id: 1,
    title: "FUNNY OUTFITS",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    position:
      "left-[2%] top-[5%] rotate-[-8deg] sm:left-[8%] sm:top-[4%]",
    size: "w-[29%] sm:w-[23%] lg:w-[19%]",
  },
  {
    id: 2,
    title: "BEAUTY & CHAOS",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
    position:
      "right-[2%] top-[7%] rotate-[7deg] sm:right-[8%] sm:top-[7%]",
    size: "w-[29%] sm:w-[23%] lg:w-[19%]",
  },
  {
    id: 3,
    title: "RUNWAY VIBES",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
    position:
      "left-[1%] top-[43%] rotate-[5deg] sm:left-[5%] sm:top-[42%]",
    size: "w-[28%] sm:w-[22%] lg:w-[18%]",
  },
  {
    id: 4,
    title: "BEACH FITS",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85",
    position:
      "right-[1%] top-[45%] rotate-[-5deg] sm:right-[5%] sm:top-[44%]",
    size: "w-[28%] sm:w-[22%] lg:w-[18%]",
  },
  {
    id: 5,
    title: "THE MAIN CHARACTER",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=90",
    position:
      "left-1/2 top-[15%] z-10 -translate-x-1/2",
    size: "w-[43%] sm:w-[35%] lg:w-[30%]",
    main: true,
  },
];

const FashionImageCard = ({ item }) => {
  return (
    <div
      className={`absolute ${item.position} ${item.size}`}
    >
      <div
        className={`group relative overflow-hidden border-[3px] border-white bg-neutral-200 shadow-[0_12px_30px_rgba(0,0,0,0.18)] ${
          item.main
            ? "aspect-[9/16] rounded-sm"
            : "aspect-[4/5] rounded-[2px]"
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        <div className="absolute bottom-0 left-0 w-full p-1.5 sm:p-3">
          <p
            className={`font-sans font-medium tracking-[0.12em] text-white ${
              item.main
                ? "text-[7px] sm:text-[10px] lg:text-xs"
                : "text-[6px] sm:text-[9px]"
            }`}
          >
            {item.title}
          </p>

          {item.main && (
            <div className="mt-2 flex items-center gap-2 sm:mt-3">
              <div className="h-[2px] flex-1 bg-white/50">
                <div className="h-full w-1/4 bg-white" />
              </div>
              <span className="text-[7px] tracking-wider text-white sm:text-[10px]">
                0:15
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-8 pt-8 text-black sm:px-8 sm:pb-10 sm:pt-10 lg:px-[3.5%]">
      {/* Soft paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#000_0.5px,transparent_0.5px)] [background-size:5px_5px]" />

      {/* Navbar is intentionally not included */}
      <div className="relative mx-auto max-w-[1500px]">
        {/* Editorial label */}
        <div className="absolute left-0 top-[10%] z-20 hidden sm:block">
          <p className="text-[11px] uppercase leading-[2.1] tracking-[0.28em]">
            Style
            <br />
            Beyond
            <br />
            Trends
          </p>
          <div className="mt-4 h-px w-12 bg-black" />
        </div>

        {/* Image collage */}
        <div className="relative mx-auto h-[420px] max-w-[1050px] sm:h-[570px] lg:h-[690px]">
          {/* Crown decoration */}
          <div className="absolute left-[35%] top-[5%] z-20 hidden -rotate-12 font-serif text-4xl sm:block">
            ♕
          </div>

          {/* Heart decoration */}
          <div className="absolute right-[5%] top-[25%] z-20 hidden rotate-12 font-serif text-4xl sm:block">
            ♡
          </div>

          {fashionImages.map((item) => (
            <FashionImageCard key={item.id} item={item} />
          ))}

          {/* Decorative tape */}
          <div className="absolute left-[7%] top-[5%] z-20 hidden h-5 w-16 -rotate-[25deg] bg-black/70 sm:block" />

          <div className="absolute right-[7%] top-[10%] z-20 hidden h-5 w-16 rotate-[25deg] bg-black/70 sm:block" />

          {/* Handwritten note */}
          <p className="absolute bottom-[7%] right-[1%] z-20 hidden -rotate-6 font-serif text-2xl italic leading-tight sm:block lg:right-[2%]">
            Good
            <br />
            Vibes
            <br />
            Only ♡
          </p>
        </div>

        {/* Main headline */}
        <div className="relative z-20 mx-auto -mt-2 max-w-[1050px] sm:-mt-[110px] lg:-mt-[135px]">
          <div className="max-w-[340px] sm:max-w-[390px]">
            <p className="mb-1 text-[11px] uppercase tracking-[0.3em] sm:text-sm sm:tracking-[0.4em]">
              Fashion is a
            </p>

            <h1 className="font-serif text-[clamp(4rem,13vw,8rem)] leading-[0.78] tracking-[-0.07em]">
              <span className="italic">MOOD.</span>
            </h1>

            <p className="mt-4 max-w-[290px] text-[11px] leading-[1.8] tracking-wide sm:text-sm">
              Trendy looks, funny moments, and unfiltered style — because
              fashion isn’t just what you wear, it’s how you feel.
            </p>

            <a
              href="#latest"
              className="mt-5 inline-flex items-center gap-5 bg-black px-5 py-3 text-[9px] uppercase tracking-[0.25em] text-white transition hover:bg-neutral-700 sm:px-6 sm:text-[10px]"
            >
              Explore the edit
              <span className="text-lg">⟶</span>
            </a>
          </div>
        </div>

        {/* Hero bottom line */}
        <div className="relative z-20 mt-8 flex items-center justify-between gap-3 border-t border-black/25 pt-4 sm:mt-10 sm:pt-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-black sm:w-12" />
            <p className="text-[7px] uppercase tracking-[0.18em] sm:text-[9px] sm:tracking-[0.28em]">
              Aura Magazine X Khim Asriel
            </p>
          </div>

          <p className="hidden text-[9px] uppercase tracking-[0.25em] sm:block">
            Be bold&nbsp; / &nbsp;Be you&nbsp; / &nbsp;Be Aura
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
