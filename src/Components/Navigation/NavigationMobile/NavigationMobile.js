import React from "react";
import "./NavigationMobile.css";
import { Link } from "react-scroll";

const NavigationMobile = ({ isMenuOpen, toggleNavLinks }) => {
  return (
    <nav
      className={(isMenuOpen && "NavMobile__cont open") || "NavMobile__cont"}
    >
      <ul className="NavMobileLinks__cont">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            href="#home"
            onClick={toggleNavLinks}
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
            onClick={toggleNavLinks}
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
            onClick={toggleNavLinks}
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
            onClick={toggleNavLinks}
          >
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMobile;
