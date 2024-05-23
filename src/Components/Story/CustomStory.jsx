import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CustomStory.css";
import MyPhotoImg from "../Assets/photo.jpeg";

const CustomStory = () => {
  return (
    <>
      <Container>
        <div className="main-story-container gap-5">
          <Row>
            <Col lg={4}>
              <Col lg={12}>
                <div className="main-story-container-left mb-5">
                  <div className="story-left-top">
                    <p className="display-5">Chronicle</p>
                  </div>
                  <div className="story-left-bottom">
                    <p className="display-5">Present → Past.</p>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="my-photo-main">
                  <div className="main-myphoto">
                    <div className="myPhoto">
                      <img src={MyPhotoImg} alt="" />
                    </div>
                    <div className="myPhoto-text">
                      <p>Visca Barca ♡</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Col>
            <Col lg={8}>
              <div className="main-story-container-right">
                <div className="right-content-one mb-5">
                  <p className="para">
                    Hey there! 👋 I'm a React JS Frontend Developer currently
                    rocking it at Crisfood Online LLP since 2023. With a knack
                    for creating eye-catching websites, I love teaming up with
                    designers and developers to craft sites that pop. My toolbox
                    includes ReactJS, Express, NodeJS, MySQL, and I'm a pro at
                    integrating REST APIs and optimizing for SEO.
                  </p>
                </div>
                <div className="right-content-two mb-5">
                  <p className="para">
                    I team up with founders to spin captivating tales and craft
                    unforgettable digital experiences. Together, we make their
                    products stand out, connect deeply with users, and draw in
                    those sought-after investors. Let's create some magic! ✨
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <div className="hr"></div> */}
      </Container>
    </>
  );
};

export default CustomStory;
