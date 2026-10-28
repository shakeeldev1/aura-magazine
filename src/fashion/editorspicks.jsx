import React from "react";

const editorStories = [
  { title: "The Pieces Our Editors Love", category: "EDITOR'S PICKS", image: "photo-1483985988355-763728e1935b" },
  { title: "A Masterclass in Elegance", category: "FASHION", image: "photo-1529139574466-a303027c1d8b" },
  { title: "The Perfect Little Black Dress", category: "WARDROBE ESSENTIALS", image: "photo-1595777457583-95e059d581b8" },
  { title: "Our Favorite Designer Details", category: "DESIGN", image: "photo-1551232864-3f0890e580d9" },
  { title: "The Art of Understated Luxury", category: "LUXURY", image: "photo-1490481651871-ab68de25d43d" },
  { title: "The Bag Worth Knowing", category: "ACCESSORIES", image: "photo-1584917865442-de89df76afd3" },
  { title: "A Fresh Take on Classics", category: "STYLE NOTES", image: "photo-1617137968427-85924c800a22" },
  { title: "The Dresses on Our Wishlist", category: "WISHLIST", image: "photo-1566174053879-31528523f8ae" },
  { title: "The New Fashion Collectibles", category: "COLLECTOR'S EDIT", image: "photo-1548036328-c9fa89d128fa" },
  { title: "A Lesson in Perfect Proportions", category: "STYLE GUIDE", image: "photo-1529139574466-a303027c1d8b" },
  { title: "The Beauty of Fine Details", category: "DETAILS", image: "photo-1544441893-675973e31985" },
  { title: "The Modern Woman's Wardrobe", category: "WARDROBE", image: "photo-1515886657613-9f3515b0c78f" },
  { title: "The Shoes That Finish the Look", category: "SHOES", image: "photo-1543163521-1bf539c55dd2" },
  { title: "Our Favorite Evening Looks", category: "EVENINGWEAR", image: "photo-1515372039744-b8f02a3ae446" },
  { title: "The Power of a Perfect Jacket", category: "OUTERWEAR", image: "photo-1591047139829-d91aecb6caea" },
  { title: "A Palette of Timeless Neutrals", category: "COLOR STORY", image: "photo-1551048632-24e444b48e90" },
  { title: "The Pieces to Wear on Repeat", category: "EVERYDAY STYLE", image: "photo-1525507119028-ed4c629a60a3" },
  { title: "A New Definition of Chic", category: "EDITORIAL", image: "photo-1534528741775-53994a69daeb" },
  { title: "The Season's Most Beautiful Looks", category: "THE EDIT", image: "photo-1509631179647-0177331693ae" },
  { title: "The Editor's Final Word", category: "EDITOR'S NOTE", image: "photo-1496747611176-843222e1e57c" },
];

const EditorsPicks = () => {
  return (
    <main className="bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-10">
      <header className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-[10px] tracking-[0.35em] text-gray-500">
          SELECTED WITH AN EDITOR'S EYE
        </p>
        <h1 className="font-serif text-5xl tracking-tight text-black sm:text-7xl">
          Editor's Picks
        </h1>
        <div className="mx-auto mt-6 h-16 w-16 rounded-full border border-black" />
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-600">
          The standout fashion stories, timeless pieces, and inspiring looks
          chosen by our editors.
        </p>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {editorStories.map((story, index) => (
          <article key={`${story.title}-${index}`} className="group">
            <div className="overflow-hidden bg-gray-100">
              <img
                src={`https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=900&q=85`}
                alt={story.title}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mb-2 mt-4 text-[10px] tracking-[0.2em] text-gray-500">
              {story.category}
            </p>
            <h2 className="font-serif text-xl leading-snug text-black transition group-hover:underline">
              {story.title}
            </h2>
          </article>
        ))}
      </section>

      <footer className="mx-auto mt-16 max-w-7xl border-t border-black pt-6 text-center">
        <p className="font-serif text-2xl">Chosen for you.</p>
        <p className="mt-2 text-xs tracking-widest text-gray-500">
          THE EDITOR'S SELECTION
        </p>
      </footer>
    </main>
  );
};

export default EditorsPicks;