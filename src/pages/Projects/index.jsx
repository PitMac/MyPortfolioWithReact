import Ecovid from "../../assets/projects/ecovid.png";
import FreeGames from "../../assets/projects/freegamesapp.png";
import Anime from "../../assets/projects/animeapp.png";
import DisneyC from "../../assets/projects/disneyCharacters.png";
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
      <br></br>
      <br></br>
      <h2 className="subtitles reverse">My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <section data-aos="fade-up" key={project.alt} className="projectItem">
            <a target="_blank" href={project.href}>
              <img
                className="projectImg"
                decoding="async"
                loading="lazy"
                src={project.src}
                alt={project.alt}
              ></img>
            </a>
            <h2>{project.alt}</h2>
          </section>
        ))}
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
