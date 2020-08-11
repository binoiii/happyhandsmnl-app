import React from "react";
import "./StepProgress.css";

const StepProgress = ({ handleStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="StepProgress__cont">
      <div className="Step__cont">
        {steps.map((step, index) => (
          <div
            key={index}
            className={index === 0 ? "Step active" : "Step "}
            onClick={handleStep}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepProgress;
