import React, { forwardRef } from "react";

import "./OutputText.css";

const OutputText = forwardRef(
  ({ outputStyle, userText, sliderValue, handleSliderValue }, ref) => {
    return (
      <div className="OutputText__cont">
        <div className="Output__cont">
          <div style={outputStyle}>{userText}</div>
        </div>
        <div className="Slider__cont" ref={ref}>
          <input
            type="range"
            name="slider"
            min="50"
            max="150"
            step="1"
            value={sliderValue}
            onChange={handleSliderValue}
          />
        </div>
      </div>
    );
  }
);
export default OutputText;
