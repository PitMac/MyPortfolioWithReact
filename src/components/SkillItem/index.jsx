import Flutter from "../../assets/skills/flutter.svg";
import React from "../../assets/skills/react.svg";
import Node from "../../assets/skills/node.svg";
import SQL from "../../assets/skills/sql.svg";
import GIT from "../../assets/skills/git.svg";
import Svelte from "../../assets/skills/svelte.svg";
import "./index.css";

export default function SkillItem() {
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
      src: Svelte,
      alt: "Svelte",
    },
    {
      src: Node,
      alt: "Node",
    },
    {
      src: SQL,
      alt: "SQL",
    },
    {
      src: GIT,
      alt: "Git",
    },
  ];

  return (
    <ul className="skillSection">
      {skills.map((skill) => (
        <li key={skill.alt} className="skillItem">
          <img
            title={skill.alt}
            className="skillImg"
            src={skill.src}
            alt={skill.alt}
          ></img>
          <p className="skillName">{skill.alt}</p>
        </li>
      ))}
    </ul>
  );
}
