import React from "react";
import "./style.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="contact-text">Contact</h1>
      <p className="contact-text">
        If you have any questions or thoughts, please feel free to contact me
        at:{" "}
      </p>
      <p className="contact-text">Email: khsieh95@gmail.com</p>
      <p className="contact-text">
        Github:{" "}
        <a href="https://github.com/khsieh95" target="_blank">
          {" "}
          Khsieh95
        </a>
      </p>
      <p className="contact-text">
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/kevinwjhsieh/">KevinHsieh</a>
      </p>
    </div>
  );
}

export default Contact;
