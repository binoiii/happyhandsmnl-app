import React from "react";
import "./NavigationMain.css";
// import BurgerButton from "./BurgerButton/BurgerButton.js";
import { Link } from "react-scroll";
import Toast from "../../Toast/Toast";

const NavigationMain = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="NavMain__cont">
      <Toast />
      <nav className="Nav__cont">
        <div className="NavLogo__cont">
          <span className="Brand__web">happyhandsmnl</span>
        </div>
        <ul className="NavMainLinks__cont">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              href="#home"
              tabIndex="1"
            >
              <i className="fi-xwluxl-home-wide"></i>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              href="#products"
              tabIndex="2"
            >
              <i className="fi-xwluhl-shopping-cart-wide"></i>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="how-to-order"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              href="#how-to-order"
              tabIndex="3"
            >
              <i className="fi-xwluxl-question-mark-alt-wide"></i>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              href="#about"
              tabIndex="4"
            >
              <i className="fi-cnldxl-exclamation-mark"></i>
            </Link>
          </li>
        </ul>
        {/* <BurgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
      </nav>
    </div>
  );
};

export default NavigationMain;
