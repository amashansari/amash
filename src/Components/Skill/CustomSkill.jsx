import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CustomSkill.css";

import ReactJs from "../Assets/ReactJs.svg";
import Next from "../Assets/NextJs.svg";
import Express from "../Assets/express.svg";
import Html from "../Assets/Html.svg";
import Js from "../Assets/Js.svg";
import Bootstrap from "../Assets/bootstrap.svg";
import Tailwind from "../Assets/tailwind.svg";
import Node from "../Assets/NodeJs.svg";
import Jquery from "../Assets/jquery.svg";

const Box = ({ id, initialTransform, children }) => {
  return (
    <div className="small-box" id={id} style={{ transform: initialTransform }}>
      {children}
    </div>
  );
};

const CustomSkill = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".small-box");
    const mainBox = document.querySelector(".main-box");
    const mainBoxRect = mainBox.getBoundingClientRect();
    const boxSize = 50; // Size of the small box

    function getRandomPosition() {
      const x = Math.random() * (mainBoxRect.width - boxSize);
      const y = Math.random() * (mainBoxRect.height - boxSize);
      return { x, y };
    }

    function setInitialPosition(box) {
      const { x, y } = getRandomPosition();
      box.style.transform = `translate(${x}px, ${y}px)`;
    }

    function createKeyframes(box) {
      const keyframes = [];
      for (let i = 0; i <= 100; i += 5) {
        const { x, y } = getRandomPosition();
        keyframes.push(`${i}% { transform: translate(${x}px, ${y}px); }`);
      }
      return `@keyframes move-${box.id} { ${keyframes.join(" ")} }`;
    }

    function applyAnimation(box) {
      const keyframes = createKeyframes(box);
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      box.style.animation = `move-${box.id} 20s infinite alternate ease-in-out`; // Slower animation
    }

    boxes.forEach((box) => {
      setInitialPosition(box);
      applyAnimation(box);
    });
  }, []);

  return (
    <>
      <Container>
        <div className="main-skill-container">
          <div className="skill-top fs-2 pb-5">
            <p>
              what I have <br /> to say about me..
            </p>
          </div>
          <Row>
            <Col lg={7}>
              <div className="skill-left">
                <div className="skill-left-top">
                  <div className="top-black">
                    <p className="display-5">Services</p>
                  </div>
                  <div className="top-gray">
                    <p className="display-5">Cheap is expensive</p>
                  </div>
                </div>
                <div className="skill-left-bottom fs-4">
                  <p>
                    Help in building a powerful website "E-Commerce" or
                    "Informational" with clean design. Unlike big agencies, work
                    with a creative director one-on-one and collaborate to craft
                    a uniqueproject from start to finish.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="skill-right">
                <div className="skill-right-top mb-4">
                  <div className="bottom-head fs-4">
                    <p>Expertise: </p>
                  </div>
                </div>
                <div className="skill-right-bottom">
                  <div class="main-box">
                    <div class="small-box" id="box1">
                      <img src={ReactJs} alt="ReactJs" />
                    </div>
                    <div class="small-box" id="box2">
                      <img src={Next} alt="NextJs" />
                    </div>
                    <div class="small-box" id="box3">
                      <img src={Node} alt="NodeJs" />
                    </div>
                    <div class="small-box" id="box4">
                      <img src={Express} alt="Express" />
                    </div>
                    <div class="small-box" id="box5">
                      <img src={Html} alt="Html" />
                    </div>
                    <div class="small-box" id="box6">
                      <img src={Bootstrap} alt="Bootstrap" />
                    </div>
                    <div class="small-box" id="box7">
                      <img src={Js} alt="Js" />
                    </div>
                    <div class="small-box" id="box8">
                      <img src={Tailwind} alt="Tailwind" />
                    </div>
                    <div class="small-box" id="box9">
                      <img src={Jquery} alt="Jquery" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default CustomSkill;
