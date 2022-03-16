import "aos/dist/aos.css";
import "./index.css";
import SkillItem from "../../components/SkillItem";

export default function About() {
  return (
    <div id="About" className="about">
      <section className="aboutSection">
        <h1 className="subtitle ab">
          <span className="colorText">About me</span>
        </h1>
        <p className="aboutMe">
          ✔️ My name is{" "}
          <span className="colorText">Jhon David Pita Macias</span>. I am a web
          developer and mobile development lover 📲. I have worked on my own
          projects with <span className="colorText">ReactJS</span>,{" "}
          <span className="colorText">Flutter</span>,{" "}
          <span className="colorText">Svelte</span>, and{" "}
          <span className="colorText">NodeJS</span>. I am also prepared to learn{" "}
          <span className="colorText">new technologies</span> without any
          problem 👾. My favorite hobbies are listening to{" "}
          <span className="colorText">music</span> 🎶 and playing{" "}
          <span className="colorText">videogames</span> 🎮.
        </p>
        <h2 className="skillTitle">My Skills:</h2>
        <SkillItem />
      </section>
      <img
        data-aos="fade-right"
        className="imgLogo2"
        src="https://avatars.githubusercontent.com/u/81378436?v=4"
        alt="Logo"
      ></img>
    </div>
  );
}
