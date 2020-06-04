import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import i18n from 'i18next';

import { en, de } from 'assets/locales';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    resources: {
      de: {
        common: de.de
      },
      en: {
        common: en.en
      }
    },
    react: {
      nsMode: 'default',
      wait: false
    },
    debug: true,
    lng: 'en',
    ns: ['common']
  });

export default i18n;
