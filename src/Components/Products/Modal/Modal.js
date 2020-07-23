import React, { Suspense, lazy } from "react";
import "./Modal.css";

const ImageHolder = lazy(() => import("./ImageHolder/ImageHolder"));

const Modal = ({ exitModal, prodImages, prodName }) => {
  return (
    <div className="Modal__cont" onClick={exitModal}>
      <div className="Image__cont">
        <Suspense fallback={<h1>Loading</h1>}>
          <ImageHolder
            exitModal={exitModal}
            prodImages={prodImages}
            prodName={prodName}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Modal;
