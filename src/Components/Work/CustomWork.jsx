import React, { useEffect } from "react";
import "./CustomWork.css";
import Phone1 from "../Assets/phone-01.png";
import Phone2 from "../Assets/phone-02.png";
import { Container } from "react-bootstrap";

import Digiverse from "../Assets/digiverse.png";
import Silverfork from "../Assets/silverfork.png";
import Arris from "../Assets/ariss.png";
import Unity from "../Assets/unity.png";
import Md from "../Assets/md.png";
import Firewings from "../Assets/firewings.png";

const CustomWork = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElement = document.querySelectorAll(".hidden");
    hiddenElement.forEach((el) => observer.observe(el));
    return () => {
      hiddenElement.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <Container>
        <div className="main-work-container">
          <div className="work-top-container w-100 d-flex justify-content-center">
            <div className="worktop d-flex">
              <div className="phone1">
                <img src={Phone1} alt="" />
              </div>
              <div className="phone2">
                <img src={Phone2} alt="" />
              </div>
            </div>
          </div>
          <div className="work-bottom-container">
            <div className="main-bottom">
              <div className="work-bottom-top">
                <div className="imgDiv">
                  <a
                    href="https://www.crisfooddigiverse.com/"
                    className=" d-flex flex-column align-items-center"
                  >
                    <div className="digi CustoomBoxShadow hidden">
                      <img src={Digiverse} alt="" />
                    </div>
                    <div className="aboutWorkImg">
                      <div className="aboutwitop">Crisfood Digiverse</div>
                      <div className="aboutwibottom">
                        Elevate your brand in the digital landscape. Strategic
                        solutions tailored to your goals. Experience the power
                        of Digiverse Marketing today.
                      </div>
                    </div>
                  </a>
                </div>
                <div className="imgDiv">
                  <a
                    href="silverforkmadina.com/home/index.html"
                    className=" d-flex flex-column align-items-center"
                  >
                    <div className="silver CustoomBoxShadow hidden">
                      <img src={Silverfork} alt="" />
                    </div>
                    <div className="aboutWorkImg">
                      <div className="aboutwitop">Silver Fork Madina</div>
                      <div className="aboutwibottom">
                        "Indulge in culinary elegance at Silver Fork: where each
                        dish is crafted with passion, promising a delightful
                        dining experience."
                      </div>
                    </div>
                  </a>
                </div>
                <div className="imgDiv">
                  <a
                    href="https://unityconstruction.in/"
                    className=" d-flex flex-column align-items-center"
                  >
                    <div className="unity CustoomBoxShadow hidden">
                      <img src={Unity} alt="" />
                    </div>
                    <div className="aboutWorkImg">
                      <div className="aboutwitop">Unity Construction</div>
                      <div className="aboutwibottom">
                        "Unity Construction: Building Dreams Together. Expertise
                        in residential, commercial, and industrial projects.
                        Quality craftsmanship, reliability, and client
                        satisfaction guaranteed."
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bottom-bottom">
                <div className="imgDiv">
                  <a
                    href="https://indiafirewings.com/"
                    className=" d-flex flex-column align-items-center"
                  >
                    <div className="fire CustoomBoxShadow hidden">
                      <img src={Firewings} alt="" />
                    </div>
                    <div className="aboutWorkImg">
                      <div className="aboutwitop">Fire Wings</div>
                      <div className="aboutwibottom">
                        Fire Wings' website showcases a diverse menu of wings
                        with unique flavors, specials, locations, and online
                        ordering for convenience.
                      </div>
                    </div>
                  </a>
                </div>
                <div className="imgDiv">
                  <a
                    href="https://www.ariss.io/"
                    className=" d-flex flex-column align-items-center"
                  >
                    <div className="arris CustoomBoxShadow hidden">
                      <img src={Arris} alt="" />
                    </div>
                    <div className="aboutWorkImg">
                      <div className="aboutwitop">Ariss Automation</div>
                      <div className="aboutwibottom">
                        "Revolutionize productivity with Ariss: cutting-edge
                        automation solutions for streamlined operations,
                        optimized efficiency, and unparalleled innovation.
                        Explore limitless possibilities today."
                      </div>
                    </div>
                  </a>
                </div>
                <div className="imgDiv">
                  <a
                    href="https://mdalidhaba.in/"
                    className=" d-flex flex-column align-items-center"
                  >
                    <div className="md CustoomBoxShadow hidden">
                      <img src={Md} alt="" />
                    </div>
                    <div className="aboutWorkImg">
                      <div className="aboutwitop">Md. Ali Dhaba</div>
                      <div className="aboutwibottom">
                        Md. Ali Dhaba is a popular eatery known for its
                        authentic, delicious Mughlai cuisine and vibrant,
                        welcoming atmosphere.
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-2">
              <div className="bottom-work-text">
                Works Done, Click to visit..
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CustomWork;
