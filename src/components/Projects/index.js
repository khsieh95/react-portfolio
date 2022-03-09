import React from "react";
import "./style.css";

function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>
      <br></br>

      <div className="row" id="project-card">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://user-images.githubusercontent.com/74025123/103579954-264f8400-4e8e-11eb-91d7-90470546696b.png"></img>
              <span className="card-title">Project 1: Shake n' Date</span>
            </div>
            <div className="card-content">
              <p>
                After learning HTML5, CSS, and Javascript basics, this was the
                first group project where we had to impliment AJAX functions,
                creating a "suggested date" application that is practical during
                Covid.
              </p>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://khsieh95.github.io/shake-and-date/"
                target="_blank"
              >
                Deployment Link
              </a>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://github.com/khsieh95/shake-and-date"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://user-images.githubusercontent.com/74025123/107096768-4c837f00-67c0-11eb-95dc-df61481b907b.png"></img>
              <span className="card-title">Project 2: MemoryBank</span>
            </div>
            <div className="card-content">
              <p>
                Implimented multiple new technologies (cloudinary, bcryption,
                MySQL) for project 2, creating our first Fullstack application
                with full CRUD functionality. Receive your daily horoscope, and
                journal freely!
              </p>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://memorybank2021.herokuapp.com/"
                target="_blank"
              >
                Deployment Link
              </a>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://github.com/khsieh95/memoryBank"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="screenshot/litzia"></img>
              <span className="card-title">Project 3: Litzia</span>
            </div>
            <div className="card-content">
              <p>
                This card will be for project 3, which is currently a work in
                progress.
              </p>
            </div>
            <div className="card-action">
              <a className="hyperlink" href="#" target="_blank">
                Deployment Link
              </a>
            </div>
            <div className="card-action">
              <a className="hyperlink" href="#" target="_blank">
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="project-card">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://user-images.githubusercontent.com/74025123/108641332-abe5be00-7453-11eb-86d4-b19e761089e2.png"></img>
              <span className="card-title card-font">Employee Directory</span>
            </div>
            <div className="card-content">
              <p>
                The employee directory was the first react application that we
                created. The user is able to view all employees and sort them
                via first/last name alphabetically and search for individual
                users.
              </p>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://kh-employee-directory.herokuapp.com/"
                target="_blank"
              >
                Deployment Link
              </a>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://github.com/khsieh95/react-employee-directory"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://user-images.githubusercontent.com/74025123/108641256-2cf08580-7453-11eb-88ca-6c26eb84270e.png"></img>
              <span className="card-title card-font">Budget Tracker</span>
            </div>
            <div className="card-content">
              <p>
                The user is able to keep track of his/her balance. The
                responsive graph shows the user's plus-minus spread depending on
                how much money they gained vs loss. Pratical for everyone
                everyday.
              </p>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://kh-budget-tracker.herokuapp.com/"
                target="_blank"
              >
                Deployment Link
              </a>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://github.com/khsieh95/goat_budget_tracker"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://user-images.githubusercontent.com/74025123/108641131-7f7d7200-7452-11eb-9a4d-930b4e115fb8.png"></img>
              <span className="card-title card-font">Weather Dashboard</span>
            </div>
            <div className="card-content">
              <p>
                The significance of this assignment was that, I understood and
                felt up to speed with javascript. I was able to call multiple
                API's and pull the information I needed correctly.
              </p>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://khsieh95.github.io/weather-dashboard/"
                target="_blank"
              >
                Deployment Link
              </a>
            </div>
            <div className="card-action">
              <a
                className="hyperlink"
                href="https://github.com/khsieh95/weather-dashboard"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
