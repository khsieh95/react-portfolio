import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Kevin Hsieh
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">About</a>
            </li>
            <li>
              <a href="badges.html">Projects</a>
            </li>
            <li>
              <a href="badges.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
