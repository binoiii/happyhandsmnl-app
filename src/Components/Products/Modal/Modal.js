import React, { Suspense, lazy } from "react";

import "./Modal.css";

import Loader from "./Loader/Loader";

const ImageHolder = lazy(() => import("./ImageHolder/ImageHolder"));

const Modal = ({ exitModal, prodImages, prodName }) => {
  return (
    <div className="Modal__cont" onClick={exitModal}>
      <div className="Image__cont">
        <Suspense fallback={<Loader />}>
          <ImageHolder
            exitModal={exitModal}
            prodImages={prodImages}
            prodName={prodName}
          />
          <div className="Image__description">
            <span>450ml / 500ml</span>
            <span>heat insulated</span>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Modal;
