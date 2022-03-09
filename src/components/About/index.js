import React from "react";
import "./style.css";

function About() {
  return (
    <div className="about-wrapper">
      <div className="row" id="about-row">
        <div className="col s6">
          <p className="about-text">
            Hello! My name is Kevin and I'm a Full-Stack web developer. I gained
            my education from the{" "}
            <span className="UW">
              University of Washington Coding Bootcamp{" "}
            </span>
            {/* , where I gained experience with HTML5, CSS, Javascript, jQuery,
            Express.js, React.js, Node.js, MongoDB/Mongoose, MySQL. Moving
            forward, I plan to learn and pursue new languages including Python
            and C++, as well as becoming a certified AWS cloud practitioner.
            Coming from a background on the other side of the spectrum (medical
            sciences and entrepreneurship), this program has been quite the
            journey. However, I am excited to continue developing my skills, and
            apply them in the real world. */}
            blah blah blah hi hi hi
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
