
import React from "react";

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
  return (
    <section className="bg-black px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 border-b border-white/40 pb-5">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-400">
            The Style Report
          </p>

          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight sm:text-6xl">
            In & Out
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {stories.map((story) => (
            <article key={story.category} className="group">
              <div className="aspect-[5/4] overflow-hidden bg-neutral-900">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-5">
                <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gray-400">
                  {story.category}
                </p>

                <h3 className="max-w-xl font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                  {story.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-gray-400">
                  {story.description}
                </p>

                <div className="mt-5 h-px w-12 bg-white transition-all duration-300 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeInandOut;
