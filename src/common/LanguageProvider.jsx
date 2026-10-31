import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./language";

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
