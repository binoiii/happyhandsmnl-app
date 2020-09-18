import React from "react";
import "./ImageHandler.css";

const ImageHandler = ({
  prodName,
  prodImgCont,
  index,
  handleModal,
  prodPrice,
}) => {
  return (
    <div className="Grid__box">
      <img src={prodImgCont[0]} alt={prodName} />
      <div className="Prod__name">
        <span>{prodName}</span>
      </div>
      <div className="Prod__price">
        <span>{prodPrice}</span>
      </div>
      <div className="Gridlabels__cont">
        <div className="GridLabelsItem__cont">
          <div className={index} onClick={handleModal}>
            <span>More Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHandler;
