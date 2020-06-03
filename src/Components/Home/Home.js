import React from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import "./Home.css";

import personalized from "./img/personalized.png";
import economical from "./img/economical.png";

const Home = (props) => {
  return (
    <div className="Home__cont">
      <h1>Make the Switch</h1>
    </div>
  );
};

// function Home(props) {
//   return (
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
