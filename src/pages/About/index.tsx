import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { AiFillProject } from "react-icons/ai";
import "./index.css";
import ammar from "@Assets/images/carton4.png";

const index = () => {
  return (
    <section id="about">
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
              <div className="about__icon">
                <FaAward />
              </div>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <div className="about__icon">
                <HiUsers />
              </div>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <div className="about__icon">
                <AiFillProject />
              </div>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Software Engineer with 2 years experience in front-end development,
            high level of adaptability, commitment and passion to learn new
            things and improve my skills
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
