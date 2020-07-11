import React from "react";
import "./About.css";

import partner1 from "./img/1-pru.jpg";
import partner2 from "./img/2-second-shot.jpg";
import partner3 from "./img/3-bbx.jpg";
import partner4 from "./img/4-victoria.jpg";
import partner5 from "./img/5-earth-sky.jpg";
import partner6 from "./img/6-connected.jpg";
import partner7 from "./img/7-ceu.jpg";
import partner8 from "./img/8-mhpro.jpg";
import partner9 from "./img/9-defense-armed.jpg";
import partner10 from "./img/10-anti.jpg";
import partner11 from "./img/11-hukbong-dagat.jpg";
import partner12 from "./img/12-hukbong-himpapawid.jpg";
import partner13 from "./img/13-naval.jpg";
import partner14 from "./img/14-katihan.jpg";
import partner15 from "./img/15-city-of-candon.jpg";
import partner16 from "./img/16-mason.jpg";
import partner17 from "./img/17-farm.jpg";
import partner18 from "./img/18-cathing.jpg";

const partnerGallery = [
  { id: 1, image: partner1, name: "pru.jpg" },
  { id: 2, image: partner2, name: "second-shot" },
  { id: 3, image: partner3, name: "bbx" },
  { id: 4, image: partner4, name: "victoria" },
  { id: 5, image: partner5, name: "earth-sky" },
  { id: 6, image: partner6, name: "connected" },
  { id: 7, image: partner7, name: "ceu" },
  { id: 8, image: partner8, name: "mhpro" },
  { id: 9, image: partner9, name: "defense-armed" },
  { id: 10, image: partner10, name: "anti" },
  { id: 11, image: partner11, name: "hukbong-dagat" },
  { id: 12, image: partner12, name: "hukbong-himpapawid" },
  { id: 13, image: partner13, name: "naval" },
  { id: 14, image: partner14, name: "katihan" },
  { id: 15, image: partner15, name: "city-of-candon" },
  { id: 16, image: partner16, name: "mason" },
  { id: 17, image: partner17, name: "farm" },
  { id: 18, image: partner18, name: "cathing" },
];

const About = () => {
  return (
    <div id="about" className="About__cont">
      <div className="About__main">
        <div className="About__title">About</div>
        <div className="About__contents">
          <div>wide variety of souvenir items</div>
          <div>heart and happy hands crafted</div>
          <div>high quality and personalized</div>
          <div>DTI &nbsp;REGISTERED - EST 2018</div>
        </div>
      </div>
      <div className="MissionVision__cont">
        <div className="Mission__cont">
          <div className="Mission__title">Mission</div>
          <div className="Mission_content">
            encourage people <br />
            to make the switch into <br />
            the green side to help <br />
            our one and only planet.
          </div>
        </div>
        <div className="Vision__cont">
          <div className="Vision__title">Vision</div>
          <div className="Vision_content">
            spread eco-friendly <br />
            souvenirs with a <br />
            personalized touch <br />
            globally.
          </div>
        </div>
      </div>
      <div className="Crafted__cont">
        <div className="Crafted__title">crafted with</div>
        <div className="Logo__cont">
          {partnerGallery.map(({ id, image, name }) => (
            <div className="Logo__box" key={id}>
              <img src={image} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
