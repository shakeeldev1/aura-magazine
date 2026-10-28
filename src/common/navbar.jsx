
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [lang, setLang] = useState("EN");
  const [activeTab, setActiveTab] = useState("Fashion");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navigation = {
    EN: [
      { name: "Fashion", href: "/fashion" },
      { name: "Beauty", href: "#beauty" },
      { name: "Decor", href: "#decor" },
      { name: "Food", href: "#food" },
    ],
    FR: [
      { name: "Mode", href: "/fashion" },
      { name: "Beauté", href: "#beauty" },
      { name: "Décor", href: "#decor" },
      { name: "Gastronomie", href: "#food" },
    ],
  };

  const activeNav = navigation[lang];

  const handleNavigation = (item, index) => {
    setActiveTab(navigation.EN[index].name);
    setIsMobileMenuOpen(false);

    if (item.href === "/fashion") {
      navigate("/fashion");
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(item.href);

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/15 bg-white/95 text-black backdrop-blur-md transition-colors duration-300">

      {/* Announcement Ribbon */}
      <div className="bg-black px-4 py-1.5 text-center text-[10px] font-light uppercase tracking-[0.3em] text-white">
        <span>AURA x KHIM ASRIEL</span>
        <span className="mx-3 opacity-40">|</span>
        <span className="text-white/75">
          Issue N° 01 — Autumn / Winter 2026
        </span>
      </div>

      {/* Main Header */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 lg:px-12">

        {/* Language Switcher */}
        <div className="hidden items-center space-x-2 font-serif text-xs tracking-widest text-neutral-600 md:flex">
          <button
            onClick={() => setLang("FR")}
            className={`border-b px-2 py-1 transition-all duration-300 ${
              lang === "FR"
                ? "border-black font-semibold text-black"
                : "border-transparent opacity-60 hover:text-black"
            }`}
          >
            FR
          </button>

          <span className="opacity-30">/</span>

          <button
            onClick={() => setLang("EN")}
            className={`border-b px-2 py-1 transition-all duration-300 ${
              lang === "EN"
                ? "border-black font-semibold text-black"
                : "border-transparent opacity-60 hover:text-black"
            }`}
          >
            EN
          </button>
        </div>

        {/* Center Logo */}
        <div className="group flex cursor-pointer flex-col items-center">
          <Link to="/" className="flex flex-col items-center">
            <div className="mb-1 flex items-center space-x-3">
              <svg
                className="h-6 w-6 text-black transition-colors duration-500 group-hover:text-neutral-500 md:h-8 md:w-8"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
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

            <h1 className="pl-[0.35em] font-serif text-2xl font-light uppercase tracking-[0.35em] text-black md:text-3xl">
              AURA
            </h1>

            <span className="mt-0.5 font-sans text-[9px] uppercase tracking-[0.4em] text-neutral-500 md:text-[10px]">
              X KHIM ASRIEL
            </span>
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-6 text-xs uppercase tracking-widest text-black md:flex">
          <button className="flex items-center space-x-1 transition-colors duration-300 hover:text-neutral-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <span className="hidden lg:inline">
              {lang === "FR" ? "Rechercher" : "Search"}
            </span>
          </button>

          <a
            href="#subscribe"
            className="border border-black bg-black px-4 py-2 text-[11px] tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            {lang === "FR" ? "S'ABONNER" : "SUBSCRIBE"}
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setLang(lang === "EN" ? "FR" : "EN")}
            className="font-serif text-xs font-semibold tracking-widest text-black"
          >
            {lang}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl justify-center px-6">
          <ul className="no-scrollbar flex space-x-8 overflow-x-auto py-3 md:space-x-16">
            {activeNav.map((item, index) => {
              const isSelected =
                activeTab === navigation.EN[index].name;

              return (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => handleNavigation(item, index)}
                    className={`relative inline-block whitespace-nowrap py-1 text-xs uppercase tracking-[0.25em] transition-all duration-300 md:text-sm ${
                      isSelected
                        ? "font-medium text-black"
                        : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    {item.name}

                    {isSelected && (
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="animate-fadeIn space-y-6 border-b border-black/15 bg-white px-6 py-8 md:hidden">
          <ul className="space-y-4 text-center">
            {activeNav.map((item, index) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => handleNavigation(item, index)}
                  className="block w-full border-b border-black/10 py-2 text-sm uppercase tracking-[0.3em] text-black transition-colors hover:text-neutral-500"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-center pt-4">
            <a
              href="#subscribe"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full border border-black bg-black py-3 text-center text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
            >
              {lang === "FR"
                ? "S'ABONNER AU MAGAZINE"
                : "SUBSCRIBE TO MAGAZINE"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
