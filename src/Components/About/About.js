import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="About__cont">
      <div className="About_Mission_Vision__cont">
        <div className="About__main">
          <div className="About__title">about</div>
          <div className="About__content">
            We are producing a wide variety of <span>souvenir items</span> which
            <br />
            are heart and happy hands crafted suited for all occasions. <br />{" "}
            You can find here high quality of various <span>
              eco-friendly
            </span>{" "}
            <br />
            and <span>personalized</span> products yet <span>affordable</span>.
          </div>
        </div>
      </div>
      <div className="Crafted__cont">
        <div className="Crafted__title">crafted with</div>
        <div className="Crafted__with">
          <div>logos</div>
          <div>logos</div>
          <div>logos</div>
          <div>logos</div>
          <div>logos</div>
          <div>logos</div>
          <div>logos</div>
        </div>
      </div>
    </div>
  );
};

export default About;
