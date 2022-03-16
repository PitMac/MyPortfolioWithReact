import { useState } from "react";
import "./index.css";

export default function NavBar() {
  const [navButton, setNavButton] = useState(false);

  const handleNav = () => {
    const $ = (selector) => document.querySelector(selector);
    if (!navButton) {
      $(".menu").classList.toggle("show");
      setNavButton(true);
    } else {
      $(".menu").classList.toggle("show");
      setNavButton(false);
    }
  };

  return (
    <>
      <nav className="menu">
        <ul className="menuNav">
          <li className="navItem">
            <a className="menuItem" href="#Home">
              Home
            </a>
          </li>
          <li className="navItem">
            <a className="menuItem" href="#About">
              About
            </a>
          </li>
          <li className="navItem">
            <a className="menuItem" href="#Projects">
              Projects
            </a>
          </li>
          <li className="navItem">
            <a className="menuItem" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={handleNav} className="hiddeMenu">
        {navButton ? (
          <i id="menuHide" className="fa-solid fa-xmark"></i>
        ) : (
          <i id="menuHide" className="fa-solid fa-bars"></i>
        )}
      </button>
    </>
  );
}
