import React, { useState } from "react";
import "./SelectFont.css";

const SelectFont = ({ handleFontValue, fontValue }) => {
  const [isOptionsAvailable, setOptionsAvailable] = useState(false);

  const toggleFontOptions = () => {
    setOptionsAvailable(!isOptionsAvailable);
  };

  const exitFontOptions = () => {
    setOptionsAvailable(false);
  };

  const fontSelected = (e) => {
    exitFontOptions();
    handleFontValue(e);
  };

  const handleOptionsKeyDownPress = (e) => {
    const key = e.key || e.keyCode;

    console.log(key, 1);

    if (key !== "Tab" || key !== 9) {
      e.preventDefault();
      console.log(key);
    }

    if (!isOptionsAvailable && (key === "ArrowDown" || key === 40)) {
      toggleFontOptions();
    }

    if (key === "ArrowUp" || key === 38) {
      toggleFontOptions();
    }

    if (key === "Escape" || key === 27) {
      exitFontOptionsKeyDown(e);
    }
  };

  const exitFontOptionsKeyDown = (e) => {
    if (isOptionsAvailable) {
      toggleFontOptions();
    }
  };

  const toggleSelectFont = (e) => {
    console.log(e.keyCode, e.key);
  };

  const [currentFont, selectedFont] =
    fontValue !== "Montserrat"
      ? [fontValue, "Selected active"]
      : ["CHOOSE YOUR FONT", "Selected"];

  // To be added on backend
  const fontSelections = [
    "Baybayin",
    "Bernadette",
    "Modernist  Milk",
    "riztteen",
    "Bebas Neue",
    "Damion",
    "Citrica",
  ];

  return (
    <div className="Select__cont">
      <div
        className="Selected__cont"
        onClick={toggleFontOptions}
        onKeyDown={handleOptionsKeyDownPress}
        tabIndex="8"
      >
        <div className={selectedFont}>{currentFont}</div>
        <span></span>
      </div>

      <div
        className={
          (isOptionsAvailable && "Option__cont active") || "Option__cont"
        }
      >
        {fontSelections.map((font) => {
          return (
            <div
              className="Option"
              key={font}
              onKeyDown={toggleSelectFont}
              tabIndex="9"
            >
              <input type="radio" name="fontStyles" readOnly />
              <label
                style={{ fontFamily: font }}
                htmlFor="fontStyles"
                onClick={fontSelected}
              >
                {font}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectFont;
