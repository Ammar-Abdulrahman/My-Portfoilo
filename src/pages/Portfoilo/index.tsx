import "./index.css";
import QrmtsCover from "@Assets/projects/qrmts.png";
import BgareCover from "@Assets/projects/bgare.png";
import ECommerceCover from "@Assets/projects/e-commerce.png";
import UniversityCover from "@Assets/projects/universirty1.png";
import BolignetCover from "@Assets/projects/bolignet.png";
import XboxCover from "@Assets/projects/xbox.png";
import { motion } from "framer-motion";
import SectionHeader from "@Components/SectionHeader";
import { useTranslation } from "react-i18next";
import { scaleIn, staggerContainer, viewportOnce } from "@Utils/motion";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: QrmtsCover,
      title: "Qrmts",
      description:
        "A platform specializing in creating dynamic and static QR codes for businesses of all sizes — with customization, performance tracking, and analytics to boost digital engagement.",
      links: [
        { label: t("projects.liveDemo"), href: "https://qrmts.com", primary: true },
      ],
    },
    {
      image: BgareCover,
      title: "Bgare",
      description:
        "Dashboard for the Bgare app — a trade guidance and offers platform for the Kurdistan Region and Iraq, helping users discover promotions, addresses, and job openings.",
      links: [
        {
          label: t("projects.appleApp"),
          href: "https://apps.apple.com/us/app/bgare/id1470053760",
          primary: true,
        },
      ],
    },
    {
      image: BolignetCover,
      title: "Bolignet",
      description:
        "Danish service provider for high-speed fiber internet, TV, and mobile subscriptions — enabling users to manage plans, monitor network status, and buy add-ons.",
      links: [
        {
          label: t("projects.liveDemo"),
          href: "https://bolignet.dk",
          primary: true,
        },
      ],
    },
    {
      image: XboxCover,
      title: "Booking Central",
      description:
        "SecurePay Orchestra Admin Portal for payment orchestration, service administration, and transaction monitoring across integrated payment services.",
      links: [],
    },
    {
      image: ECommerceCover,
      title: "Doctor House",
      description:
        "E-commerce dashboard for dental students — managing users, permissions, products, categories, ads, discounts, orders, and statistics.",
      links: [
        {
          label: t("projects.github"),
          href: "https://github.com/Ammar-Abdulrahman/doctor-house",
          primary: false,
        },
        {
          label: t("projects.liveDemo"),
          href: "https://doctor-house-rho.vercel.app",
          primary: true,
        },
      ],
    },
    {
      image: UniversityCover,
      title: "University Dashboard",
      description:
        "Dashboard for organizing and automating work in the Faculty of Dentistry — managing students, supervisors, specialties, schedules, and statistics.",
      links: [
        {
          label: t("projects.liveDemo"),
          href: "https://university-dentist-dashboard-i5du.vercel.app/",
          primary: true,
        },
      ],
    },
  ];

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
      />

      <div className="container portfolio__container">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="portfolio__item"
            variants={scaleIn}
            whileHover={{ y: -6 }}
          >
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.links.length > 0 && (
              <div className="portfolio__item-cta">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={link.primary ? "btn btn-primary" : "btn"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
