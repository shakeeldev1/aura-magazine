import { useState } from "react";
import { useLanguage } from "./language";

export const Logo = ({ size = "sm" }) => {
  const large = size === "lg";

  return (
    <span className="flex flex-col items-center">
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
        className={
          large ? "mb-3 h-10 w-10 sm:h-12 sm:w-12" : "mb-1.5 h-7 w-7 md:h-8 md:w-8"
        }
      >
        <path d="M10 10H90L10 90Z" />
        <path transform="translate(6 6)" d="M90 10V90H10Z" />
      </svg>

      <span
        className={
          large
            ? "pl-[0.22em] font-serif font-semibold text-5xl leading-none tracking-[0.22em] uppercase sm:text-6xl"
            : "pl-[0.22em] font-serif font-semibold text-2xl leading-none tracking-[0.22em] uppercase md:text-3xl"
        }
      >
        INSOLITE
      </span>

      <span
        className={
          large
            ? "mt-3 whitespace-nowrap text-[10px] tracking-[0.3em] uppercase opacity-70"
            : "mt-1.5 whitespace-nowrap text-[8px] tracking-[0.3em] uppercase opacity-70 md:text-[9px] md:tracking-[0.4em]"
        }
      >
        Magazine x Khim Asriel
      </span>
    </span>
  );
};

// `inverted` is for dark backgrounds.
export const LanguageSwitch = ({ className = "", inverted = false }) => {
  const { lang, setLang } = useLanguage();

  const activeTone = inverted ? "text-ivory" : "text-ink";
  const idleTone = inverted
    ? "text-ivory/50 hover:text-ivory"
    : "text-stone hover:text-ink";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`items-center gap-2 font-sans text-[11px] font-medium tracking-[0.2em] ${className}`}
    >
      {["FR", "EN"].map((code, index) => (
        <span key={code} className="flex items-center gap-2">
          {index > 0 && (
            <span aria-hidden="true" className="opacity-40">
              /
            </span>
          )}

          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`py-1 transition-colors duration-300 ${
              lang === code
                ? `${activeTone} underline underline-offset-8`
                : idleTone
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
};

// Falls back to a neutral tile if an image fails to load.
export const StoryImage = ({ src, alt, eager = false, className = "" }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-linen ${className}`}
      >
        <span className="font-serif text-2xl italic text-stone">Insolite</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
