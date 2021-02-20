import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
