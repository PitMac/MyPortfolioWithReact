import "./index.css";
import Ecovid from "../../assets/projects/ecovid.webp";
import FreeGames from "../../assets/projects/freegamesapp.webp";
import Anime from "../../assets/projects/animeapp.webp";
import DisneyC from "../../assets/projects/disneyCharacters.webp";

export default function ProjectItem() {
  const projects = [
    {
      href: "https://github.com/PitMac/DisneyCharacters-React",
      src: DisneyC,
      alt: "Disney Characters",
    },
    {
      href: "https://github.com/PitMac/ECovid-App-Flutter",
      src: Ecovid,
      alt: "Ecovid App",
    },
    {
      href: "https://github.com/PitMac/ECovid-App-Flutter",
      src: Ecovid,
      alt: "Other Project",
    },
    {
      href: "https://github.com/PitMac/FreeGame-App-RN",
      src: FreeGames,
      alt: "FreeGamesApp",
    },
    {
      href: "https://github.com/PitMac/ECovid-App-Flutter",
      src: Ecovid,
      alt: "Disney Charactes",
    },
    {
      href: "https://github.com/PitMac/Anime-App-Flutter",
      src: Anime,
      alt: "AnimeApp",
    },
  ];
  return (
    <ul className="projects">
      {projects.map((project) => (
        <li>
          <a
            className="projectItem"
            target="_blank"
            href={project.href}
            data-aos="fade-up"
            key={project.alt}
          >
            <img
              className="projectImg"
              decoding="async"
              loading="lazy"
              src={project.src}
              alt={project.alt}
            ></img>
            <br />
            <h2>{project.alt}</h2>
          </a>
        </li>
      ))}
    </ul>
  );
}
