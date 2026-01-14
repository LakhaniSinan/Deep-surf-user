import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import trTranslations from './locales/tr.json';
import esTranslations from './locales/es.json';
import ruTranslations from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      tr: {
        translation: trTranslations,
      },
      es: {
        translation: esTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

