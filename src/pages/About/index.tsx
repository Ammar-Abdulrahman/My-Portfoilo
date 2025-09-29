// import { FaAward } from "react-icons/fa";
// import { HiUsers } from "react-icons/hi2";
// import { AiFillProject } from "react-icons/ai";
import "./index.css";
import ammar from "@Assets/images/carton6.png";
import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me.image">
            <img src={ammar} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/* <div className="about__icon-container">
                <FaAward className="about__icon" />
              </div> */}
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              {/* <div className="about__icon-container">
                <HiUsers className="about__icon" />
              </div> */}
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className="about__card">
              {/* <div className="about__icon-container">
                <AiFillProject className="about__icon" />
              </div> */}
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Detail-oriented Front End Engineer dedicated to building seamless
            digital experiences through clean code and innovative solutions.
            With a solid foundation in software engineering principles and
            hands-on experience across multiple frameworks, I bring both
            technical excellence and creative problem-solving to every project.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default index;
