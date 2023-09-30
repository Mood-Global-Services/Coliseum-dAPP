// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import enTranslation from '../translations/en.json';
import frTranslation from '../translations/fr.json';
import esTranslation from '../translations/sp.json';
import itTranslation from '../translations/it.json';
import arTranslation from '../translations/ar.json';
import ruTranslation from '../translations/ru.json';

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: { translation: enTranslation }, // English translations
      fr: { translation: frTranslation }, // French translations
      es: { translation: esTranslation }, // Spanish translations
      it: { translation: itTranslation }, // for italian
      ar: { translation: arTranslation },
      ru: { translation: ruTranslation },
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
