import Ellipse from "../../assets/Ellipse 1.png";

import "aos/dist/aos.css";
import "./index.css";

export default function Home() {
  return (
    <>
      <img className="ellipse" src={Ellipse} alt="ellipse"></img>
      <div className="home" id="Home">
        <img
          data-aos="fade-down-right"
          className="imgLogo"
          src="https://avatars.githubusercontent.com/u/81378436?v=4"
          alt="Logo"
        ></img>
        <div className="homeSection">
          <section>
            <h1 className="title">
              Hi, I'm <span className="colorText">Jhon PitMac</span>
            </h1>
            <h3 className="subtitle">
              A <span className="colorText">FullStack</span> Developer
            </h3>
            <section className="buttonsSection">
              <a className="btn">CV</a>
              <a
                target="_blank"
                href="https://github.com/PitMac"
                className="btn"
              >
                GITHUB
              </a>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
