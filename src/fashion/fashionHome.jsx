
import React from "react";
import { Link } from "react-router-dom";

const fashionStories = [
  {
    category: "RUNWAY",
    title: "The New Language of Modern Fashion",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "STREET STYLE",
    title: "The Art of Effortless Dressing",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "DESIGNERS",
    title: "Inside the World of Contemporary Couture",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "THE NEW SEASON",
    title: "A Fresh Perspective on Everyday Style",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "FASHION ICONS",
    title: "The Women Defining Personal Style",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "THE EDIT",
    title: "Minimalism With a Modern Edge",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "COUTURE",
    title: "The Beauty of Exceptional Craftsmanship",
    image:
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "WARDROBE",
    title: "Pieces That Define a Timeless Wardrobe",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "STYLE NOTES",
    title: "Finding Inspiration in the Everyday",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "FASHION WEEK",
    title: "The Looks Everyone Is Talking About",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "BEHIND THE LOOK",
    title: "A Study in Shape, Texture and Form",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "ACCESSORIES",
    title: "The Details That Make the Difference",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "NEW CLASSICS",
    title: "Reimagining the Modern Classic",
    image:
      "https://images.unsplash.com/photo-1551048632-24e444b48e90?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "EDITORIAL",
    title: "When Fashion Becomes an Art Form",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "GLOBAL STYLE",
    title: "Street Fashion Around the World",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "THE RUNWAY REPORT",
    title: "Bold Silhouettes, Unforgettable Moments",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "COLOR STORIES",
    title: "A New Mood for the Season",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "MODERN TAILORING",
    title: "Classic Tailoring, Reconsidered",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "FASHION FORWARD",
    title: "The Next Chapter of Personal Style",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "THE FINAL EDIT",
    title: "A Different Point of View",
    image:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=800&q=85",
  },
];

const FashionHome = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* FASHION HEADING */}
      <section className="px-4 pb-8 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="text-center font-serif text-6xl font-bold uppercase tracking-tight sm:text-8xl lg:text-[110px]">
            Fashion
          </h1>

          {/* FOUR PAGE LINKS */}
          <nav className="mt-8 border-y border-black py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-semibold uppercase tracking-[0.2em] sm:gap-x-16 sm:text-xs">
              <Link
                to="/fashion/runway"
                className="transition-colors hover:text-gray-500"
              >
                Runway
              </Link>

              <Link
                to="/fashion/street-style"
                className="transition-colors hover:text-gray-500"
              >
                Street Style
              </Link>

              <Link
                to="/fashion/trends"
                className="transition-colors hover:text-gray-500"
              >
                Trends
              </Link>

              <Link
                to="/fashion/editors-picks"
                className="transition-colors hover:text-gray-500"
              >
                Editor's Picks
              </Link>
            </div>
          </nav>
        </div>
      </section>

      {/* 20 FASHION CARDS */}
      <section
        id="runway"
        className="px-4 pb-16 pt-5 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 md:grid-cols-3 lg:grid-cols-4">
            {fashionStories.map((story) => (
              <article
                key={story.title}
                className="group min-w-0"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="pt-3 sm:pt-4">
                  <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-[10px] sm:tracking-[0.22em]">
                    {story.category}
                  </p>

                  <h2 className="font-serif text-lg font-semibold leading-snug sm:text-xl lg:text-2xl">
                    {story.title}
                  </h2>

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
          A point of view
        </p>

        <h2 className="font-serif text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">
          Style is personal.
          <span className="mt-2 block italic">
            Fashion is a statement.
          </span>
        </h2>

        <div className="mx-auto mt-8 h-px w-16 bg-black" />
      </section>
    </main>
  );
};

export default FashionHome;
