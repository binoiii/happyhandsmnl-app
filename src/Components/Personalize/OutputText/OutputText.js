import React from "react";
import "./OutputText.css";

const OutputText = ({
  outputStyle,
  userText,
  sliderValue,
  handleSliderValue,
}) => {
  return (
    <div className="OutputText__cont">
      <div className="Output__cont">
        <div style={outputStyle}>{userText}</div>
      </div>
      <div className="Slider__cont">
        <input
          type="range"
          min="50"
          max="150"
          step="1"
          value={sliderValue}
          onChange={handleSliderValue}
        />
      </div>
    </div>
  );
};
export default OutputText;
