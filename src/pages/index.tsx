import Navbar from "@Layout/Navbar";
import HeaderPage from "./Header";
import About from "./About";
import Skills from "./Skills";
// import ServicesPage from "./Services";
import Portfolio from "./Portfoilo";
// import Testimonials from "./Testimonials";
import ContactUs from "./Contact";
import Footer from "@Layout/Footer";
import EducationSection from "./Education";
import Experience from "./Experience";

const MainPage = () => {
  return (
    <>
      <HeaderPage />
      <Navbar />
      <About />
      <EducationSection />
      <Experience />
      <Skills />
      {/* <ServicesPage /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainPage;
