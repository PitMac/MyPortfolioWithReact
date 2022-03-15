import Flutter from "../../assets/skills/flutter.webp";
import React from "../../assets/skills/react.webp";
import Firebase from "../../assets/skills/firebase.webp";
import Node from "../../assets/skills/node.webp";
import SQL from "../../assets/skills/sql.webp";
import "aos/dist/aos.css";
import "./index.css";

export default function About() {
  const skills = [
    {
      src: React,
      alt: "React & React Native",
    },
    {
      src: Flutter,
      alt: "Flutter",
    },
    {
      src: Node,
      alt: "Node",
    },
    {
      src: Firebase,
      alt: "Firebase",
    },
    {
      src: SQL,
      alt: "SQL",
    },
  ];

  return (
    <div id="About">
      <div className="about">
        <section className="aboutSection">
          <h1 className="subtitle">
            <span className="colorText">About me</span>
          </h1>
          <p className="aboutMe">
            ✔️ My name is{" "}
            <span className="colorText">Jhon David Pita Macias</span>. I am a
            web developer and mobile development lover 📲. I have worked on my
            own projects with{" "}
            <span className="colorText">ReactJS, Flutter, and NodeJS</span>. I
            am also prepared to learn{" "}
            <span className="colorText">new technologies</span> without any
            problem 👾. My favorite hobbies are listening to{" "}
            <span className="colorText">music</span> 🎶 and playing{" "}
            <span className="colorText">videogames</span> 🎮.
          </p>
          <h2 className="skillTitle">
            <span className="colorText"> My Skills:</span>
          </h2>
          <section className="skillSection">
            {skills.map((skill) => (
              <img
                title={skill.alt}
                key={skill.alt}
                className="skillImg"
                src={skill.src}
                alt={skill.alt}
              ></img>
            ))}
          </section>
        </section>
        <img
          data-aos="fade-right"
          className="imgLogo2"
          src="https://avatars.githubusercontent.com/u/81378436?v=4"
          alt="Logo"
        ></img>
      </div>
    </div>
  );
}
