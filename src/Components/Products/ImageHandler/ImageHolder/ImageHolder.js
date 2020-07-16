import React from "react";

const ImageHolder = ({ prodImgCont, prodName }) => {
  return <img src={prodImgCont[0]} alt={prodName} />;
};

export default ImageHolder;
