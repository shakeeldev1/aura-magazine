
import React, { useState } from "react";

const HomeNewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <section className="bg-black px-4 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl border border-white/30 px-5 py-12 text-center sm:px-12 sm:py-16">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-400">
          The Magazine Edit
        </p>

        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
          A Little More Style in Your Inbox
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Get the latest fashion stories, beauty inspiration and culture
          updates delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-1 border border-white/40 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white"
          />

          <button
            type="submit"
            className="bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-gray-300"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-5 text-[10px] leading-5 tracking-wide text-gray-500">
          By subscribing, you agree to receive magazine updates by email.
        </p>
      </div>
    </section>
  );
};

export default HomeNewsLetter;
