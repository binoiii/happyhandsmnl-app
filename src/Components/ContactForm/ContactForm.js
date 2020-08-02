import React, { useState, useEffect } from "react";
import "./ContactForm.css";
const ContactForm = ({ exitContactForm }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSent, setIsSent] = useState(null);

  useEffect(() => {
    document.addEventListener("keydown", exitContactForm);
    return () => {
      document.removeEventListener("keydown", exitContactForm);
    };
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...userData }),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          setIsSent(true);
        } else {
          setIsSubmitted(false);
          setIsSent(false);
        }
      })
      .catch((error) => {
        setIsSubmitted(false);
        setIsSent(false);
        alert(error);
      });

    setIsSubmitted(true);

    e.preventDefault();
  };

  return (
    <div className="Contact__cont">
      <form onSubmit={handleSubmit}>
        <h3>let's collaborate</h3>
        <div className="NameEmail__cont">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            disabled={isSent}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email Address"
            disabled={isSent}
            required
          />
        </div>
        <div className="Message_cont">
          <textarea
            type="text"
            name="message"
            value={userData.message}
            onChange={handleChange}
            placeholder="Send us your thoughts"
            disabled={isSent}
            required
          />
        </div>
        <div className="Buttons__cont">
          <button type="submit" disabled={isSubmitted} className="Send__cont">
            Send
          </button>
          {isSent === true && (
            <button
              type="button"
              onClick={exitContactForm}
              className="Back__cont"
            >
              Back
            </button>
          )}
          {(isSent === null || isSent === false) && (
            <button
              type="button"
              onClick={exitContactForm}
              className="Cancel__cont"
            >
              Cancel
            </button>
          )}
          <div className="Status__cont">
            <span>
              {isSent === true && "Sent"}
              {isSent === false && "Not Sent"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
