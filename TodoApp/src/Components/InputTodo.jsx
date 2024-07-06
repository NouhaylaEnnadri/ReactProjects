import React, { useState } from 'react';

const InputTodo = ({ placeholder, sendData }) => {
  const [inputValue, setInputValue] = useState('');

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendData(inputValue);
      setInputValue(''); 
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        className="input p-8 input-bordered input-primary w-full"
        value={inputValue}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default InputTodo;
