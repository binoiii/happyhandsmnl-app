import React, { forwardRef } from "react";

import "./OutputText.css";

const OutputText = forwardRef(
  ({ outputStyle, userText, sliderValue, handleSliderValue }, ref) => {
    console.log("Re-render");

    return (
      <div className="OutputText__cont">
        <textarea
          className="Output__cont"
          style={outputStyle}
          value={userText}
          readOnly
        ></textarea>
        <div className="Slider__cont" ref={ref}>
          <input
            type="range"
            name="slider"
            min="30"
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
