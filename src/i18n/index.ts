import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import zh from './locales/zh.json';
import ko from './locales/ko.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  zh: { translation: zh },
  ko: { translation: ko },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
