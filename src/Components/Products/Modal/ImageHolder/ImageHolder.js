import React, { useState, useEffect } from "react";
import "./ImageHolder.css";
import Dot from "./Dot/Dot";

const ImageHolder = ({ exitModal, prodImages, prodName }) => {
  const [translateX, setTranslateX] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownEsc);
    document.addEventListener("keydown", handleKeyDownPrev);
    document.addEventListener("keydown", handleKeyDownNext);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEsc);
      document.removeEventListener("keydown", handleKeyDownPrev);
      document.removeEventListener("keydown", handleKeyDownNext);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  });
  const imageIndexNext = imageIndex < prodImages.length - 1;
  let xTouchStart = null;
  let yTouchStart = null;

  const handleKeyDownEsc = (e) => {
    e.preventDefault();
    exitModal(e);
  };

  const handleTouchStart = (e) => {
    xTouchStart = e.touches[0].clientX;
    yTouchStart = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!xTouchStart || !yTouchStart) {
      return;
    }

    const xTouchEnd = e.touches[0].clientX;
    const yTouchEnd = e.touches[0].clientY;

    const xDiff = xTouchStart - xTouchEnd;
    const yDiff = yTouchStart - yTouchEnd;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff < 0) {
        if (imageIndex > 0) {
          setImageIndex((prevIndex) => prevIndex - 1);
          setTranslateX((prevTranslateX) => prevTranslateX + 100);
        }
      } else {
        if (imageIndexNext) {
          setImageIndex((prevIndex) => prevIndex + 1);
          setTranslateX((prevTranslateX) => prevTranslateX - 100);
        }
      }
    }
  };

  const handleKeyDownPrev = (e) => {
    e.preventDefault();
    const key = e.key || e.keyCode;

    if (imageIndex > 0 && (key === "ArrowLeft" || key === 37)) {
      setImageIndex((prevIndex) => prevIndex - 1);
      setTranslateX((prevTranslateX) => prevTranslateX + 100);
    }
  };

  const handleKeyDownNext = (e) => {
    e.preventDefault();
    const key = e.key || e.keyCode;

    if ((imageIndexNext && key === "ArrowRight") || key === 39) {
      setImageIndex((prevIndex) => prevIndex + 1);
      setTranslateX((prevTranslateX) => prevTranslateX - 100);
    }
  };

  const handleNext = () => {
    if (imageIndexNext) {
      setImageIndex((prevIndex) => prevIndex + 1);
      setTranslateX((prevTranslateX) => prevTranslateX - 100);
    }
  };

  const handlePrev = () => {
    if (imageIndex > 0) {
      setImageIndex((prevIndex) => prevIndex - 1);
      setTranslateX((prevTranslateX) => prevTranslateX + 100);
    }
  };

  return (
    <div className="slideshow-image">
      {prodImages.map((images, index) => (
        <img
          src={images}
          alt={prodName}
          key={index}
          style={{ transform: `translateX(${translateX}%)` }}
        />
      ))}
      <div className="Controls__cont">
        <div className="PN__cont">
          {imageIndex > 0 && (
            <div className="Prev__cont" onClick={handlePrev}>
              <div className="Prev__item"></div>
            </div>
          )}

          {imageIndexNext && (
            <div className="Next__cont" onClick={handleNext}>
              <div className="Next__item"></div>
            </div>
          )}
        </div>
        <div className="Close__cont">
          <div className="Close__item" onClick={exitModal}></div>
        </div>
        <Dot imageIndex={imageIndex} />
      </div>
    </div>
  );
};

export default ImageHolder;
