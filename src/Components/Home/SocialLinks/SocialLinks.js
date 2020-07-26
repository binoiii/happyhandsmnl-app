import React from "react";
import "./SocialLinks.css";

const SocialLinks = ({ hhData }) => {
  return (
    <div className="SocialLinks_cont">
      <ul className="social">
        {hhData.social &&
          hhData.social.map((entry) => (
            <li key={entry.name}>
              <a
                href={entry.url}
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
