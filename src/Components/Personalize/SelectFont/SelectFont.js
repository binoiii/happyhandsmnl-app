import React, { useState } from "react";
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

  const selectedText =
    fontValue !== "Montserrat" ? fontValue : "CHOOSE YOUR FONT";

  const selectActive =
    fontValue !== "Montserrat" ? "Selected active" : "Selected";

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
      <div className="Selected__cont" onClick={handleSelect}>
        <div className={selectActive}>{selectedText}</div>
      </div>

      <div
        className={(selectOptions && "Option__cont active") || "Option__cont"}
      >
        {fontSelections.map((font, index) => {
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
