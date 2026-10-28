import React, { useState } from "react";

const Footer = () => {
  const [lang, setLang] = useState("EN");
  const [email, setEmail] = useState("");

  const content = {
    EN: {
      tagline: "A Different Point of View.",
      description:
        "An editorial universe exploring fashion, beauty, interiors and gastronomy through a distinctive lens.",
      explore: "EXPLORE",
      categories: ["Fashion", "Beauty", "Decor", "Food"],
      magazine: "THE MAGAZINE",
      about: "About Aura",
      inout: "In & Out",
      contact: "Contact",
      newsletter: "THE AURA LETTER",
      newsletterText:
        "Discover our selection of culture, style and inspiration.",
      placeholder: "Your email address",
      subscribe: "SUBSCRIBE",
      privacy: "By subscribing, you agree to our Privacy Policy.",
      rights: "All rights reserved.",
      policy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    FR: {
      tagline: "Un autre point de vue.",
      description:
        "Un univers éditorial dédié à la mode, la beauté, la décoration et la gastronomie.",
      explore: "EXPLORER",
      categories: ["Mode", "Beauté", "Décor", "Gastronomie"],
      magazine: "LE MAGAZINE",
      about: "À propos d'Aura",
      inout: "In & Out",
      contact: "Contact",
      newsletter: "LA LETTRE AURA",
      newsletterText:
        "Découvrez notre sélection de culture, de style et d'inspiration.",
      placeholder: "Votre adresse e-mail",
      subscribe: "S'INSCRIRE",
      privacy:
        "En vous inscrivant, vous acceptez notre politique de confidentialité.",
      rights: "Tous droits réservés.",
      policy: "Confidentialité",
      terms: "Conditions générales",
    },
  };

  const t = content[lang];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Connect a newsletter service here.
    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white">
      {/* Top border */}
      <div className="h-px bg-white/20" />

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
        {/* Brand Logo */}
        <div className="flex flex-col items-center border-b border-white/15 pb-12 text-center">
          <a
            href="#"
            aria-label="Aura Magazine home"
            className="group flex flex-col items-center"
          >
            {/* Triangle SVG logo */}
            <div className="mb-2 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-white transition-colors duration-500 group-hover:text-neutral-400 sm:h-10 sm:w-10"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                aria-hidden="true"
              >
                <polygon points="50,10 90,85 10,85" />
                <polygon
                  points="50,40 70,75 30,75"
                  fill="currentColor"
                  opacity="0.15"
                />
                <circle cx="50" cy="60" r="4" fill="currentColor" />
              </svg>
            </div>

            {/* AURA wordmark */}
            <span className="pl-[0.35em] font-serif text-4xl font-light uppercase tracking-[0.35em] text-white sm:text-5xl">
              AURA
            </span>

            <span className="mt-2 text-[10px] uppercase tracking-[0.4em] text-neutral-400">
              MAGAZINE
            </span>

            <span className="mt-1.5 text-[9px] uppercase tracking-[0.3em] text-neutral-400">
              X KHIM ASRIEL
            </span>
          </a>

          <p className="mt-6 font-serif text-xl italic text-neutral-300 sm:text-2xl">
            {t.tagline}
          </p>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand description */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-white">
              AURA MAGAZINE
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-300">
              {t.description}
            </p>

            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Paris · Fashion · Culture
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-white">
              {t.explore}
            </h3>

            <ul className="mt-5 space-y-4">
              {t.categories.map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${["fashion", "beauty", "decor", "food"][index]}`}
                    className="font-serif text-lg text-neutral-200 transition-colors duration-300 hover:text-neutral-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Magazine links */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-white">
              {t.magazine}
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-neutral-300">
              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  {t.about}
                </a>
              </li>

              <li>
                <a
                  href="#in-out"
                  className="transition hover:text-white"
                >
                  {t.inout}
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@auramagazine.com"
                  className="transition hover:text-white"
                >
                  {t.contact}
                </a>
              </li>
            </ul>

            <div className="mt-7">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-300 transition-colors hover:text-white"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div id="subscribe">
            <h3 className="font-serif text-2xl text-white">
              {t.newsletter}
            </h3>

            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {t.newsletterText}
            </p>

            <form onSubmit={handleSubscribe} className="mt-6">
              <label htmlFor="footer-email" className="sr-only">
                {t.placeholder}
              </label>

              <div className="flex border-b border-white/70">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-neutral-500"
                />

                <button
                  type="submit"
                  className="ml-2 shrink-0 text-[9px] font-medium uppercase tracking-[0.15em] text-white transition-colors hover:text-neutral-400 sm:text-[10px]"
                >
                  {t.subscribe} ↗
                </button>
              </div>

              <p className="mt-3 text-[10px] leading-5 text-neutral-400">
                {t.privacy}
              </p>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[9px] uppercase tracking-[0.12em] text-neutral-400">
            © {new Date().getFullYear()} AURA MAGAZINE X KHIM ASRIEL.{" "}
            {t.rights}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] text-neutral-400">
            <a
              href="#privacy"
              className="transition hover:text-white"
            >
              {t.policy}
            </a>

            <a
              href="#terms"
              className="transition hover:text-white"
            >
              {t.terms}
            </a>

            <span className="h-3 w-px bg-white/25" />

            <div className="flex items-center gap-2 tracking-widest">
              <button
                type="button"
                onClick={() => setLang("FR")}
                aria-pressed={lang === "FR"}
                className={
                  lang === "FR"
                    ? "font-bold text-white"
                    : "transition hover:text-white"
                }
              >
                FR
              </button>

              <span>/</span>

              <button
                type="button"
                onClick={() => setLang("EN")}
                aria-pressed={lang === "EN"}
                className={
                  lang === "EN"
                    ? "font-bold text-white"
                    : "transition hover:text-white"
                }
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Large editorial signature */}
      <div className="overflow-hidden border-t border-white/15 py-4 text-center">
        <p className="whitespace-nowrap font-serif text-[clamp(2.5rem,9vw,7.5rem)] leading-none tracking-[-0.06em] text-white/[0.12]">
          AURA MAGAZINE
        </p>
      </div>
    </footer>
  );
};

export default Footer;