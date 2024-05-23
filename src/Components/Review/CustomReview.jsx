import React from "react";
import "./CustomReview.css";
import { Container } from "react-bootstrap";
import UserImg from "../Assets/user.svg";
import DigiImg from "../Assets/digi.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const CustomReview = () => {
  return (
    <>
      <Container>
        <div className="main-review-container">
          <div className="review-top fs-2">
            <p>
              what people have <br /> to say about me..
            </p>
          </div>
          <div className="review-bottom">
            <div className="review review1">
              <div className="review-inside-top d-flex align-items-center gap-3">
                <div className="inside-top-img rounded-circle bg-white ">
                  <img src={UserImg} alt="" />
                </div>
                <div className="inside-top-text">
                  <div className="top-name fs-5 fw-bold">Aquib Kuwari</div>
                  <div className="top-designation fs-6 fw-bold text-secondary">
                    Senior Full Stack Developer
                  </div>
                </div>
              </div>
              <div className="review-inside-mid fs-6 fw-medium">
                Renowned for crafting pioneering web solutions, Amash Ansari
                seamlessly integrates profound technical acumen with strategic
                foresight. Meticulous attention to detail, coupled with a
                steadfast commitment to remaining at the vanguard of industry
                advancements, guarantees that projects remain at the forefront
                of innovation.
              </div>
              <div className="review-inside-bottom d-flex justify-content-center align-items-center gap-3">
                <div className="inside-bottom-left">
                  <img src={DigiImg} alt="" />
                </div>
                <div className="inside-bottom-right fs-6 fw-bold text-secondary">
                  Crisfood Digiverse
                </div>
              </div>
            </div>
            <div className="review review2">
              <div className="review-inside-top d-flex align-items-center gap-3">
                <div className="inside-top-img rounded-circle bg-white ">
                  <img src={UserImg} alt="" />
                </div>
                <div className="inside-top-text">
                  <div className="top-name fs-5 fw-bold">Rameez Khan</div>
                  <div className="top-designation fs-6 fw-bold text-secondary">
                    Jr. Front-End Developer
                  </div>
                </div>
              </div>
              <div className="review-inside-mid fs-6 fw-medium">
                Amash Ansari seamlessly blends technical prowess with
                collaborative finesse, adeptly navigating HTML, CSS, JavaScript,
                and frameworks like React and Express. Their commitment to
                clean, efficient code and proactive problem-solving makes them
                an invaluable asset to any team.
              </div>
              <div className="review-inside-bottom d-flex justify-content-center align-items-center gap-3">
                <div className="inside-bottom-left">
                  <img src={DigiImg} alt="" />
                </div>
                <div className="inside-bottom-right fs-6 fw-bold text-secondary">
                  Crisfood Digiverse
                </div>
              </div>
            </div>
            <div className="review review3">
              <div className="review-inside-top d-flex align-items-center gap-3">
                <div className="inside-top-img rounded-circle bg-white ">
                  <img src={UserImg} alt="" />
                </div>
                <div className="inside-top-text">
                  <div className="top-name fs-5 fw-bold">Salman Shaikh</div>
                  <div className="top-designation fs-6 fw-bold text-secondary">
                    Senior Front-End Developer
                  </div>
                </div>
              </div>
              <div className="review-inside-mid fs-6 fw-medium">
                Known for consistently delivering innovative web solutions,
                Amash Ansari seamlessly blends deep technical knowledge with
                strategic foresight. Their meticulous attention to detail and
                unwavering dedication to staying ahead of industry trends ensure
                that projects are not only cutting-edge but also future-proof
                and ahead of the curve.
              </div>
              <div className="review-inside-bottom d-flex justify-content-center align-items-center gap-3">
                <div className="inside-bottom-left">
                  <img src={DigiImg} alt="" />
                </div>
                <div className="inside-bottom-right fs-6 fw-bold text-secondary">
                  Crisfood Digiverse
                </div>
              </div>
            </div>
          </div>
          <div className="mobileReview">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="review review1">
                  <div className="review-inside-top d-flex align-items-center gap-3">
                    <div className="inside-top-img rounded-circle bg-white ">
                      <img src={UserImg} alt="" />
                    </div>
                    <div className="inside-top-text">
                      <div className="top-name fs-5 fw-bold">Aquib Kuwari</div>
                      <div className="top-designation fs-6 fw-bold text-secondary">
                        Senior Full Stack Developer
                      </div>
                    </div>
                  </div>
                  <div className="review-inside-mid fs-6 fw-medium">
                    Renowned for crafting pioneering web solutions, Amash Ansari
                    seamlessly integrates profound technical acumen with
                    strategic foresight. Meticulous attention to detail, coupled
                    with a steadfast commitment to remaining at the vanguard of
                    industry advancements, guarantees that projects remain at
                    the forefront of innovation.
                  </div>
                  <div className="review-inside-bottom d-flex justify-content-center align-items-center gap-3">
                    <div className="inside-bottom-left">
                      <img src={DigiImg} alt="" />
                    </div>
                    <div className="inside-bottom-right fs-6 fw-bold text-secondary">
                      Crisfood Digiverse
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review review2">
                  <div className="review-inside-top d-flex align-items-center gap-3">
                    <div className="inside-top-img rounded-circle bg-white ">
                      <img src={UserImg} alt="" />
                    </div>
                    <div className="inside-top-text">
                      <div className="top-name fs-5 fw-bold">Rameez Khan</div>
                      <div className="top-designation fs-6 fw-bold text-secondary">
                        Jr. Front-End Developer
                      </div>
                    </div>
                  </div>
                  <div className="review-inside-mid fs-6 fw-medium">
                    Amash Ansari seamlessly blends technical prowess with
                    collaborative finesse, adeptly navigating HTML, CSS,
                    JavaScript, and frameworks like React and Express. Their
                    commitment to clean, efficient code and proactive
                    problem-solving makes them an invaluable asset to any team.
                  </div>
                  <div className="review-inside-bottom d-flex justify-content-center align-items-center gap-3">
                    <div className="inside-bottom-left">
                      <img src={DigiImg} alt="" />
                    </div>
                    <div className="inside-bottom-right fs-6 fw-bold text-secondary">
                      Crisfood Digiverse
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review review3">
                  <div className="review-inside-top d-flex align-items-center gap-3">
                    <div className="inside-top-img rounded-circle bg-white ">
                      <img src={UserImg} alt="" />
                    </div>
                    <div className="inside-top-text">
                      <div className="top-name fs-5 fw-bold">Salman Shaikh</div>
                      <div className="top-designation fs-6 fw-bold text-secondary">
                        Senior Front-End Developer
                      </div>
                    </div>
                  </div>
                  <div className="review-inside-mid fs-6 fw-medium">
                    Known for consistently delivering innovative web solutions,
                    Amash Ansari seamlessly blends deep technical knowledge with
                    strategic foresight. Their meticulous attention to detail
                    and unwavering dedication to staying ahead of industry
                    trends ensure that projects are not only cutting-edge but
                    also future-proof and ahead of the curve.
                  </div>
                  <div className="review-inside-bottom d-flex justify-content-center align-items-center gap-3">
                    <div className="inside-bottom-left">
                      <img src={DigiImg} alt="" />
                    </div>
                    <div className="inside-bottom-right fs-6 fw-bold text-secondary">
                      Crisfood Digiverse
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CustomReview;
