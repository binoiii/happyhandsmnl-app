import React from "react";
import "./ImageHandler.css";

const ImageHandler = ({ prodName, prodImgCont, index, handleModal }) => {
  return (
    <div className="Grid__box">
      <img src={prodImgCont[0]} alt={prodName} />
      <div className="Prod__name">
        <span>{prodName}</span>
      </div>
      <div className="Gridlabels__cont">
        <div className="GridLabelsItem__cont">
          <div className={index} onClick={handleModal}>
            <span>
              More Photos
              {/* <i class="fi-xnluxl-magnifying-glass"></i> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHandler;
