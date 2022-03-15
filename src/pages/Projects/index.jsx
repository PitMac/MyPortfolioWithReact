import Ecovid from "../../assets/projects/ecovid.webp";
import FreeGames from "../../assets/projects/freegamesapp.webp";
import Anime from "../../assets/projects/animeapp.webp";
import DisneyC from "../../assets/projects/disneyCharacters.webp";
import "./index.css";
import "aos/dist/aos.css";

export default function Projects() {
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
    <div id="Projects">
      <h2 className="subtitle">My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <a
            target="_blank"
            href={project.href}
            data-aos="fade-up"
            key={project.alt}
            className="projectItem"
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
        ))}
      </div>
      <a
        target="_blank"
        href="https://github.com/PitMac"
        className="btn moreProjects"
      >
        More projects...
      </a>
    </div>
  );
}
