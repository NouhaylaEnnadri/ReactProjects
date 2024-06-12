/* This code snippet is a React component named `Header`. Here's a breakdown of what it does: */
import React, { useState } from 'react';
import { header } from '../assets';
import DarkLight from './DarkLight';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const Header = () => {
  const [inputValue, setInputValue] = useState('');

  const recieveFromInput = (value)=> {
    setInputValue(value);
} 

console.log(inputValue);
  return (
    <div className="relative w-full min-h-screen bg-top bg-no-repeat bg-contain bg-bg-light dark:bg-bg-dark">
      {/* Desktop Image */}
      <img
        src={header}
        alt="Desktop Background"
        className="absolute hidden object-cover w-full opacity-0 dark:opacity-100 sm:block"
        style={{ height: '300px' }}
      />
      {/* Mobile Image Light */}
      <img
        src={header}
        alt="Mobile Background"
        className="absolute z-0 object-cover w-full opacity-100 dark:opacity-0 sm:hidden"
        style={{ height: '200px' }}
      />
      {/* Mobile Image Dark */}
      <img
        src={header}
        alt="Mobile Background"
        className="absolute z-0 object-cover w-full opacity-0 dark:opacity-100 sm:hidden"
        style={{ height: '200px' }}
      />
      <div className="flex flex-col items-center justify-center p-8 sm:p-20">
        <AddTodo  sendData={recieveFromInput}/>
        <TodoList todo={[inputValue]} />
      </div>
    </div>
  );
};

export default Header;
