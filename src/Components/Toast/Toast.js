import React, { useState } from "react";
import "./Toast.css";

const Toast = () => {
  const [isToast, setIsToast] = useState(true);

  const toggleControl = () => {
    setIsToast(false);
  };

  return (
    <div className={isToast ? "toast-cont" : "toast-cont close"}>
      <div className="toast-body">
        <div>Thank you for making the eco-switch!</div>
        <div>
          As a reward in joining this advocacy, engraving is
          <strong> FREE !</strong>
        </div>
      </div>
      <button className="toast-control" onClick={toggleControl}>
        X
      </button>
    </div>
  );
};

export default Toast;
