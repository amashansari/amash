import React from "react";
import "./CustomFooter.css";
import { Col, Container, Row } from "react-bootstrap";
import LiinkdinImg from "../Assets/Linkdin.svg";
import TwitterImg from "../Assets/Twiter.svg";
import InstagramImg from "../Assets/instagram.svg";
import EmailImg from "../Assets/email.svg";

const CustomFooter = () => {
  return (
    <>
      <Container>
        <div id="footer" className="main-footer-container">
          <div className="footer-top mb-5 display-4">
            Ready to enhance your business with a visually engaging and
            empathetic style?
          </div>
          <div className="footer-mid mb-5 display-4">
            Let's make it happen✨
          </div>
          <div className="start-button mb-5">
            <a
              href="mailto: amashansari74@gmail.com"
              className="text-light text-decoration-none"
            >
              Start a project
            </a>
          </div>
          <div className="hr bg-secondary"></div>
          <div className="socials">
            <Row>
              <Col lg={6}>
                <div className="socials-left">
                  <div className="connect mt-5 mb-3">Connect</div>
                  <div className="emailid">
                    <a
                      href="mailto: amashansari74@gmail.com"
                      className="text-dark text-decoration-none"
                    >
                      amashansari74@gmail.com
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="socials-right">
                  <div className="socials-links gap-3">
                    <div className="linkdin">
                      <a href="https://www.linkedin.com/in/amash-ansari-368415263">
                        <img src={LiinkdinImg} alt="" />
                      </a>
                    </div>
                    <div className="twitter">
                      <a href="https://x.com/AmashAnsari6?t=P4ihW_Oy4qFt2EdL5xLfPg&s=09">
                        <img src={TwitterImg} alt="" />
                      </a>
                    </div>
                    <div className="instagram">
                      <a href="https://www.instagram.com/_amashh_?igsh=Nm12bDhoeXkyeDJh">
                        <img src={InstagramImg} alt="" />
                      </a>
                    </div>
                    <div className="email">
                      <a href="mailto: amashansari74@gmail.com">
                        <img src={EmailImg} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CustomFooter;
