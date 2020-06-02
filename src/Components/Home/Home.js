import React from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import "./Home.css";

import personalized from "./img/personalized.png";

function Home(props) {
  return (
    <div id="home" className="Home__cont">
      <div className="HomeMain__cont">
        <div className="HomeLeft__cont">
          <div className="ecofriendly">eco - friendly</div>
          <div className="personalized">personalized</div>
          <div className="economical">economical</div>
          <div className="makethe">make the</div>
          <div className="socials">socials</div>
        </div>
        <div className="HomeRight__cont">
          <div className="ecofriendly">eco - friendly</div>
          <img src={personalized} className="personalized"></img>
          <div className="economical">economical</div>
          <div className="switch">switch</div>
          <div className="socials">socials</div>
        </div>
      </div>
      {/* <div className="SocialLinks_cont">
        <SocialLinks props={props} />
      </div> */}
    </div>
  );
}

export default Home;
