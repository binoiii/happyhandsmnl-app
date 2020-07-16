import React from "react";
import "./ImageHandler.css";

const ImageHandler = ({ prodName, prodImgCont, index, handleModal }) => {
  return (
    <div className="Grid__box">
      <img src={prodImgCont[0]} alt={prodName} />
      <div className="Gridlabels__cont" id={index}>
        <div className="GridLabelsItem__cont">
          <div className={index} onClick={handleModal}>
            {prodName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHandler;
