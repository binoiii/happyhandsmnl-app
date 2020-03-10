import React from "react";
import "../CSSComponents/Navigation.css";

function Navigation() {
  return (
    <nav className="Navbar">
      <div className="Navbar__Title__Toggle">
        <div className="Navbar__Title">happyhandsmnl</div>
        <div className="Navbar__Toggle">
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <ul className="Navbar__Head">
        <li className="Navbar__Link">
          <a href="#home">home</a>
        </li>
        <li className="Navbar__Link">
          <a href="#products">products</a>
        </li>
        <li className="Navbar__Link">
          <a href="about">about</a>
        </li>
        <li className="Navbar__Link">
          <a href="contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
