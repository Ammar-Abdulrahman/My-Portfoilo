import "./index.css";
import presentlyLogo from "@Assets/images/presently.jpg";
import LogicDevLogo from "@Assets/images/logic.jpg";
import TabTabGoLogo from "@Assets/images/tabtabgo.png";
import FreeLancerLogo from "@Assets/images/freelancer.png";

import { PiBuildingOfficeBold } from "react-icons/pi";

const Experience = () => {
  return (
    <section id="experience" className="experience__section">
      <h5>My experience journey in software engineering</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Timeline connector line */}
        <div className="experience__timeline-connector"></div>

        <div className="experience__card">
          {/* Timeline dot */}
          <div className="experience__timeline-dot">
            <PiBuildingOfficeBold />
          </div>

          <div className="experience__header">
            <img
              src={presentlyLogo}
              alt="Damascus University Logo"
              className="experience__logo"
            />
            <div className="experience__title-container">
              <h3 className="experience__institution">
                Presently - Creative Agency
              </h3>
              <p className="experience__specialization">
                Freelance React Developer
              </p>
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
              <span>Aug 2025 – Present</span>
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
              <span>Damascus, Syria</span>
            </div>
          </div>

          <div className="experience__courses">
            <h4>Relevant Coursework:</h4>
            <div className="experience__course-list">
              <span className="experience__course-pill">
                ● Designed and implemented reusable UI components to ensure
                consistency across the application.
              </span>
              <span className="experience__course-pill">
                ● Developed responsive user interfaces using React to enhance
                the overall user experience.
              </span>
              <span className="experience__course-pill">
                ● Actively participated in meetings, and retrospectives to
                ensure timely delivery of features
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container experience__container">
        {/* Timeline connector line */}
        <div className="experience__timeline-connector"></div>

        <div className="experience__card">
          {/* Timeline dot */}
          <div className="experience__timeline-dot">
            <PiBuildingOfficeBold />
          </div>

          <div className="experience__header">
            <img
              src={LogicDevLogo}
              alt="Damascus University Logo"
              className="experience__logo"
            />
            <div className="experience__title-container">
              <h3 className="experience__institution">Logic Development</h3>
              <p className="experience__specialization">React Developer</p>
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
              <span>Mar 2024 – Jul 2024</span>
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
              <span>Damascus, Syria</span>
            </div>
          </div>

          <div className="experience__courses">
            <h4>Relevant Coursework:</h4>
            <div className="experience__course-list">
              <span className="experience__course-pill">
                ● Designed and implemented reusable UI components to ensure
                consistency across the application.
              </span>
              <span className="experience__course-pill">
                ● Integrated RESTful APIs to fetch and display dynamic content
                in React applications.
              </span>
              <span className="experience__course-pill">
                ● Implemented state management using Zustand for efficient data
                flow within the application.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container experience__container">
        {/* Timeline connector line */}
        <div className="experience__timeline-connector"></div>

        <div className="experience__card">
          {/* Timeline dot */}
          <div className="experience__timeline-dot">
            <PiBuildingOfficeBold />
          </div>

          <div className="experience__header">
            <img
              src={TabTabGoLogo}
              alt="Damascus University Logo"
              className="experience__logo"
            />
            <div className="experience__title-container">
              <h3 className="experience__institution">TabTabGo</h3>
              <p className="experience__specialization">Software Developer</p>
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
              <span>Feb 2024 – Sep 2024</span>
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
              <span>Dubai, UAE</span>
            </div>
          </div>

          <div className="experience__courses">
            <h4>Relevant Coursework:</h4>
            <div className="experience__course-list">
              <span className="experience__course-pill">
                ● Developed responsive user interfaces using React to enhance
                the overall user experience.{" "}
              </span>
              <span className="experience__course-pill">
                ● Collaborated with a team of developers to create and maintain
                web applications using React components
              </span>
              <span className="experience__course-pill">
                ● Integrated RESTful APIs to fetch and display dynamic content
                in React applications.
              </span>
              <span className="experience__course-pill">
                ● Actively participated in sprint planning, stand-up meetings,
                and retrospectives to ensure timely delivery of features
              </span>
              <span className="experience__course-pill">
                ● Conducted code reviews to identify and fix complained issues.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container experience__container">
        {/* Timeline connector line */}
        <div className="experience__timeline-connector"></div>

        <div className="experience__card">
          {/* Timeline dot */}
          <div className="experience__timeline-dot">
            <PiBuildingOfficeBold />
          </div>

          <div className="experience__header">
            <img
              src={FreeLancerLogo}
              alt="Damascus University Logo"
              className="experience__logo"
            />
            <div className="experience__title-container">
              <h3 className="experience__institution">FreeLance</h3>
              <p className="experience__specialization">Software Developer</p>
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
              <span>May 2023 – Aug 2023</span>
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
              <span>Damascus, Syria</span>
            </div>
          </div>

          <div className="experience__courses">
            <h4>Relevant Coursework:</h4>
            <div className="experience__course-list">
              <span className="experience__course-pill">
                ● Designed and implemented reusable UI components to ensure
                consistency across the application.
              </span>
              <span className="experience__course-pill">
                ● Implemented state management using Redux for efficient data
                flow within the application.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
