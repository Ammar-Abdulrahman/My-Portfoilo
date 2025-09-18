import "./index.css";
import imagee from "@Assets/images/avatar.png"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container test__container">
        <article className="test">
          <div className="client__avatar">
            <img src={imagee} />
          </div>
          <h5 className="client__name">Ernast Archiever</h5>
          <small className="client__review">
            Lorem ipsum dolor ipsum dolor sit amet consectetur elit ipsum dolor
            sit amet consectetur elit ipsum dolor sit amet consectetur elit
            ipsum dolor sit amet consectetur elit ipsum dolor sit amet
            consectetur elit.
          </small>
        </article>

        <article className="test">
          <div className="client__avatar">
            <img src={imagee} />
          </div>
          <h5 className="client__name">Ernast Archiever</h5>
          <small className="client__review">
            Lorem ipsum dolor ipsum dolor sit amet consectetur elit ipsum dolor
            sit amet consectetur elit ipsum dolor sit amet consectetur elit
            ipsum dolor sit amet consectetur elit ipsum dolor sit amet
            consectetur elit.
          </small>
        </article>

        <article className="test">
          <div className="client__avatar">
            <img src={imagee} />
          </div>
          <h5 className="client__name">Ernast Archiever</h5>
          <small className="client__review">
            Lorem ipsum dolor ipsum dolor sit amet consectetur elit ipsum dolor
            sit amet consectetur elit ipsum dolor sit amet consectetur elit
            ipsum dolor sit amet consectetur elit ipsum dolor sit amet
            consectetur elit.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
