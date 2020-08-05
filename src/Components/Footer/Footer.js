import React from "react";
import "./Footer.css";

const Footer = ({ handleContactForm }) => {
  return (
    <div className="Footer__cont">
      <div className="FaqCollab_cont">
        <p>faq</p>
        <span> &nbsp; . &nbsp;</span>
        <p onClick={handleContactForm}>contact us</p>
      </div>
      <div className="CopyRights__cont">
        © 2020 <span>happyhandsmnl</span>
      </div>
    </div>
  );
};

export default Footer;
