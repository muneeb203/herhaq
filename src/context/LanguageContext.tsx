import React, { createContext, useContext, useEffect, useState } from 'react';
import { getLanguage, setLanguage, Language } from '../language';

interface LanguageContextProps {
  language: Language;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLang] = useState<Language>(getLanguage());

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
