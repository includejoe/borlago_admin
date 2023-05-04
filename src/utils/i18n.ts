import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18next;
