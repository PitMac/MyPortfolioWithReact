import "./index.css";
import "aos/dist/aos.css";
import ProjectItem from "../../components/ProjectItem";

export default function Projects() {
  return (
    <div id="Projects">
      <h2 className="subtitle">
        <span className="colorText">My Projects</span>
      </h2>
      <ProjectItem />
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
