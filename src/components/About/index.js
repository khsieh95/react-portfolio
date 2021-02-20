import React from "react";
import "./style.css";

function About() {
  return (
    <div>
      <div className="row">
        <div className="col s6">
          <p>
            Hello! My name is Kevin and I'm an excited Full-Stack web developer.
            I gained my education from the{" "}
            <span className="UW">
              University of Washington Coding Bootcamp{" "}
            </span>
            , where I gained experience with HTML5, CSS, Javascript, jQuery,
            Express.js, React.js, Node.js, MongoDB/Mongoose, MySQL. I plan to
            get learn and pursue new languages including Python and C++. Coming
            from a background on the other side of the spectrum (medical
            sciences and entrepreneurship), this program has been quite the
            journey. However, I am excited to continue developing my new skills,
            and applying them the real world.
          </p>
        </div>
        <div className="col s6">
          <img
            className="image"
            src="https://user-images.githubusercontent.com/74025123/108609401-7e7d0f80-7382-11eb-81e8-7eff38da784c.JPG"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
