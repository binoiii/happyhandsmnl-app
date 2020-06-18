import React, { useState } from "react";
import InputText from "./InputText/InputText";
import SelectFont from "./SelectFont/SelectFont";
import OutputText from "./OutputText/OutputText";
import "./Personalize.css";

const Personalize = () => {
  const [userText, setuserText] = useState("");
  const [sliderValue, setSliderValue] = useState("100");
  const [outputStyle, setOutputStyle] = useState({
    fontFamily: "Montserrat",
    fontSize: "100px",
  });

  const handleUserText = (e) => {
    setuserText(e.target.value);
  };

  const handleFontValue = (e) => {
    const fontStyle = e.target.innerText;
    setOutputStyle({ ...outputStyle, fontFamily: fontStyle });
  };

  const handleSliderValue = (e) => {
    const fontSizeUser = e.target.value;
    const fontSizePx = fontSizeUser + "px";
    setSliderValue(fontSizeUser);
    setOutputStyle({ ...outputStyle, fontSize: fontSizePx });
  };

  return (
    <div id="personalize" className="Personalize__cont">
      <div className="InputTextSelectFont__cont">
        <InputText handleUserText={handleUserText} userText={userText} />
        <SelectFont
          handleFontValue={handleFontValue}
          fontValue={outputStyle.fontFamily}
        />
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
