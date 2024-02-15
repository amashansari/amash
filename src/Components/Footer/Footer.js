import React from "react";
import './Footer.css'
import contactLogo from "../Asstes/contactLogo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-content d-flex flex-column align-items-center p-5 justify-content-around">
        <div className="footer-top text-center">
          <div className="display-1"> Let's build</div>
          <div className="display-1">
            something <span>cool</span>
          </div>
          <div className="display-1"> together!</div>
        </div>
        <div className="footer-mid">
          <a href="mailto:amashansari74@gmail.com">
            <div className="footer-mid-img">
              <img src={contactLogo} alt="" />
            </div>
          </a>
        </div>
        <div className="footer-end text-center">
          <div className="footer-end-top">
            <p>© 2024 Created by Amash Ansari</p>
          </div>
          <div className="footer-end-bottom">
            <p>All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
