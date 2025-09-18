import Cta from "./components/Cta";
import HeaderSocial from "./components/HeaderSocial";
import ammar from "@Assets/images/carton4.png";
import "./styles/index.css";

const HeaderPage = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ammar Abdulrahman</h1>
        <h5 className="text-light">Software Engineer</h5>
        <Cta />
        <HeaderSocial />

        <div className="me">
          <img src={ammar} />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default HeaderPage;
