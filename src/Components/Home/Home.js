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
        <div className="HhSubStatement">
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
      <div className="SocialLinks_cont">
        <SocialLinks props={props} />
      </div>
    </div>
  );
};

// function Home(props) {
// return (
//     <div id="home" className="Home__cont">
//       <div className="HomeMain__cont">
//         <div className="HomeLeft__cont">
//           <div className="ecofriendly">eco - friendly</div>
//           <div className="personalized">personalized</div>
//           <div className="economical">economical</div>
//           <div className="makethe">make the</div>
//           <div className="socials"></div>
//         </div>
//         <div className="HomeRight__cont">
//           <img src={personalized} className="ecofriendly"></img>
//           <img src={personalized} className="personalized"></img>
//           <img src={economical} className="economical"></img>
//           <div className="switch">switch</div>
//           <div className="socials"></div>
//         </div>
//       </div>
//       <div className="SocialLinks_cont">
//         <SocialLinks props={props} />
//       </div>
//     </div>
//   );
// }

export default Home;
