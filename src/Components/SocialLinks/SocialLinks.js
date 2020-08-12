import React from "react";
import "./SocialLinks.css";

const SocialLinks = ({ hhData, handleContactForm }) => {
  return (
    <div className="SocialLinks__cont">
      <div className="Brand__mobile">happyhandsmnl</div>
      <ul className="Social">
        {hhData.social &&
          hhData.social.map((entry) => (
            <li key={entry.name}>
              <a
                onClick={entry.name === "email" ? handleContactForm : null}
                href={entry.name === "email" ? "" : entry.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex="6"
              >
                <i className={entry.className} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SocialLinks;