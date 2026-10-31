import { useState } from "react";
import { useLanguage } from "./language";

export const Logo = ({ size = "sm" }) => {
  const large = size === "lg";

  return (
    <span className="flex flex-col items-center">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        aria-hidden="true"
        className={
          large ? "mb-3 h-10 w-10 sm:h-12 sm:w-12" : "mb-1.5 h-7 w-7 md:h-8 md:w-8"
        }
      >
        <polygon points="50,10 90,85 10,85" />
        <polygon points="50,40 70,75 30,75" fill="currentColor" opacity="0.15" />
        <circle cx="50" cy="60" r="4" fill="currentColor" />
      </svg>

      <span
        className={
          large
            ? "pl-[0.35em] font-serif text-5xl leading-none tracking-[0.35em] uppercase sm:text-6xl"
            : "pl-[0.35em] font-serif text-2xl leading-none tracking-[0.35em] uppercase md:text-3xl"
        }
      >
        AURA
      </span>

      <span
        className={
          large
            ? "mt-3 text-[10px] tracking-[0.4em] uppercase opacity-70"
            : "mt-1.5 text-[8px] tracking-[0.4em] uppercase opacity-70 md:text-[9px]"
        }
      >
        X Khim Asriel
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
        <span className="font-serif text-2xl italic text-stone">Aura</span>
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
