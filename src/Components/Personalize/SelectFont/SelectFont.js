import React, { useState } from "react";
import "./SelectFont.css";

const SelectFont = ({ handleFontValue, fontValue }) => {
  const [isOptionsAvailable, setOptionsAvailable] = useState(false);
  const [optionPosition, setOptionPosition] = useState(0);

  const toggleFontOptions = () => {
    setOptionsAvailable(!isOptionsAvailable);
  };

  const exitFontOptions = () => {
    setOptionsAvailable(false);
  };

  const onFontSelected = (e) => {
    exitFontOptions();
    handleFontValue(e.target.innerText);
  };

  const handleSelectContainerKeyDown = (e) => {
    const key = e.key || e.keyCode;

    if (key === "Escape" || key === 27) {
      toggleFontOptions();
    }

    if (key === "Tab" || key === 9) {
      !isOptionsAvailable && toggleFontOptions();
    }
  };

  const navigateOptionsKeyDown = (e) => {
    const key = e.key || e.keyCode;

    if (key === "Escape" || key === 27) {
      isOptionsAvailable && toggleFontOptions();
    }

    if (key === "Tab" || key === 9) {
      isOptionsAvailable && toggleFontOptions();
    }

    if (key === "Enter" || key === 13) {
      exitFontOptions();
      handleFontValue(e.target.children[optionPosition].innerText);
    }

    if (
      (key === "ArrowDown" || key === 38) &&
      optionPosition < fontSelections.length - 1
    ) {
      setOptionPosition((previousPostion) => previousPostion + 1);
    }

    if ((key === "ArrowUp" || key === 40) && optionPosition > 0) {
      setOptionPosition((previousPostion) => previousPostion - 1);
    }
  };

  const [currentFont, selectedFont] =
    fontValue !== "Montserrat"
      ? [fontValue, "Selected active"]
      : ["CHOOSE YOUR FONT", "Selected"];

  // To be added on backend
  const fontSelections = [
    { id: "0", fontName: "Baybayin" },
    { id: "1", fontName: "Bernadette" },
    { id: "2", fontName: "Modernist Milk" },
    { id: "3", fontName: "riztteen" },
    { id: "4", fontName: "Bebas Neue" },
    { id: "5", fontName: "Damion" },
    { id: "6", fontName: "Citrica" },
  ];

  return (
    <div className="Select__cont">
      <div
        className={
          (isOptionsAvailable && "Selected__cont active") || "Selected__cont"
        }
        onClick={toggleFontOptions}
        onKeyDown={handleSelectContainerKeyDown}
        tabIndex="8"
      >
        <div className={selectedFont}>{currentFont}</div>
        <span></span>
      </div>

      <div
        className={
          (isOptionsAvailable && "Option__cont active") || "Option__cont"
        }
        onKeyDown={navigateOptionsKeyDown}
        tabIndex="0"
      >
        {fontSelections.map(({ id, fontName, tabIndex }, i) => {
          return (
            <div
              className={i === optionPosition ? "Option active" : "Option"}
              key={id}
              tabIndex="-1"
            >
              <input type="radio" name="fontStyles" readOnly />
              <label
                style={{ fontFamily: fontName }}
                htmlFor="fontStyles"
                onClick={onFontSelected}
              >
                {fontName}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectFont;
