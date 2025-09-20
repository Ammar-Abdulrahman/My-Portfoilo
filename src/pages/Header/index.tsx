import { motion } from "framer-motion";
import Cta from "./components/Cta";
import HeaderSocial from "./components/HeaderSocial";
import ammar from "@Assets/images/carton4.png";
import "./styles/index.css";

const HeaderPage = () => {
  const name = "Ammar Abdulrahman";
  const nameArray = name.split("");

  return (
    <header>
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello I'm
        </motion.h5>

        <h1 className="animated-name">
          {nameArray.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 200,
                delay: 0.5 + index * 0.12,
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <h5 className="text-light">Software Engineer</h5>
        <Cta />
        <HeaderSocial />

        <div className="me">
          <img src={ammar} alt="Ammar Abdulrahman" />
        </div>

        <motion.a
          initial={{ y: -800, opacity: 0, rotate: 90 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 4, delay: 0.1 }}
          href="#contact"
          className="scroll__down"
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  );
};

export default HeaderPage;
