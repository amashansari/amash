import React, { useState } from "react";
import "./Project.css";

const Project = () => {
  const Projects = [
    {
      title1: "CRISFOOD ",
      title2: " DIGIVERSE",
      image: require("../../Asstes/digiverse.png"),
      subtitle: "Associate Front-End ",
      developer: "Developer",
      location: "Mumbai",
      link: "https://www.crisfooddigiverse.com/",
    },
    {
      title1: "GLORY ",
      title2: " SCHOOL",
      image: require("../../Asstes/glory.png"),
      subtitle: "Associate Web ",
      developer: "Developer",
      location: "Mumbai",
      link: "http://www.gloryenglishschool.com/",
    },
    {
      title1: "BHAIJAAN ",
      title2: "DHABA ",
      image: require("../../Asstes/bhaijan.png"),
      subtitle: "Associate Web ",
      developer: "Developer",
      location: "Remote",
      link: "https://www.bhaijaandhaba.in/",
    },
    {
      title1: "MD.ALI ",
      title2: "DHABA ",
      image: require("../../Asstes/mhdali.png"),
      subtitle: "Associate Web ",
      developer: "Developer",
      location: "Mumbai",
      link: "https://mdalidhaba.in/",
    },
    {
      title1: "SILVER FORK ",
      title2: "MADINA  ",
      image: require("../../Asstes/silverfork.png"),
      subtitle: "(Freelance) Web ",
      developer: "Developer",
      location: "Remote",
      link: "ilverforkmadina.com/home/index.html",
    },
  ];
  return (
    <>
      <div className="project-content ">
        <div className="project-content-bottom gap-5 container ">
          <div className="projects">
            {Projects.map((val) => {
              return (
                <div className="project">
                  <div className="projectTitel">
                    <p className="fs-2">
                      {val.title1} <br className="projectBreak" /> {val.title2}
                    </p>
                    <div className="remote d-flex align-items-center gap-1">
                      <hr />
                      <p>{val.location}</p>
                    </div>
                  </div>
                  <div className="project-hover">
                    <img src={val.image} alt="" />
                  </div>
                  <div className="projectSubTitle">
                    <p className="fs-4 text-end">
                      {val.subtitle}
                      <br className="projectBreak" /> {val.developer}
                    </p>
                    <div className="clickView justify-content-end align-items-center gap-1 d">
                      <hr />
                      <a href={val.link} className="text-dark ">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
