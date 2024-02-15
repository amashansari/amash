import React, { useEffect } from "react";
import './Skill.css'
import NodeLogo from "../../Asstes/NodeJs.svg";
import NextLogo from "../../Asstes/NextJs.svg";
import HtmlLogo from "../../Asstes/Html.svg";
import ReactJsLogo from "../../Asstes/ReactJs.svg";
import JsLogo from "../../Asstes/Js.svg";
import TsLogo from "../../Asstes/Ts.svg";
import ExpressLogo from "../../Asstes/express.svg";
import BootstrapLogo from "../../Asstes/bootstrap.svg";
import TailwindLogo from "../../Asstes/tailwind.svg";
import JqueryLogo from "../../Asstes/jquery.svg";

const Skill = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-skill");
        } else {
          entry.target.classList.remove("show-skill");
        }
      });
    });
    const hiddenElementLeft = document.querySelectorAll(".hidden-skill-left");
    const hiddenElementRight = document.querySelectorAll(".hidden-skill-right");
    hiddenElementLeft.forEach((el) => observer.observe(el));
    hiddenElementRight.forEach((el) => observer.observe(el));
    return () => {
      hiddenElementLeft.forEach((el) => observer.unobserve(el));
      hiddenElementRight.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <div className="skill-content d-flex justify-content-center p-5">
        <div className="skill-left d-flex flex-column gap-5 hidden-skill-left ">
          <div className="skill1 ">
            <img className="drop-skill" src={NodeLogo} alt="" />
          </div>
          <div className="skill2">
            <img src={NextLogo} alt="" />
          </div>
          <div className="skill3">
            <img src={HtmlLogo} alt="" />
          </div>
          <div className="skill4">
            <img src={ReactJsLogo} alt="" />
          </div>
          <div className="skill5">
            <img src={JsLogo} alt="" />
          </div>
        </div>
        <div className="skill-mid display-1 text-center d-flex flex-column justify-content-center">
          <p className="top">My</p>
          <p className="mid">Amazing</p>
          <p className="bottom">Skills</p>
        </div>
        <div className="skill-right d-flex flex-column gap-5 hidden-skill-right">
          <div className="skill6">
            <img src={TsLogo} alt="" />
          </div>
          <div className="skill7">
            <img src={ExpressLogo} alt="" />
          </div>
          <div className="skill8">
            <img src={BootstrapLogo} alt="" />
          </div>
          <div className="skill9">
            <img src={TailwindLogo} alt="" />
          </div>
          <div className="skill10">
            <img src={JqueryLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
