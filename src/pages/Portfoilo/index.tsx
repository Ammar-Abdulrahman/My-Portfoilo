import "./index.css";
import QrmtsCover from "@Assets/projects/qrmts.png";
import BgareCover from "@Assets/projects/bgare.png";

import ECommerceCover from "@Assets/projects/e-commerce.png";
import UniversityCover from "@Assets/projects/universirty1.png";

import BolignetCover from "@Assets/projects/bolignet.png";
import XboxCover from "@Assets/projects/xbox.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={QrmtsCover} alt="" />
          </div>
          <h3>Qrmts</h3>
          <p className="text-gray-300 text-[14px]">
            A platform specializing in creating dynamic and static QR codes,
            aimed at small and medium-sized businesses and large enterprises. It
            enables users to create customizable QR codes, with the ability to
            track performance and analyze data, contributing to enhanced digital
            engagement and customer experience.{" "}
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://qrmts.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="h-48" src={BgareCover} alt="" />
          </div>
          <h3>Bgare</h3>
          <p className="text-gray-300 text-[14px]">
            Dashboard for Bgare app , that it is a specialized application
            designed for trade guidance, advertising, and showcasing new offers
            in the Kurdistan Region and Iraq. It serves as a valuable resource
            for individuals seeking to explore commercial opportunities and
            promotions. Additionally, the app assists users in locating specific
            addresses and discovering the latest job openings in a user-friendly
            manner.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://apps.apple.com/us/app/bgare/id1470053760"
              className="btn btn-primary"
              target="_blank"
            >
              Apple app
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BolignetCover} alt="" />
          </div>
          <h3>Bolignet</h3>
          <p className="text-gray-300 text-[14px]">
            Danish service provider specializing in delivering high-speed fiber
            internet, TV, and mobile subscriptions to housing associations and
            private customers across Denmark. The platform offers tailored
            internet solutions for residential communities, allowing users to
            manage their subscriptions, monitor network status, and purchase
            additional services via a dedicated mobile app.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://bolignet.dk"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={XboxCover} alt="" />
          </div>
          <h3>Booking Central</h3>
          <p className="text-gray-300 text-[14px]">
            The SecurePay Orchestra Admin Portal is a management system designed
            to handle payment orchestration, service administration, and
            transaction monitoring. It provides administrators with a
            centralized platform to configure, manage, and oversee various
            payment services and integrations.
          </p>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ECommerceCover} alt="" />
          </div>
          <h3>Doctor House</h3>
          <p className="text-gray-300 text-[14px]">
            E-commerce Dashboard for dental students used for management where
            the administrator can manage users, their permissions, products,
            categories, advertisements, discounts, orders, follow-up and
            statistics.
          </p>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ammar-Abdulrahman/doctor-house"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://doctor-house-rho.vercel.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={UniversityCover} alt="" />
          </div>
          <h3>University Dashboard</h3>
          <p className="text-gray-300 text-[14px]">
            Dashboard Organizing and automating work in the Faculty of Dentistry
            used for Manage where admin can manage students, supervisors,
            teachers, specialties, subjects, chairs, subjects cards, download
            patient information, manage teacher, subject and class appointments
            and statistics
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://university-dentist-dashboard-i5du.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
