import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row" id="footer-row">
          <div className="col l6 s12 footer-link">
            <a href="#about">Back to Top</a>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Social Media</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.linkedin.com/in/kevinwjhsieh/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/khsieh95"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.instagram.com/k.hsieh/"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.facebook.com/kwhsieh95/"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
