import React, { useState } from "react";
import InputText from "./InputText/InputText";
import SelectFont from "./SelectFont/SelectFont";
import OutputText from "./OutputText/OutputText";
import "./Personalize.css";
// import OutputFont from "./OutputFont/OutputFont.js";

const Personalize = () => {
  const [userText, setuserText] = useState("");
  const [fontValue, setfontValue] = useState("Montserrat");
  const [sliderValue, setSliderValue] = useState("100");
  const [fontSizeValue, setFontSizeValue] = useState("100px");

  const handleUserText = (e) => {
    setuserText(e.target.value);
  };

  const handleFontValue = (e) => {
    setfontValue(e.target.innerText);
  };

  const handleSliderValue = (e) => {
    const fcontSize = e.target.value;
    const fontSizePx = fcontSize + "px";
    setSliderValue(fcontSize);
    setFontSizeValue(fontSizePx);
  };

  const outputStyle = {
    fontFamily: fontValue,
    fontSize: fontSizeValue,
  };

  console.log(fontValue);

  return (
    <div id="personalize" className="Personalize__cont">
      <div className="InputSelect_cont">
        <InputText handleUserText={handleUserText} spellCheck="false" />
        <SelectFont handleFontValue={handleFontValue} fontValue={fontValue} />
      </div>
      <OutputText
        outputStyle={outputStyle}
        userText={userText}
        sliderValue={sliderValue}
        handleSliderValue={handleSliderValue}
      />
    </div>
  );
};

export default Personalize;
