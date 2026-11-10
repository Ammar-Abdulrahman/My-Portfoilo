import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { AiFillProject } from "react-icons/ai";
import "./index.css";
import ammar from "@Assets/images/carton6.png";
import { motion } from "framer-motion";
import SectionHeader from "@Components/SectionHeader";
import { useTranslation } from "react-i18next";
import {
  fadeUp,
  scaleIn,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  viewportOnce,
} from "@Utils/motion";

const About = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: FaAward,
      title: t("about.experience"),
      value: t("about.experienceValue"),
    },
    {
      icon: HiUsers,
      title: t("about.clients"),
      value: t("about.clientsValue"),
    },
    {
      icon: AiFillProject,
      title: t("about.projects"),
      value: t("about.projectsValue"),
    },
  ];

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} />

      <div className="container about__container">
        <motion.div className="about__me" variants={slideFromLeft}>
          <div className="about__me-image">
            <img src={ammar} alt={t("about.title")} />
          </div>
        </motion.div>

        <motion.div className="about__content" variants={slideFromRight}>
          <motion.div className="about__cards" variants={staggerContainer}>
            {cards.map(({ icon: Icon, title, value }) => (
              <motion.article
                key={title}
                className="about__card"
                variants={scaleIn}
                whileHover={{ y: -6 }}
              >
                <div className="about__icon-container">
                  <Icon className="about__icon" />
                </div>
                <h5>{title}</h5>
                <small>{value}</small>
              </motion.article>
            ))}
          </motion.div>

          <motion.p variants={fadeUp}>{t("about.description")}</motion.p>

          <motion.a
            href="#contact"
            className="btn btn-primary"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("about.cta")}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
