import React, { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import "./SocialLinks.css";

const SocialLinks = ({ hhData }) => {
  const [isContactForm, setContactForm] = useState(false);
  const [isSent, setIsSent] = useState(null);

  const handleContactForm = (e) => {
    e.preventDefault();
    setContactForm(!isContactForm);
  };

  const exitContactForm = (e) => {
    const key = e.key || e.keyCode;

    if (e.target === e.currentTarget || key === "Escape" || key === 27) {
      if (isSent) {
        setContactForm(false);
        setIsSent(null);
      } else {
        if (window.confirm("Are you sure to cancel?")) {
          setContactForm(false);
        }
      }
    }
  };

  return (
    <>
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
      {isContactForm && (
        <ContactForm
          exitContactForm={exitContactForm}
          isSent={isSent}
          setIsSent={setIsSent}
        />
      )}
    </>
  );
};

export default SocialLinks;
