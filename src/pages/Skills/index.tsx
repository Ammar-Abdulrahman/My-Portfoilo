import { TbPointFilled } from "react-icons/tb";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiCssdesignawards } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { IoGitBranch } from "react-icons/io5";
import { SiHyperskill } from "react-icons/si";
import "./index.css";
import { motion } from "framer-motion";
import SectionHeader from "@Components/SectionHeader";
import { useTranslation } from "react-i18next";
import { scaleIn, staggerContainer, viewportOnce } from "@Utils/motion";
import type { IconType } from "react-icons";

type SkillGroup = {
  icon: IconType;
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    icon: MdOutlineDeveloperMode,
    title: "Frontend Development",
    items: ["React Js", "Next Js", "Typescript", "Html/Css/Javascript", "Vue Js"],
  },
  {
    icon: SiCssdesignawards,
    title: "UI Libraries & Styling",
    items: [
      "Material UI",
      "Ant Design",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    icon: RiReactjsLine,
    title: "React Ecosystem",
    items: [
      "Redux",
      "Zustand",
      "React Query",
      "React Router",
      "Formik",
      "React Hook Form",
    ],
  },
  {
    icon: IoGitBranch,
    title: "Version Control",
    items: ["Git", "Github", "Gitlab", "CI/CD Pipelines"],
  },
  {
    icon: MdManageAccounts,
    title: "Project Management",
    items: ["Azure", "Jira", "YouTrack", "Slack"],
  },
  {
    icon: SiHyperskill,
    title: "Soft Skills",
    items: [
      "Clean code and architecture",
      "Problem solving",
      "Team work",
      "Communication",
    ],
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <SectionHeader eyebrow={t("skills.eyebrow")} title={t("skills.title")} />

      <div className="container skills__container">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              className="skills__backend"
              variants={scaleIn}
              whileHover={{ y: -6 }}
            >
              <div className="skills__icon-container">
                <Icon className="skills__icon" />
              </div>
              <h3>{group.title}</h3>
              <div className="skills__content">
                {group.items.map((item) => (
                  <article key={item} className="skills__details">
                    <TbPointFilled className="skills__details-icon" />
                    <div>
                      <h4>{item}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
