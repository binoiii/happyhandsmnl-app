import React, { useState } from "react";
import InputText from "./InputText/InputText";
import SelectFont from "./SelectFont/SelectFont";
import OutputText from "./OutputText/OutputText";
import "./Personalize.css";

const Personalize = () => {
  const [userText, setuserText] = useState("");
  const [fontValue, setfontValue] = useState("Montserrat");
  const [sliderValue, setSliderValue] = useState("100");
  const [fontSizeValue, setFontSizeValue] = useState("100px");

  const outputStyle = {
    fontFamily: fontValue,
    fontSize: fontSizeValue,
  };

  const handleUserText = (e) => {
    setuserText(e.target.value);
  };

  const handleFontValue = (e) => {
    setfontValue(e.target.innerText);
  };

  const handleSliderValue = (e) => {
    const fontSize = e.target.value;
    const fontSizePx = fontSize + "px";
    setSliderValue(fontSize);
    setFontSizeValue(fontSizePx);
  };

  return (
    <div id="personalize" className="Personalize__cont">
      <div className="InputTextSelectFont__cont">
        <InputText
          handleUserText={handleUserText}
          userText={userText}
          spellCheck="false"
        />
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
