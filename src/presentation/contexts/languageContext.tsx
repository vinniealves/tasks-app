import React, { createContext, useEffect, useState } from "react";
import * as Localization from 'expo-localization';

type Language = 'pt' | 'en'

interface ILanguageContext {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: 'pt',
  setLanguage: () => { },
});

export const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState<Language>('pt'); // Idioma padrão

  useEffect(() => {
    const deviceLanguage = Localization.getLocales()[0].languageCode
    if (deviceLanguage) {
      setLanguage(deviceLanguage as Language);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
