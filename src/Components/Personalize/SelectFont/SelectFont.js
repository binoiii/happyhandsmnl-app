import React, { useState, useEffect } from "react";
import "./SelectFont.css";

const SelectFont = ({ handleFontValue, fontValue }) => {
  const [selectOptions, setSelectOptions] = useState(false);

  const handleSelect = () => {
    setSelectOptions(!selectOptions);
  };

  const handleSelectOff = () => {
    setSelectOptions(false);
  };

  const handleLabel = (e) => {
    handleSelectOff();
    handleFontValue(e);
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
      <div className="Selected__cont" onClick={handleSelect} tabIndex="8">
        <div className={selectedFont}>{currentFont}</div>
        <span></span>
      </div>

      <div
        className={(selectOptions && "Option__cont active") || "Option__cont"}
      >
        {fontSelections.map((font) => {
          return (
            <div className="Option" key={font}>
              <input type="radio" name="fontStyles" readOnly />
              <label
                style={{ fontFamily: font }}
                htmlFor="fontStyles"
                onClick={handleLabel}
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
