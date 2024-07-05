import React from "react";

const Input = ({ placeholder, color  }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full p-4 border-2 border-${color} rounded-lg shadow-md focus:outline-none focus:border-${color} focus:ring-2 focus:ring-${color}`}
    />
  );
};

export default Input;
