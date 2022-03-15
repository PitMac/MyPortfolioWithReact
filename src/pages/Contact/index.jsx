import "./index.css";
export default function Contact({ copyEmail }) {
  return (
    <div id="Contact">
      <hr />
      <section className="contact">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jhon-pita-macias-64362b217/"
          className="contactItem"
        >
          <i className="fa-brands fa-linkedin-in fa-2x"></i>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/jhondavid.pitamacias.7"
          className="contactItem"
        >
          <i className="fa-brands fa-facebook-f fa-2x"></i>
        </a>
        <button
          onClick={copyEmail}
          href="https://github.com/PitMac"
          className="contactItem"
        >
          <i className="fa-solid fa-at fa-2x"></i>
        </button>
        <a
          target="_blank"
          href="https://github.com/PitMac"
          className="contactItem"
        >
          <i className="fa-brands fa-telegram fa-2x"></i>
        </a>
        <a
          target="_blank"
          href="https://wa.link/nibap6"
          className="contactItem"
        >
          <i className="fa-brands fa-whatsapp fa-2x"></i>
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCJSIzpSUsxZYyJoHxYk_hLA"
          className="contactItem"
        >
          <i className="fa-brands fa-youtube fa-2x"></i>
        </a>
      </section>
    </div>
  );
}
