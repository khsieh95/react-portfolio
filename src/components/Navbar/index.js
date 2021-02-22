import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar-fixed" id="about">
      <nav>
        <div className="nav-wrapper">
          <a href="#about" className="brand-logo nav-text">
            Kevin Hsieh
          </a>
          <ul className="right hide-on-med-and-down nav-text">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
