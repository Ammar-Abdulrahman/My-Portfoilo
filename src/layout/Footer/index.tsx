import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./index.css";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ammar Abdulrahman
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/ammar-abdulrahman/ "
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.github.com/ammar-abdulrahman/ "
          target="_blank"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006471773863"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/ammar__abdulrahman/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://t.me/Ammar_Abdulrahman" target="_blank">
          <FaTelegramPlane />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ammar Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
