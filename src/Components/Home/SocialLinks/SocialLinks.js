import React from "react";
import "./SocialLinks.css";

const SocialLinks = ({ props }) => (
  <div className="SocialLinks_cont">
    <ul className="social">
      {props.data &&
        props.data.social.map((entry) => (
          <li key={entry.name}>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="6"
            >
              <i className={entry.className} />
              <div className="Followers__cont">
                <div>Followers</div>
                <div>5,9998</div>
              </div>
            </a>
          </li>
        ))}
    </ul>
  </div>
);

export default SocialLinks;
