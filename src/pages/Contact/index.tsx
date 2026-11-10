import "./index.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
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

const ContactUs = () => {
  const { t } = useTranslation();

  const options = [
    {
      icon: MdOutlineEmail,
      title: t("contact.email"),
      value: "ammarabdulrahmman@gmail.com",
      href: "mailto:ammarabdulrahmman@gmail.com",
    },
    {
      icon: FaTelegramPlane,
      title: t("contact.telegram"),
      value: "Ammar Abdulrahman",
      href: "https://t.me/Ammar_Abdulrahman",
    },
    {
      icon: BsWhatsapp,
      title: t("contact.whatsapp"),
      value: "+963 964 793 913",
      href: "https://wa.me/+963964793913",
    },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailtoLink = `mailto:ammarabdulrahmman@gmail.com?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`${message}\n`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <SectionHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
      />

      <div className="container contact__container">
        <motion.div className="contact__options" variants={slideFromLeft}>
          {options.map(({ icon: Icon, title, value, href }) => (
            <motion.article
              key={title}
              className="contact__option"
              variants={scaleIn}
              whileHover={{ y: -4 }}
            >
              <div className="contact__icon-container">
                <Icon className="contact__icon" />
              </div>
              <h4>{title}</h4>
              <h5>{value}</h5>
              <a href={href} target="_blank" rel="noreferrer">
                {t("contact.sendMessage")}
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={slideFromRight}
          className="contact__form"
        >
          <motion.input
            variants={fadeUp}
            type="text"
            name="name"
            placeholder={t("contact.fullName")}
            required
          />
          <motion.input
            variants={fadeUp}
            type="email"
            name="email"
            placeholder={t("contact.yourEmail")}
            required
          />
          <motion.textarea
            variants={fadeUp}
            name="message"
            rows={7}
            placeholder={t("contact.yourMessage")}
            required
          />
          <motion.button
            type="submit"
            className="btn btn-primary"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("contact.submit")}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUs;
