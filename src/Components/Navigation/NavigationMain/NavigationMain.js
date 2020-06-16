import React from "react";
import "./NavigationMain.css";
import BurgerButton from "./BurgerButton/BurgerButton.js";
import { Link } from "react-scroll";

const NavigationMain = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="NavMain__cont">
      <nav className="Nav__cont">
        <div className="NavLogo__cont">
          <span>happyhandsmnl</span>
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
            >
              home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="personalize"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              href="#personalize"
            >
              personalize
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
            >
              products
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
            >
              about
            </Link>
          </li>
        </ul>
        <BurgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </div>
  );
};

export default NavigationMain;
