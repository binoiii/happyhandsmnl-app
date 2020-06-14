import React from "react";
import "./BurgerButton.css";

const BurgerButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      className={
        (isMenuOpen && "BurgerButton__cont change") || "BurgerButton__cont"
      }
      onClick={toggleMenu}
    >
      <div className="BurgerButtonLine one"></div>
      <div className="BurgerButtonLine two"></div>
      <div className="BurgerButtonLine three"></div>
    </button>
  );
};

export default BurgerButton;
