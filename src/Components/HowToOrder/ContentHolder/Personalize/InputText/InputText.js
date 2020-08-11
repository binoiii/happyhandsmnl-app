import React from "react";
import "./InputText.css";

const InputText = ({ userText, handleUserText }) => {
  return (
    <div className="InputText__cont">
      <input
        type="text"
        name="input"
        value={userText}
        onChange={handleUserText}
        placeholder="TYPE YOUR TEXT"
        spellCheck="false"
        tabIndex="7"
      />
    </div>
  );
};

export default InputText;
