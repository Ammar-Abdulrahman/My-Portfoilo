import { TbPointFilled } from "react-icons/tb";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiCssdesignawards } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
//import { FaCode } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { VscSourceControl } from "react-icons/vsc";
import { SiHyperskill } from "react-icons/si";

import "./index.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true}}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__backend">
          <div className="skills__icon-container">
            <MdOutlineDeveloperMode className="skills__icon" />
          </div>
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>React Js</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Html/Css/Javascript</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Vue Js</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <div className="skills__icon-container">
            <SiCssdesignawards className="skills__icon" />
          </div>
          <h3>UI Libraries & Styling</h3>
          <div className="skills__content">
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4> Material ui</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Ant design</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Tailwind css</h4>
              </div>
            </article>

            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Framer-motion</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <div className="skills__icon-container">
            <RiReactjsLine className="skills__icon" />
          </div>
          <h3>React Ecosystem</h3>
          <div className="skills__content">
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Zustand</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>React-query</h4>
              </div>
            </article>

            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>React-Router-dom</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Formik</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>React-hook-form</h4>
              </div>
            </article>
          </div>
        </div>
        {/*Backend skills*/}
        {/* <div className="skills__backend">
          <div className="skills__icon-container">
            <FaCode className="skills__icon" />
          </div>
          <h3>Programming</h3>
          <div className="skills__content">
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Php</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>C++</h4>
              </div>
            </article>
          </div>
        </div> */}

        <div className="skills__backend">
          <div className="skills__icon-container">
            <VscSourceControl className="skills__icon" />
          </div>
          <h3>Version Control</h3>
          <div className="skills__content">
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Github</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Gitlab</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>CI/CD Pipelines</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <div className="skills__icon-container">
            <MdManageAccounts className="skills__icon" />
          </div>
          <h3>Project Management</h3>

          <div className="skills__content">
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Azure</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Jira</h4>
              </div>
            </article>

            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>YouTrack</h4>
              </div>
            </article>

            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Slack</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <div className="skills__icon-container">
            <SiHyperskill className="skills__icon" />
          </div>
          <h3> Soft Skills</h3>
          <div className="skills__content">
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Clean code and architecture</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Problem solving</h4>
              </div>
            </article>
            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Team work</h4>
              </div>
            </article>

            <article className="skills__details">
              <TbPointFilled className="skills__details-icon" />
              <div>
                <h4>Communication</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
