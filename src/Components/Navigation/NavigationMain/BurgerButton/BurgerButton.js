import React from "react";
import "./BurgerButton.css";

const BurgerButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      className={(isMenuOpen && "BB_head change") || "BB_head"}
      onClick={toggleMenu}
    >
      <div className="BB_line one"></div>
      <div className="BB_line two"></div>
      <div className="BB_line three"></div>
    </button>
  );
};

export default BurgerButton;
