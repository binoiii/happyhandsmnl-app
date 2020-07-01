import React, { useState } from "react";
import "./SelectFont.css";

const SelectFont = ({ handleFontValue, fontValue, fontSelections }) => {
  const [isOptionsAvailable, setOptionsAvailable] = useState(false);

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

    if (key === "Enter" || key === 13) {
      handleFontValue(e.target.innerText);
      exitFontOptions();
    }
  };

  const [currentFont, selectedFont] =
    fontValue !== "Montserrat"
      ? [fontValue, "Selected active"]
      : ["CHOOSE YOUR FONT", "Selected"];

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
      >
        {fontSelections.map(({ id, fontName }) => {
          return (
            <div
              className={fontValue === fontName ? "Option active" : "Option"}
              key={id}
            >
              <input type="radio" name="fontStyles" readOnly />
              <label
                htmlFor="fontStyles"
                style={{ fontFamily: fontName }}
                onClick={onFontSelected}
                tabIndex="9"
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
