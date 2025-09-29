import MyCv from "@Assets/files/Ammar Abdulrahman Resume.pdf";
import ammar from "@Assets/images/carton6.png";
import "./index.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const BannerPage = () => {
  return (
    <div className="bg-transparent lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-6 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold sm:text-5xl text-[#4db5ff]">
            Ammar Abdulrahman
          </h1>

          <h2 className="p-2 text-gray-400">
            Software Engineer | Front end Engineer
          </h2>
          <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed">
            Software Engineer with{" "}
            <span className="text-[#4db5ff]">2 years experience</span> in
            front-end development, high level of adaptability, commitment ,
            passion to learn new things and improve my skills
          </p>

          <div className="cta">
            <a className="btn" href={MyCv} download>
              Download Cv
            </a>
            <a className="btn btn-primary" href="#contact">
              Let's Talk
            </a>
          </div>

          <div className="header__social_banner">
            <a
              href="https://www.linkedin.com/in/ammar-abdulrahman/ "
              target="_blank"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Ammar-Abdulrahman" target="_blank">
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006471773863"
              target="_blank"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/ammar__abdulrahman/"
              target="_blank"
            >
              <FiInstagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/+963964793913" target="_blank">
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a href="https://t.me/Ammar_Abdulrahman" target="_blank">
              <FaTelegramPlane className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="banner">
          <div className="image">
            <img src={ammar} alt="Ammar" />
          </div>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="shapeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="var(--color-bg-varient)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#shapeGradient)"
              d="M39.4,-30.9C55.9,-22.8,77.6,-11.4,81,3.4C84.3,18.2,69.5,36.4,52.9,42C36.4,47.6,18.2,40.5,-1.3,41.8C-20.8,43.1,-41.5,52.7,-51.2,47.1C-60.9,41.5,-59.5,20.8,-54.2,5.3C-48.9,-10.2,-39.8,-20.4,-30.1,-28.5C-20.4,-36.5,-10.2,-42.3,0.6,-42.9C11.4,-43.5,22.8,-38.9,39.4,-30.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
