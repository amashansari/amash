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
          <div className="start-button mb-5">Start a project</div>
          <div className="hr bg-secondary"></div>
          <div className="socials">
            <Row>
              <Col lg={6}>
                <div className="socials-left">
                  <div className="connect mt-5 mb-3">Connect</div>
                  <div className="emailid">amashansari74@gmail.com</div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="socials-right">
                  <div className="socials-links gap-3">
                    <div className="linkdin">
                      <img src={LiinkdinImg} alt="" />
                    </div>
                    <div className="twitter">
                      <img src={TwitterImg} alt="" />
                    </div>
                    <div className="instagram">
                      <img src={InstagramImg} alt="" />
                    </div>
                    <div className="email">
                      <img src={EmailImg} alt="" />
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
