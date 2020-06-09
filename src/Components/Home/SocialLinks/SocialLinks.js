import React from "react";
import "./SocialLinks.css";

const SocialLinks = ({ props }) => (
  <div className="SocialLinks_cont">
    <ul className="social">
      {/* Social Links */}

      {props.data &&
        props.data.social.map((entry) => (
          <li key={entry.name}>
            <a href={entry.url} target="_blank" rel="noopener noreferrer">
              <i className={entry.className} />
            </a>
          </li>
        ))}
    </ul>
  </div>
);

export default SocialLinks;
