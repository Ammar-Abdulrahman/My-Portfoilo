import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/ammar-abdulrahman/ " target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ammar-Abdulrahman" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
