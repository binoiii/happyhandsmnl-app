import React, { useState, useEffect, Suspense, lazy } from "react";
import Dot from "./Dot/Dot";
import ImageLoader from "./ImageLoader/ImageLoader";
import "./Modal.css";

const ImageHolder = lazy(() => import("./ImageHolder/ImageHolder"));

const Modal = ({ prodImages, exitModal }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownEsc);
    document.addEventListener("keydown", handleKeyDownPrev);
    document.addEventListener("keydown", handleKeyDownNext);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEsc);
      document.removeEventListener("keydown", handleKeyDownPrev);
      document.removeEventListener("keydown", handleKeyDownNext);
    };
  });

  const imageIndexNext = imageIndex < prodImages.length - 1;

  const handleKeyDownEsc = (e) => {
    e.preventDefault();
    exitModal(e);
  };

  const handleKeyDownPrev = (e) => {
    e.preventDefault();
    const key = e.key || e.keyCode;

    if (imageIndex > 0 && (key === "ArrowLeft" || key === 37)) {
      setImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleKeyDownNext = (e) => {
    e.preventDefault();
    const key = e.key || e.keyCode;

    if ((imageIndexNext && key === "ArrowRight") || key === 39) {
      setImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleNext = () => {
    if (imageIndexNext) {
      setImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (imageIndex > 0) {
      setImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="Modal__cont" onClick={exitModal}>
      <div className="Image__cont">
        <Suspense fallback={ImageLoader}>
          <ImageHolder prodImages={prodImages} imageIndex={imageIndex} />
        </Suspense>
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
    </div>
  );
};

export default Modal;
