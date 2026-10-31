import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./language";

const STORAGE_KEY = "insolite-lang";

// Reads the saved language, and falls back to English if storage is blocked or empty.
const readSavedLang = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    return saved === "FR" || saved === "EN" ? saved : "EN";
  } catch {
    return "EN";
  }
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(readSavedLang);

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage is unavailable, so the choice lasts only for this visit.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
