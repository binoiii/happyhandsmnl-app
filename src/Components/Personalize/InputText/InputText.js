import React from "react";
import "./InputText.css";

const InputText = ({ userText, handleUserText }) => {
  return (
    <div className="InputText__cont">
      <input
        type="text"
        value={userText}
        onChange={handleUserText}
        placeholder="TYPE YOUR TEXT"
        spellcheck="false"
      />
    </div>
  );
};

export default InputText;
