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

// import React, { useRef, useEffect } from "react";
// import "./OutputFont.css";

// const OutputFont = ({ fontValue, userText }) => {
//   const canvasRef = useRef(null);

//   const draw = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     ctx.font = `50px ${fontValue}`;
//     ctx.fillStyle = "black";
//     ctx.fillText(userText, 50, 50);
//   };

//   useEffect(draw);

//   return <canvas ref={canvasRef} width="300px" height="200px"></canvas>;
// };

// export default OutputFont;
