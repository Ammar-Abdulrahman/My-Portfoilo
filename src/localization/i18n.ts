import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const STORAGE_KEY = "portfolio-lang";

const savedLang =
  typeof window !== "undefined"
    ? localStorage.getItem(STORAGE_KEY) || "en"
    : "en";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: savedLang === "ar" ? "ar" : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const applyDocumentDirection = (lang: string) => {
  const dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  localStorage.setItem(STORAGE_KEY, lang);
};

applyDocumentDirection(i18n.language);

i18n.on("languageChanged", applyDocumentDirection);

export default i18n;
