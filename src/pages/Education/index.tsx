import "./index.css";
import universityLogo from "@Assets/images/damscus-removebg-preview.png";
import { motion } from "framer-motion";
import { RiGraduationCapFill } from "react-icons/ri";
import SectionHeader from "@Components/SectionHeader";
import { useTranslation } from "react-i18next";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@Utils/motion";

const EducationSection = () => {
  const { t } = useTranslation();

  const courses = [
    t("education.courses.algorithm"),
    t("education.courses.dataStructures"),
    t("education.courses.softwareEngineering"),
  ];

  return (
    <motion.section
      id="education"
      className="education__section"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <SectionHeader
        eyebrow={t("education.eyebrow")}
        title={t("education.title")}
      />

      <div className="container education__container">
        <div className="education__timeline-connector" />

        <motion.div className="education__card" variants={scaleIn}>
          <div className="education__timeline-dot">
            <RiGraduationCapFill />
          </div>

          <div className="education__header">
            <img
              src={universityLogo}
              alt={t("education.institution")}
              className="education__logo"
            />
            <div className="education__title-container">
              <h3 className="education__institution">
                {t("education.institution")}
              </h3>
              <p className="education__specialization">
                {t("education.specialization")}
              </p>
            </div>
          </div>

          <div className="education__details">
            <div className="education__timeline">
              <svg
                className="education__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t("education.period")}</span>
            </div>

            <div className="education__location">
              <svg
                className="education__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t("education.location")}</span>
            </div>
          </div>

          <motion.p className="education__summary" variants={fadeUp}>
            {t("education.summary")}
          </motion.p>

          <div className="education__courses">
            <div className="education__course-list">
              {courses.map((course) => (
                <span key={course} className="education__course-pill">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
