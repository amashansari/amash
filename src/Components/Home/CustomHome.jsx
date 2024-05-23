import React from "react";
import { Container } from "react-bootstrap";
import "./CustomHome.css"
import Helloimg from "../Assets/Group.svg";

const CustomHome = () => {
  return (
    <>
      <Container>
        <div className="landingContainer">
          <div className="landing">
            <div className="landing-text">
              <div className="landing-heading fs-3">
               <p> <span className="Helloimg"><img src={Helloimg} alt="" /></span>
                , I'm Amash Ansari, A Well-Versed Web Developer and...<br></br></p>
              </div>
              <div className="landing-subheading display-1">
                committed in crafting<br></br>unique, exceptional<br></br>digital experiences.
              </div>
            </div>
          </div>
          <div className="radial"></div>
        </div>
      </Container>
    </>
  );
};

export default CustomHome;
