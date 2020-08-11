import React, { useState } from "react";
import ContentHolder from "./ContentHolder/ContentHolder";
import StepProgress from "./StepProgress/StepProgress";
import "./HowToOrder.css";

const HowToOrder = () => {
  const [stepCount, setStepCount] = useState(1);

  const handleStep = (e) => {
    const count = e.target.innerText;
    const nodes = e.target.parentNode.childNodes;

    setStepCount(count);

    for (let i = 0; i < nodes.length; i++) {
      if (i < count) {
        nodes[i].className = "Step active";
      } else {
        nodes[i].className = "Step";
      }
    }
  };

  return (
    <div id="how-to-order" className="HowToOrder__cont">
      <span className="HowToOrder__title">How to Order</span>
      <StepProgress handleStep={handleStep} />
      <ContentHolder stepCount={stepCount} />
    </div>
  );
};

export default HowToOrder;
