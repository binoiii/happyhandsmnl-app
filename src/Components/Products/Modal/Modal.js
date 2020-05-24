import React, { useState, useEffect } from "react";
import "./Modal.css";

import Prod1 from "../img/product1.jpg";
import Prod2 from "../img/product2.jpg";
import Prod3 from "../img/product3.jpg";

const imgItem = [Prod1, Prod2, Prod3];

const Modal = ({ prodName, prodImg, exitModalViaCont, exitModal }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      handleKeyDownEsc(e);
      handleKeyDownPrev(e);
    });
    return () => {
      window.removeEventListener("keydown", handleKeyDownEsc);
      window.removeEventListener("keydown", handleKeyDownPrev);
      console.log("cleaning");
    };
  });

  const handleKeyDownEsc = (e) => {
    console.log(e);
    e.preventDefault();
    exitModal(e);
  };

  const handleKeyDownPrev = (e) => {
    e.preventDefault();
    handlePrev(e);
  };

  const handleNext = (e) => {
    if (imageIndex < imgItem.length - 1) {
      setImageIndex((prevIndex) => prevIndex + 1);
      // e.target.parentElement.parentElement.nextElementSibling.children[
      //   imageIndex
      // ].className = "ImgDots__item";
      // e.target.parentElement.parentElement.nextElementSibling.children[
      //   imageIndex + 1
      // ].className = "ImgDots__item ImgDots__itemActive";
    }
  };

  const handlePrev = (e) => {
    if (imageIndex > 0) {
      setImageIndex((prevIndex) => prevIndex - 1);
      if (imageIndex > 0 && e.keyCode === 37) {
        setImageIndex((prevIndex) => prevIndex - 1);
      }
      // e.target.parentElement.parentElement.nextElementSibling.children[
      //   imageIndex - 1
      // ].className = "ImgDots__item ImgDots__itemActive";
      // e.target.parentElement.parentElement.nextElementSibling.children[
      //   imageIndex
      // ].className = "ImgDots__item";
    }
  };

  return (
    <div className="Modal__cont" onClick={exitModal}>
      <div className="Image__cont">
        <img src={imgItem[imageIndex]} alt="next" />
        <div className="Controls__cont">
          <div className="PN__cont">
            {/* Previous Controller */}
            {imageIndex > 0 && (
              <div className="Prev__cont" onClick={handlePrev}>
                <div className="Prev__item"></div>
              </div>
            )}

            {/* Next Controller */}
            {imageIndex < imgItem.length - 1 && (
              <div className="Next__cont" onClick={handleNext}>
                <div className="Next__item"></div>
              </div>
            )}
          </div>
          {/* {Image Dots} */}
          <div className="ImgDots__cont">
            <span className="ImgDots__item ImgDots__itemActive"></span>
            <span className="ImgDots__item"></span>
            <span className="ImgDots__item"></span>
          </div>

          {/* {Close Button}  */}
          <div className="Close__cont">
            <div className="Close__item" onClick={exitModal}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
