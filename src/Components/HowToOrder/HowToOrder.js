import React, { useState, useEffect, useRef } from "react";
import ContentHolder from "./ContentHolder/ContentHolder";
import StepProgress from "./StepProgress/StepProgress";
import "./HowToOrder.css";

const HowToOrder = () => {
  const howToOrder = useRef(null);
  const stepProgress = useRef(null);

  const [stepCount, setStepCount] = useState(1);

  let xTouchStart = 0;
  let yTouchStart = 0;

  const isNextStep = stepCount > 0 && stepCount < 4;
  const isPrevStep = stepCount > 1;

  useEffect(() => {
    const howToOrderRef = howToOrder.current;
    howToOrderRef.addEventListener("touchstart", handleTouchStart);
    howToOrderRef.addEventListener("touchmove", handleTouchMove);

    return () => {
      howToOrderRef.removeEventListener("touchstart", handleTouchStart);
      howToOrderRef.removeEventListener("touchmove", handleTouchMove);
    };
  });

  const handleTouchStart = (e) => {
    xTouchStart = e.touches[0].clientX;
    yTouchStart = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!xTouchStart || !yTouchStart) {
      return;
    }

    let xTouchEnd = e.touches[0].clientX;
    let yTouchEnd = e.touches[0].clientY;

    const xDiff = xTouchStart - xTouchEnd;
    const yDiff = yTouchStart - yTouchEnd;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        if (isNextStep) {
          setStepCount((prevStepCount) => prevStepCount + 1);
          handleProgress(stepCount + 1);
        }
      } else {
        if (isPrevStep) {
          setStepCount((prevStepCount) => prevStepCount - 1);
          handleProgress(stepCount - 1);
        }
      }
    }
    xTouchStart = 0;
    yTouchStart = 0;
  };

  const handleStep = (e) => {
    const count = +e.target.innerText;
    setStepCount(count);
    handleProgress(count);
  };

  const handleProgress = (count) => {
    const nodes = stepProgress.current.childNodes;

    for (let i = 0; i < nodes.length; i++) {
      if (i < count) {
        nodes[i].className = "Step active";
      } else {
        nodes[i].className = "Step";
      }
    }
  };

  return (
    <div id="how-to-order" className="HowToOrder__cont" ref={howToOrder}>
      <span className="HowToOrder__title">How to Order</span>
      <StepProgress handleStep={handleStep} ref={stepProgress} />
      <ContentHolder stepCount={stepCount} />
    </div>
  );
};

export default HowToOrder;
