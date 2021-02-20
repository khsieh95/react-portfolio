import React from "react";
import "./style.css";

function Resume() {
  return (
    <div className="container">
      <h2>Resume</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col s6 m6 l6">
          <a
            className="waves-effect waves-light btn"
            href="https://github.com/khsieh95/the-portfolio/files/5785350/Kevin-Hsieh-Resume.PDF"
            target="_blank"
          >
            {" "}
            View Resume
            <i className="material-icons right">open_in_new</i>
          </a>
        </div>
        <div className="col s6 m6 l6">
          <a
            className="waves-effect waves-light btn"
            href="https://github.com/khsieh95/the-portfolio/files/5785350/Kevin-Hsieh-Resume.PDF"
            download
          >
            Download Resume
            <i className="material-icons right">file_download</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
