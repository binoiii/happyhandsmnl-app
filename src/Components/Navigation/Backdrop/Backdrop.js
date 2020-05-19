import React from "react";
import "./Backdrop.css";

const Backdrop = ({ backDropToggle }) => {
  return <div className="Backdrop__cont" onClick={backDropToggle}></div>;
};

export default Backdrop;
