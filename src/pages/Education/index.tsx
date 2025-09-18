import "./index.css";
import universityLogo from "@Assets/images/damscus-removebg-preview.png"; // You'll need to add your actual logo
import { RiGraduationCapFill } from "react-icons/ri";


const Experience = () => {
  return (
    <section id="education" className="education__section">
      <h5>My academic journey in software engineering</h5>
      <h2>My Education</h2>

      <div className="container education__container">
        {/* Timeline connector line */}
        <div className="education__timeline-connector"></div>

        <div className="education__card">
          {/* Timeline dot */}
          <div className="education__timeline-dot">
            <RiGraduationCapFill />
          </div>

          <div className="education__header">
            <img
              src={universityLogo}
              alt="Damascus University Logo"
              className="education__logo"
            />
            <div className="education__title-container">
              <h3 className="education__institution">
                Faculty of Information Technology Engineering
              </h3>
              <p className="education__specialization">
                Specialized in Software Engineering
              </p>
            </div>
          </div>

          <div className="education__details">
            <div className="education__timeline">
              <svg
                className="education__icon"
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
              <span>Sep 2019 – Sep 2024</span>
            </div>

            <div className="education__location">
              <svg
                className="education__icon"
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
              <span>Damascus, Syria</span>
            </div>
          </div>

          <div className="education__courses">
            <h4>Relevant Coursework:</h4>
            <div className="education__course-list">
              <span className="education__course-pill">Algorithm</span>
              <span className="education__course-pill">Data Structures</span>
              <span className="education__course-pill">
                Software Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
