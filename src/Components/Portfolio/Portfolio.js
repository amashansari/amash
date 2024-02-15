import React from "react";
import About from "../Pages/About/About";
import Project from "../Pages/Project/Project";
import Skill from "../Pages/Skill/Skill";
import Preloader from "../Pages/Preloader/Preloader";
import Home from "../Pages/Home/Home";

const Portfolio = () => {
  return (
    <>
      <Preloader />
      <div className="portfolio">
        <div className="home-component ">
          <Home />
        </div>
        <div className="about-component">
          <About />
        </div>
        <div className="project-component">
          <Project />
        </div>
        <div className="skill-component">
          <Skill />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
