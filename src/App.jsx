import { useEffect } from "react";
import Ellipse from "./assets/Ellipse 1.png";
import "./App.css";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import AOS from "aos";

function App() {
  const copyEmail = () => {
    var copyText = "jhondavidpitapita@hotmail.com";
    document.querySelector(".alert").classList.toggle("showAlert");
    navigator.clipboard.writeText(copyText);
    setTimeout(() => {
      document.querySelector(".alert").classList.remove("showAlert");
    }, 3000);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <img className="ellipse" src={Ellipse} alt="ellipse"></img>
      <div className="alert">
        <h3>Copied Email</h3>
      </div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact copyEmail={copyEmail} />
    </>
  );
}

export default App;
