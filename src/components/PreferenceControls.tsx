import { useTranslation } from "react-i18next";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "@Context/ThemeContext";
import "./PreferenceControls.css";

const PreferenceControls = () => {
  const { t, i18n } = useTranslation();
  const { palette, mode, setPalette, toggleMode } = useTheme();
  const isArabic = i18n.language === "ar";

  const switchLanguage = () => {
    void i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  return (
    <div className="pref-controls" role="group" aria-label="Preferences">
      <button
        type="button"
        className="pref-controls__btn"
        onClick={switchLanguage}
        aria-label={t("controls.language")}
        title={t("controls.language")}
      >
        {isArabic ? t("controls.switchToEnglish") : t("controls.switchToArabic")}
      </button>

      <div className="pref-controls__palette" role="group" aria-label={t("controls.theme")}>
        <button
          type="button"
          className={`pref-controls__swatch pref-controls__swatch--blue ${
            palette === "blue" ? "is-active" : ""
          }`}
          onClick={() => setPalette("blue")}
          aria-label={t("controls.blue")}
          title={t("controls.blue")}
        />
        <button
          type="button"
          className={`pref-controls__swatch pref-controls__swatch--green ${
            palette === "green" ? "is-active" : ""
          }`}
          onClick={() => setPalette("green")}
          aria-label={t("controls.green")}
          title={t("controls.green")}
        />
      </div>

      <button
        type="button"
        className="pref-controls__btn pref-controls__btn--icon"
        onClick={toggleMode}
        aria-label={mode === "dark" ? t("controls.light") : t("controls.dark")}
        title={mode === "dark" ? t("controls.light") : t("controls.dark")}
      >
        {mode === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default PreferenceControls;
