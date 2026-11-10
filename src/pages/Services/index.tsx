import "./index.css";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";
import SectionHeader from "@Components/SectionHeader";
import { useTranslation } from "react-i18next";
import { scaleIn, staggerContainer, viewportOnce } from "@Utils/motion";

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.frontend.title"),
      items: t("services.frontend.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.ui.title"),
      items: t("services.ui.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.performance.title"),
      items: t("services.performance.items", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <SectionHeader
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
      />

      <div className="container services__container">
        {services.map((service) => (
          <motion.article
            key={service.title}
            className="service"
            variants={scaleIn}
            whileHover={{ y: -6 }}
          >
            <div className="service__head">
              <h3>{service.title}</h3>
            </div>

            <ul className="service__list">
              {service.items.map((item) => (
                <li key={item}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesPage;
