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

  const handleFontValue = (selectedFont) => {
    const fontStyle = selectedFont;
    setOutputStyle({ ...outputStyle, fontFamily: fontStyle });
  };

  const handleSliderValue = (e) => {
    const fontSizeUser = e.target.value;
    const fontSizePx = fontSizeUser + "px";
    setSliderValue(fontSizeUser);
    setOutputStyle({ ...outputStyle, fontSize: fontSizePx });
  };

  //TO BE FETCHED
  const fontSelections = [
    { id: "1", fontName: "Baybayin" },
    { id: "2", fontName: "Bernadette" },
    { id: "8", fontName: "MOON" },
    { id: "4", fontName: "Hughs" },
    { id: "4", fontName: "BEBAS NEUE" },
    { id: "10", fontName: "Back to Black" },
    { id: "7", fontName: "Citrica" },
    { id: "3", fontName: "riztteen" },
    { id: "10", fontName: "WENSLEY" },
    { id: "5", fontName: "Damion" },
    { id: "9", fontName: "Modernist Milk" },
    { id: "6", fontName: "The Heart of Everything" },
    { id: "6", fontName: "Uranos" },
    { id: "6", fontName: "Julietta" },
    { id: "6", fontName: "Old English" },
    { id: "6", fontName: "Amarillo" },
  ];

  return (
    <div id="personalize" className="Personalize__cont">
      <div className="InputTextSelectFont__cont">
        <InputText handleUserText={handleUserText} userText={userText} />
        <SelectFont
          handleFontValue={handleFontValue}
          fontValue={outputStyle.fontFamily}
          fontSelections={fontSelections}
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
