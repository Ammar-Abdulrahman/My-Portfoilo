import MyCv from "@Assets/files/Ammar Abdulrahman Resume.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a className="btn" href={MyCv} download>
        Download Cv
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
