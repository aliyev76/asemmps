import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations } from './translations';

export type Language = 'tr' | 'en' | 'ar';

interface TranslationContextType {
  t: (key: keyof typeof translations['tr']) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: keyof typeof translations['tr']) => {
    return translations[language][key] || translations['tr'][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </TranslationContext.Provider>
  );
};

export const useTranslationGlobal = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslationGlobal must be used within a TranslationProvider');
  }
  return context;
};
