import React, { useEffect, useRef } from "react";
import "./Dot.css";

const Dot = ({ imageIndex }) => {
  const ImgDotsCont = useRef(null);

  const handleIndexChange = (index) => {
    let dotItem = ImgDotsCont.current.children;

    for (let i = 0; i < dotItem.length; i++) {
      index === i
        ? (dotItem[i].className = "ImgDots__item Active")
        : (dotItem[i].className = "ImgDots__item");
    }
  };

  useEffect(() => {
    handleIndexChange(imageIndex);
  }, [imageIndex]);

  return (
    <div className="ImgDots__cont" ref={ImgDotsCont}>
      <span className="ImgDots__item Active"></span>
      <span className="ImgDots__item"></span>
      <span className="ImgDots__item"></span>
      <span className="ImgDots__item"></span>
    </div>
  );
};

export default Dot;
