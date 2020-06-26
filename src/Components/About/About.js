import React from "react";
import "./About.css";

import logo1 from "./img/nike.png";

const About = () => {
  return (
    <div id="about" className="About__cont">
      <div className="About__main">
        <div className="About__title">about</div>
        <div className="About__contents">
          <div>wide variety of souvenir items</div>
          <div>heart and happy hands crafted</div>
          <div>high quality and personalized products </div>
          <div>DTI &nbsp;REGISTERED - EST 2018</div>
        </div>
      </div>
      <div className="MissionVision__cont">
        <div className="Mission__cont">
          <div className="Mission__title">mission</div>
          <div className="Mission_content">
            encourage people <br />
            to make the switch into <br />
            the green side to help <br />
            our one and only planet
          </div>
        </div>
        <div className="Vision__cont">
          <div className="Vision__title">vision</div>
          <div className="Vision_content">
            spread eco-friendly <br />
            souvenirs with a <br />
            personalized touch <br />
            globally
          </div>
        </div>
      </div>
      <div className="Crafted__cont">
        <div className="Crafted__title">crafted with</div>
        <div className="Logo__cont">
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
          <div className="Logo__box">
            <img src={logo1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
