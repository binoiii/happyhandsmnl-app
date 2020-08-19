import React, { useState, useContext, useRef, useEffect } from "react";
import InputText from "./InputText/InputText";
import SelectFont from "./SelectFont/SelectFont";
import OutputText from "./OutputText/OutputText";
import { UserContext } from "../../../HowToOrder/HowToOrder";
import "./Personalize.css";

const Personalize = () => {
  const [userText, setuserText] = useState("");
  const [sliderValue, setSliderValue] = useState("100");
  const [outputStyle, setOutputStyle] = useState({
    fontFamily: "Montserrat",
    fontSize: "100px",
  });

  const outputText = useRef(null);

  const { howToOrder, handleTouchStart } = useContext(UserContext);

  useEffect(() => {
    const outputTextRef = outputText.current;
    outputTextRef.addEventListener("touchstart", handleTouch);

    return () => {
      outputTextRef.removeEventListener("touchstart", handleTouch);
    };
  });

  const handleTouch = () => {
    const howToOrderRef = howToOrder.current;
    howToOrderRef.removeEventListener("touchstart", handleTouchStart);
  };

  const handleUserText = (e) => {
    setuserText(e.target.value);
  };

  const handleFontValue = (selectedFont) => {
    const fontStyle = selectedFont;
    setOutputStyle({ ...outputStyle, fontFamily: fontStyle });
  };

  const handleSliderValue = (e) => {
    console.log("move");
    const fontSizeUser = e.target.value;
    const fontSizePx = fontSizeUser + "px";
    setSliderValue(fontSizeUser);
    setOutputStyle({ ...outputStyle, fontSize: fontSizePx });
  };

  const fontSelections = [
    { id: "1", fontName: "Baybayin" },
    { id: "2", fontName: "Bernadette" },
    { id: "3", fontName: "MOON" },
    { id: "4", fontName: "Hughs" },
    { id: "5", fontName: "BEBAS NEUE" },
    { id: "6", fontName: "Back to Black" },
    { id: "7", fontName: "Citrica" },
    { id: "8", fontName: "riztteen" },
    { id: "9", fontName: "WENSLEY" },
    { id: "10", fontName: "Damion" },
    { id: "11", fontName: "Modernist Milk" },
    { id: "12", fontName: "The Heart of Everything" },
    { id: "13", fontName: "Uranos" },
    { id: "14", fontName: "Julietta" },
    { id: "15", fontName: "Old English" },
    { id: "16", fontName: "Amarillo" },
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
        ref={outputText}
      />
    </div>
  );
};

export default Personalize;
