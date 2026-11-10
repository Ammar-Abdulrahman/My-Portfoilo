import MyCv from "@Assets/files/Ammar Abdulrahman Resume.pdf";
import ammar from "@Assets/images/carton6.png";
import "./index.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  fadeUp,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  staggerFast,
} from "@Utils/motion";

const socials = [
  {
    href: "https://www.linkedin.com/in/ammar-abdulrahman/",
    icon: BsLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ammar-Abdulrahman",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100006471773863",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/ammar__abdulrahman/",
    icon: FiInstagram,
    label: "Instagram",
  },
  {
    href: "https://wa.me/+963964793913",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
  {
    href: "https://t.me/Ammar_Abdulrahman",
    icon: FaTelegramPlane,
    label: "Telegram",
  },
];

const BannerPage = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="banner__section">
      <div className="banner__orb banner__orb--one" aria-hidden="true" />
      <div className="banner__orb banner__orb--two" aria-hidden="true" />

      <div className="banner__grid">
        <motion.div
          className="banner__copy"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="banner__eyebrow" variants={fadeUp}>
            {t("banner.eyebrow")}
          </motion.p>

          <motion.h1 variants={slideFromLeft}>{t("banner.name")}</motion.h1>

          <motion.h2 className="banner__role" variants={fadeUp}>
            {t("banner.role")}
          </motion.h2>

          <motion.p className="banner__bio" variants={fadeUp}>
            {t("banner.bioBefore")}{" "}
            <span className="banner__highlight">{t("banner.bioHighlight")}</span>{" "}
            {t("banner.bioAfter")}
          </motion.p>

          <motion.div className="cta" variants={fadeUp}>
            <a className="btn" href={MyCv} download>
              {t("banner.downloadCv")}
            </a>
            <a className="btn btn-primary" href="#contact">
              {t("banner.letsTalk")}
            </a>
          </motion.div>

          <motion.div
            className="header__social_banner"
            variants={staggerFast}
            initial="hidden"
            animate="visible"
          >
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="banner"
          variants={slideFromRight}
          initial="hidden"
          animate="visible"
        >
          <div className="image">
            <img src={ammar} alt={t("banner.name")} />
          </div>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="shapeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-bg-varient)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#shapeGradient)"
              d="M39.4,-30.9C55.9,-22.8,77.6,-11.4,81,3.4C84.3,18.2,69.5,36.4,52.9,42C36.4,47.6,18.2,40.5,-1.3,41.8C-20.8,43.1,-41.5,52.7,-51.2,47.1C-60.9,41.5,-59.5,20.8,-54.2,5.3C-48.9,-10.2,-39.8,-20.4,-30.1,-28.5C-20.4,-36.5,-10.2,-42.3,0.6,-42.9C11.4,-43.5,22.8,-38.9,39.4,-30.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerPage;
