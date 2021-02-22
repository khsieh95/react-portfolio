import React from "react";
import "./style.css";

function Resume() {
  return (
    <div className="container">
      <h2>Resume</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="row" id="resume-row">
        <div className="col s12 ">
          <a
            id="view-resume"
            className="waves-effect waves-light btn instructure_file_link instructure_scribd_file auto_open"
            href="https://github.com/khsieh95/the-portfolio/files/5785350/Kevin-Hsieh-Resume.PDF"
            target="_blank"
          >
            {" "}
            View Resume
            <i className="material-icons right">open_in_new</i>
          </a>

          <a
            id="download-resume"
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
