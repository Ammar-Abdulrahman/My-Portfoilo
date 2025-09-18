import "./index.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    //const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailtoLink = `mailto:ammarabdulrahmman@gmail.com?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`${message}\n`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="skills__icon-container">
              <MdOutlineEmail className="skills__icon" />
            </div>
            <h4>Email</h4>
            <h5>ammarabdulrahmman@gmail.com</h5>
            <a href="mailto:ammarabdulrahmman@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <div className="skills__icon-container">
              <FaTelegramPlane className="skills__icon" />
            </div>
            <h4>Telegram</h4>
            <h5>Ammar Abdulrahman</h5>
            <a href="https://t.me/Ammar_Abdulrahman" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <div className="contact__icon-container">
              <BsWhatsapp className="contact__icon" />
            </div>
            <h4>Whatsapp</h4>
            <h5>+963 964 793 913</h5>
            <a
              href="https://api.whatsapp.com/send?phone+963964793913"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/*End of contact options*/}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
