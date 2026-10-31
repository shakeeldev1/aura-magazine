import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../common/language";
import { resolveImage, storyPath } from "../common/stories";
import { StoryImage } from "../common/ui";
import { useDocumentTitle } from "../common/useDocumentTitle";

const copy = {
  EN: {
    navLabel: "Fashion sections",
    all: "All",
    runway: "Runway",
    street: "Street Style",
    trends: "Trends",
    picks: "Editor's Picks",
    count: "Fashion",
  },
  FR: {
    navLabel: "Sections mode",
    all: "Tout",
    runway: "Défilés",
    street: "Street Style",
    trends: "Tendances",
    picks: "Choix de la rédaction",
    count: "Mode",
  },
};

const FashionSubnav = ({ t }) => {
  const sections = [
    { label: t.all, to: "/fashion", end: true },
    { label: t.runway, to: "/fashion/runway" },
    { label: t.street, to: "/fashion/street-style" },
    { label: t.trends, to: "/fashion/trends" },
    { label: t.picks, to: "/fashion/editors-picks" },
  ];

  return (
    <nav aria-label={t.navLabel} className="border-y border-ink/15">
      <ul className="no-scrollbar mx-auto flex max-w-[1440px] gap-7 overflow-x-auto px-5 sm:px-8 md:justify-center md:gap-14 lg:px-12">
        {sections.map((item) => (
          <li key={item.to} className="shrink-0">
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `group relative inline-block py-5 font-sans text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-stone hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-px bg-ink transition-transform duration-500 ease-luxe ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const FashionStoryPage = ({ eyebrow, title, description, stories, closing }) => {
  const { lang } = useLanguage();
  const t = copy[lang];
  const count = String(stories.length).padStart(2, "0");

  useDocumentTitle(title);

  return (
    <main className="bg-ivory">
      {/* Heading */}
      <header className="px-5 pt-16 pb-14 text-center sm:px-8 md:pt-24 md:pb-16">
        {eyebrow && <p className="eyebrow text-stone">{eyebrow}</p>}

        <h1
          className={`${eyebrow ? "mt-6" : ""} font-serif text-6xl leading-none sm:text-8xl lg:text-[9.5rem]`}
        >
          {title}
        </h1>

        {description && (
          <p className="mx-auto mt-8 max-w-xl font-sans text-base leading-8 text-stone">
            {description}
          </p>
        )}
      </header>

      <FashionSubnav t={t} />

      {/* Stories */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <div className="mb-12 flex items-center justify-between border-b border-ink/15 pb-5">
          <p className="font-sans text-[10px] font-medium tracking-[0.25em] text-stone uppercase">
            {t.count} / 01–{count}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {stories.map((story, index) => (
            <Link key={`${story.title}-${index}`} to={storyPath(story)} className="group min-w-0">
              <div className="aspect-[3/4] overflow-hidden bg-linen">
                <StoryImage
                  src={resolveImage(story.image)}
                  alt={story.title}
                  eager={index < 4}
                  className="h-full w-full object-cover img-tone"
                />
              </div>

              <div className="pt-4">
                <p className="font-sans text-[9px] font-medium tracking-[0.18em] text-oxblood uppercase sm:text-[10px] sm:tracking-[0.22em]">
                  {story.category}
                </p>

                <h2 className="mt-3 font-serif text-lg leading-snug transition-colors duration-300 group-hover:text-oxblood sm:text-2xl">
                  {story.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-ink/15 px-5 py-24 text-center sm:px-8 md:py-32">
        {closing.eyebrow && (
          <p className="eyebrow text-stone">{closing.eyebrow}</p>
        )}

        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[1.02] sm:text-7xl">
          {closing.title}
          {closing.italic && (
            <span className="mt-2 block italic text-oxblood">
              {closing.italic}
            </span>
          )}
        </h2>
      </section>
    </main>
  );
};

export default FashionStoryPage;
