import React from "react";
import "./Backdrop.css";

const Backdrop = ({ toggleMenu }) => {
  return <div className="Backdrop__cont" onClick={toggleMenu}></div>;
};

export default Backdrop;
