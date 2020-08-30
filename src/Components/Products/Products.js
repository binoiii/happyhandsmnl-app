import React, { useState, useRef } from "react";
import { imgCont } from "./productImporter";
import ImageHandler from "./ImageHandler/ImageHandler";
import Modal from "./Modal/Modal";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import "./Products.css";

function Products() {
  const [isModal, setModal] = useState(false);
  const [productCount, setProductCount] = useState(null);
  const modalRef = useRef(null);

  const handleModal = (e) => {
    setModal(!isModal);
    setProductCount(e.target.className);
    handleScroll();
  };

  const handleScroll = () => {
    !isModal ? disableBodyScroll(modalRef) : clearAllBodyScrollLocks(modalRef);
  };

  const exitModal = (e) => {
    const key = e.key || e.keyCode;

    if (e.target === e.currentTarget || key === "Escape" || key === 27) {
      setModal(false);
      handleScroll();
    }
  };

  return (
    <div id="products" className="Prod__Wrap">
      <div className="Grid__cont">
        {imgCont.map(({ prodName, prodImgCont }, index) => (
          <ImageHandler
            key={index}
            prodName={prodName}
            prodImgCont={prodImgCont}
            handleModal={handleModal}
            index={index}
          />
        ))}
      </div>

      <div>
        {isModal && (
          <Modal
            exitModal={exitModal}
            prodImages={imgCont[productCount].prodImgCont}
            prodName={imgCont[productCount].prodName}
            prodDescription={imgCont[productCount].prodDescription}
            modalRef={modalRef}
          />
        )}
      </div>
    </div>
  );
}

export default Products;
