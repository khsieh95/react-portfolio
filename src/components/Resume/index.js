import React from "react";
import "./style.css";
<<<<<<< HEAD
import resume from "../files/Kevin-Hsieh-Tech-Resume.pdf";
=======
import resume from "../files/Khsieh.pdf";
>>>>>>> 0eb26c1375d35ebc51d48fbb76515608ac74cd48

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
            className="waves-effect waves-light btn "
            href={resume}
            target="_blank"
          >
            {" "}
            View Resume
            <i className="material-icons right">open_in_new</i>
          </a>

          <a
            id="download-resume"
            className="waves-effect waves-light btn"
            href={resume}
            download="Kevin-Hsieh-Tech-Resume.pdf"
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
