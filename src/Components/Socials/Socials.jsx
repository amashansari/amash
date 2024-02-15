import React from "react";
import Linkdin from "../Asstes/Linkdin.svg";
import Github from "../Asstes/Github.svg";
import Twiter from "../Asstes/Twiter.svg";

const Socials = () => {
  return (
    <>
      <div className="social ">
        <div className="socialwritten fs-5 fst-italic text-secondary pb-3 border-bottom border-secondary">
          Socials
        </div>
        <div className="social-link d-flex gap-3 p-3">
          <div className="linkdin">
            <img src={Linkdin} alt="Open menu" />
          </div>
          <div className="github">
            <img src={Github} alt="Open menu" />
          </div>
          <div className="twitter">
            <img src={Twiter} alt="Open menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
