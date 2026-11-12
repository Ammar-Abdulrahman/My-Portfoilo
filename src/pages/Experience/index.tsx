import "./index.css";
import flychamLogo from "@Assets/images/flycham.png";
import presentlyLogo from "@Assets/images/presently.jpg";
import LogicDevLogo from "@Assets/images/logic.jpg";
import TabTabGoLogo from "@Assets/images/tabtabgo.png";
import FreeLancerLogo from "@Assets/images/freelancer.png";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
} from "react-icons/tb";
import { motion } from "framer-motion";
import SectionHeader from "@Components/SectionHeader";
import { useTranslation } from "react-i18next";
import { scaleIn, staggerContainer, viewportOnce } from "@Utils/motion";
import type { IconType } from "react-icons";

type ExperienceItem = {
  icon: IconType;
  logo: string;
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  stack?: string[];
};

const experiences: ExperienceItem[] = [
  {
    icon: TbCircleNumber1Filled,
    logo: flychamLogo,
    company: "Fly Cham",
    role: "Front End Developer",
    period: "Oct 2025 – Present",
    location: "On-site",
    points: [
      "Building and enhancing the Fly Cham airline website with a focus on booking flows, deals presentation, and responsive UI.",
      "Developing the careers portal experience, including job search, department exploration, and polished candidate-facing screens.",
      "Collaborating on-site with product and design to ship production-ready frontend features with consistent branding.",
    ],
    stack: ["React", "TypeScript", "Responsive UI", "REST APIs"],
  },
  {
    icon: TbCircleNumber2Filled,
    logo: presentlyLogo,
    company: "Presently - Creative Agency",
    role: "Freelance React Developer",
    period: "Aug 2025 – Sep 2025",
    location: "Damascus, Syria",
    points: [
      "Designed and implemented reusable UI components to ensure consistency across the application.",
      "Developed responsive user interfaces using React to enhance the overall user experience.",
      "Actively participated in meetings and retrospectives to ensure timely delivery of features.",
    ],
  },
  {
    icon: TbCircleNumber3Filled,
    logo: LogicDevLogo,
    company: "Logic Development",
    role: "React Developer",
    period: "Mar 2025 – Jul 2025",
    location: "Damascus, Syria",
    points: [
      "Designed and implemented reusable UI components to ensure consistency across the application.",
      "Integrated RESTful APIs to fetch and display dynamic content in React applications.",
      "Implemented state management using Zustand for efficient data flow within the application.",
    ],
    stack: [
      "React",
      "React Query",
      "Zustand",
      "Material UI",
      "Ant Design",
      "Slack",
    ],
  },
  {
    icon: TbCircleNumber4Filled,
    logo: TabTabGoLogo,
    company: "TabTabGo",
    role: "Software Developer",
    period: "Feb 2024 – Sep 2024",
    location: "Dubai, UAE",
    points: [
      "Developed responsive user interfaces using React to enhance the overall user experience.",
      "Collaborated with a team of developers to create and maintain web applications using React components.",
      "Integrated RESTful APIs to fetch and display dynamic content in React applications.",
      "Actively participated in sprint planning, stand-up meetings, and retrospectives.",
      "Conducted code reviews to identify and fix issues.",
    ],
    stack: [
      "React",
      "React Native",
      "Redux Toolkit",
      "Material UI",
      "Azure",
      "CI/CD",
      "Clockify",
    ],
  },
  {
    icon: TbCircleNumber5Filled,
    logo: FreeLancerLogo,
    company: "Freelance",
    role: "Software Developer",
    period: "May 2023 – Aug 2023",
    location: "Damascus, Syria",
    points: [
      "Designed and implemented reusable UI components to ensure consistency across the application.",
      "Implemented state management using Redux for efficient data flow within the application.",
    ],
  },
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="experience"
      className="experience__section"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <SectionHeader
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
      />

      <div className="container experience__list">
        <div className="experience__spine" aria-hidden="true" />

        {experiences.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.company + item.period}
              className="experience__card"
              variants={scaleIn}
              whileHover={{ y: -4 }}
            >
              <div className="experience__timeline-dot">
                <Icon className="w-5 h-5" />
              </div>

              <div className="experience__header">
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="experience__logo"
                />
                <div className="experience__title-container">
                  <h3 className="experience__institution">{item.company}</h3>
                  <p className="experience__specialization">{item.role}</p>
                </div>
              </div>

              <div className="experience__details">
                <div className="experience__timeline">
                  <svg
                    className="experience__icon"
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
                  <span>{item.period}</span>
                </div>

                <div className="experience__location">
                  <svg
                    className="experience__icon"
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
                  <span>{item.location}</span>
                </div>
              </div>

              <ul className="experience__points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {item.stack && (
                <div className="experience__course-list">
                  {item.stack.map((tech) => (
                    <span key={tech} className="experience__key-work">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Experience;
