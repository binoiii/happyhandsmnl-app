import React from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import "./Home.css";

const Home = (props) => {
  return (
    <div id="home" className="Home__cont">
      <div className="HomeMain__cont">
        <div className="HhStatement">
          <div>MAKE THE SWITCH</div>
        </div>
        <div className="HhSubStatement__cont">
          <div>eco-friendly</div>
          <div className="HhSubStatement__inactive">&nbsp;.&nbsp;</div>
          <div>personalized</div>
          <div className="HhSubStatement__inactive">&nbsp;.&nbsp;</div>
          <div>affordable</div>
        </div>
        <div className="Shop__cont">
          <a href="//">SHOP NOW</a>
        </div>
      </div>
      <div className="SocialLinks__cont">
        <SocialLinks props={props} />
      </div>
    </div>
  );
};

export default Home;
