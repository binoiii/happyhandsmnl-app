import React from "react";
import "./InputText.css";

const InputText = ({ userText, handleUserText }) => {
  return (
    <div className="InputText__cont">
      <input
        type="text"
        value={userText}
        onChange={handleUserText}
        className="InputText_self"
        placeholder="TYPE YOUR TEXT"
      />
    </div>
  );
};

export default InputText;
