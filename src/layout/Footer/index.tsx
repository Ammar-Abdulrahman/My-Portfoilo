import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "./index.css";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, staggerFast, viewportOnce } from "@Utils/motion";

const socials = [
  {
    href: "https://www.linkedin.com/in/ammar-abdulrahman/",
    icon: BsLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.github.com/ammar-abdulrahman/",
    icon: BsGithub,
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
    icon: BsWhatsapp,
    label: "WhatsApp",
  },
  {
    href: "https://t.me/Ammar_Abdulrahman",
    icon: FaTelegramPlane,
    label: "Telegram",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { href: "#home", label: t("footer.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#education", label: t("nav.education") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#services", label: t("nav.services") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerFast}
    >
      <motion.a href="#home" className="footer__logo" variants={fadeUp}>
        {t("nav.brand")}
      </motion.a>

      <motion.ul className="permalinks" variants={staggerFast}>
        {links.map((link) => (
          <motion.li key={link.href} variants={fadeUp}>
            <a href={link.href}>{link.label}</a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div className="footer__social" variants={staggerFast}>
        {socials.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            variants={fadeUp}
            whileHover={{ y: -4, scale: 1.05 }}
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>

      <motion.div className="footer__copyright" variants={fadeUp}>
        <small>
          &copy; {new Date().getFullYear()} {t("nav.brand")}. {t("footer.rights")}
        </small>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
