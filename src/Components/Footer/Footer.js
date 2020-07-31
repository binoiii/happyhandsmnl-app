import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // const encode = (data) => {
  //   const formData = new FormData();

  //   Object.keys(data).forEach((k) => {
  //     formData.append(k, data[k]);
  //   });
  //   return formData;
  // };

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
      .then(() => setStatus("Email sent!"))
      .catch((error) => setStatus("Failed. Try again!"));

    e.preventDefault();
  };

  // const handleSubmit = (e) => {
  //   const data = { "form-name": "contact", ...userData };

  //   fetch("/", {
  //     method: "POST",
  //     body: encode(data),
  //   })
  //     .then(() => setStatus("Email sent!"))
  //     .catch((error) => setStatus("Failed. Try again!"));

  //   e.preventDefault();
  // };

  return (
    <div className="Footer__cont">
      <div className="FaqCollab_cont">
        <p>FAQs</p>
        <span>&nbsp;.&nbsp;</span>
        <p>LET'S COLLAB!</p>
      </div>
      <div className="CopyRights__cont">
        ©2020 <span>happyhandsmnl</span>
      </div>

      <div className="Contact__cont">
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              name:
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              email:
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              message:
              <textarea
                type="text"
                name="message"
                value={userData.message}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          <h3>{status}</h3>
        </form>
      </div>
    </div>
  );
};

export default Footer;
