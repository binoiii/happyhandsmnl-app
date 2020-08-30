import React, { useEffect, Suspense, lazy, forwardRef } from "react";
import "./Modal.css";
import Loader from "./Loader/Loader";

const ImageHolder = lazy(() => import("./ImageHolder/ImageHolder"));

const Modal = forwardRef(
  ({ exitModal, prodImages, prodName, prodDescription }, modalRef) => {
    useEffect(() => {});

    return (
      <div className="Modal__cont" onClick={exitModal} ref={modalRef}>
        <div className="Image__cont">
          <Suspense fallback={<Loader />}>
            <ImageHolder
              exitModal={exitModal}
              prodImages={prodImages}
              prodName={prodName}
            />
            <div className="Image__description">
              {prodDescription.map((desc, index) => (
                <span key={index}>{desc}</span>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    );
  }
);
export default Modal;
