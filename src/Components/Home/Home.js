import React from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import { Link } from "react-scroll";
import "./Home.css";

const Home = ({ hhData }) => {
  return (
    <div id="home" className="Home__cont">
      <div className="HomeMain__cont">
        <div className="HhStatement__cont">
          <div>MAKE THE SWITCH</div>
        </div>
        <div className="HhSubStatement__cont">
          <div>eco-friendly</div>
          <div className="HhSubStatement__inactive">&nbsp;.&nbsp;</div>
          <div>personalized</div>
          <div className="HhSubStatement__inactive">&nbsp;.&nbsp;</div>
          <div>affordable</div>
        </div>
        <div className="ShopNow__cont">
          <Link
            activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            href="#products"
            tabIndex="5"
          >
            <div className="Shop__cont">SHOP NOW</div>
          </Link>
        </div>
      </div>
      <div className="SocialLinks__cont">
        <SocialLinks hhData={hhData} />
      </div>
    </div>
  );
};

export default Home;
