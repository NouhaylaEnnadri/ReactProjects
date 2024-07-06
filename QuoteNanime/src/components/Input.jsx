import React, { useState } from "react";

const Input = ({ placeholder, color, sendData }) => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    sendData(inputValue);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full p-4 border-2 border-${color} rounded-lg shadow-md focus:outline-none focus:border-${color} focus:ring-2 focus:ring-${color}`}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default Input;
