import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Hamburger from "../Asstes/hamburger.svg";

import Cross from "../Asstes/cross.svg";
import Socials from "../Socials/Socials";
import LogoName from "../Asstes/logo-name.png";

const Navbar = () => {
  const [menuPopped, setMenuPopped] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70 && !show) {
        setMenuPopped(true);
      } else {
        setMenuPopped(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="navbar-component">
        <div className="navbar-content d-flex justify-content-center p-4">
          <div className="nav-logo">
            <img src={LogoName} alt="" />
          </div>
          {/* <div className="nav-content d-flex gap-2">
            <div className="nav-about">about,</div>
            <div className="nav-project">works</div>
          </div> */}
          <div
            className={`menu-circle pop ${menuPopped || show ? "poped" : ""}`}
          >
            <div className="rounded-circle py-2 px-2" onClick={handleMenu}>
              {show ? (
                <img src={Cross} alt="Close menu" />
              ) : (
                <img src={Hamburger} alt="Open menu" />
              )}
            </div>
          </div>
        </div>
        {show && (
          <div className="menu" id="menu">
            <div className="fs-5 border-bottom border-secondary fst-italic text-secondary pb-3">
              Navigation
            </div>
            <ul className="textNavigation py-5">
              <li className="display-1">
                <a href="/amash">Home</a>
              </li>
              <li className="display-1">
                <a href="/amash/aboutWork">
                  About <span className="and display-6">&</span> <br /> Work
                </a>
              </li>
              <li className="display-1">
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <Socials />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
