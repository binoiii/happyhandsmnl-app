import React from "react";
import ImageHolder from "./ImageHolder/ImageHolder";
import "./Modal.css";

const Modal = ({ exitModal, prodImages, prodName }) => {
  return (
    <div className="Modal__cont" onClick={exitModal}>
      <div className="Image__cont">
        <ImageHolder
          exitModal={exitModal}
          prodImages={prodImages}
          prodName={prodName}
        />
      </div>
    </div>
  );
};

export default Modal;
