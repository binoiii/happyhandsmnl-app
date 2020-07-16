import React from "react";

const ImageHolder = ({ prodImages, imageIndex }) => {
  return <img src={prodImages[imageIndex]} alt="next" />;
};

export default ImageHolder;
