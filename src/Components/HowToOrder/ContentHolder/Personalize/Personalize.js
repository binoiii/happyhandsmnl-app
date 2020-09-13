import React, { useState, useContext, useRef, useEffect } from "react";
import InputText from "./InputText/InputText";
import SelectFont from "./SelectFont/SelectFont";
import OutputText from "./OutputText/OutputText";
import { UserContext } from "../../../HowToOrder/HowToOrder";
import "./Personalize.css";

const Personalize = () => {
  const [userText, setuserText] = useState("");
  const [sliderValue, setSliderValue] = useState("90");
  const [outputStyle, setOutputStyle] = useState({
    fontFamily: "Montserrat",
    fontSize: "90px",
  });

  const outputText = useRef(null);

  const { howToOrder, handleTouchStart } = useContext(UserContext);

  useEffect(() => {
    const outputTextRef = outputText.current;
    outputTextRef.addEventListener("touchstart", handleTouch, {
      passive: true,
    });

    return () => {
      outputTextRef.removeEventListener("touchstart", handleTouch);
    };
  });

  const handleTouch = () => {
    const howToOrderRef = howToOrder.current;
    howToOrderRef.removeEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
  };

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

  const fontSelections = [
    { id: "1", fontName: "Amarillo" },
    { id: "2", fontName: "Back to Black" },
    { id: "4", fontName: "BEBAS NEUE" },
    { id: "5", fontName: "Bernadette" },
    { id: "6", fontName: "Blassville" },
    { id: "7", fontName: "Chasing Hearts" },
    { id: "8", fontName: "Citrica" },
    { id: "9", fontName: "Edwardian" },
    { id: "10", fontName: "GEIZER" },
    { id: "11", fontName: "Hughs" },
    { id: "12", fontName: "James" },
    { id: "13", fontName: "Julietta" },
    { id: "14", fontName: "Nourdilla" },
    { id: "15", fontName: "Mason" },
    { id: "16", fontName: "MOON" },
    { id: "17", fontName: "Old English" },
    { id: "18", fontName: "Qonita" },
    { id: "19", fontName: "riztteen" },
    { id: "20", fontName: "Starfish" },
    { id: "21", fontName: "Spring is Coming" },
    { id: "22", fontName: "The Heart of Everything" },
    { id: "23", fontName: "Uranos" },
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
