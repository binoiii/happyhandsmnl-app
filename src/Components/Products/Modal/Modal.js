import React, { useState, useEffect } from "react";
import Dot from "./Dot/Dot";
import "./Modal.css";

const Modal = ({ prodImages, exitModal }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDownEsc);
    window.addEventListener("keydown", handleKeyDownPrev);
    window.addEventListener("keydown", handleKeyDownNext);

    return () => {
      window.removeEventListener("keydown", handleKeyDownEsc);
      window.removeEventListener("keydown", handleKeyDownPrev);
      window.removeEventListener("keydown", handleKeyDownNext);
    };
  });

  const imageIndexNext = imageIndex < prodImages.length - 1;

  const handleKeyDownEsc = (e) => {
    e.preventDefault();
    exitModal(e);
  };

  const handleKeyDownPrev = (e) => {
    e.preventDefault();
    if (imageIndex > 0 && e.keyCode === 37) {
      setImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleKeyDownNext = (e) => {
    e.preventDefault();
    if (imageIndexNext && e.keyCode === 39) {
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
        <img src={prodImages[imageIndex]} alt="next" />
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
