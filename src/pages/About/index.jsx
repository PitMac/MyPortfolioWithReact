import Flutter from "../../assets/skills/flutter.png";
import React from "../../assets/skills/react.png";
import Firebase from "../../assets/skills/firebase.png";
import Node from "../../assets/skills/node.png";
import SQL from "../../assets/skills/sql.png";
import "aos/dist/aos.css";
import "./index.css";

export default function About() {
  const skills = [
    {
      src: React,
      alt: "React",
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
          <h1 className="subtitle">What about me?</h1>
          <p className="aboutMe">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            nemo minus ea saepe ducimus, iure obcaecati temporibus consequuntur
            repudiandae veniam ratione expedita molestiae natus doloribus neque
            dignissimos est vel consequatur!
          </p>
          <h2 className="skillTitle">My Skills:</h2>
          <section className="skillSection">
            {skills.map((skill) => (
              <img
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
