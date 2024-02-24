import React from "react";
import "./Home.css";
import Homebg from "../../Asstes/homebg.jpg";

const Home = () => {
  return (
    <>
      <div className="home-content">
        <img src={Homebg} alt="" />
        <div className="home-content-text">
          {/* <div className="home-right-left d-flex justify-content-center align-items-center gap-4 px-2">
            <div className="hrb-left ">
              <p className="hrb-left-top text-end">FULLSTACK DVELOPER</p>
              <p className="hrb-left-bottom ">MUMBAI, INDIA</p>
            </div>
            <div className="hrb-right lh-1">
              <p className="hrb-right-top">AMASH</p>
              <p className="hrb-right-middle">MUKHTAR</p>
              <p className="hrb-right-bottom">ANSARI</p>
            </div>
          </div> */}
          <div className="home-text">
            <div className="creative">
              <p>Creative</p>
            </div>
            <div className="designer-developer">
              <div className="designer">
                <p>
                  Designer <span>&</span>
                </p>
              </div>
              <div className="developer">
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
