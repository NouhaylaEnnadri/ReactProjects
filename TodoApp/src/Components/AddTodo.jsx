/**
 * The AddTodo component in a React application renders a form for adding new todo items with
 * dark/light mode toggle functionality.
 * @returns The `AddTodo` component is being returned. It is a functional component that renders a
 * layout for adding a new todo item. The layout includes a title "TODO", a DarkLight component for
 * toggling dark/light mode, and an InputTodo component for entering new todo items.
 */


import React, { useState } from 'react';
import DarkLight from './DarkLight';
import InputTodo from './InputTodo';

const AddTodo = ({sendData}) => {

 
  const [inputValue, setInputValue] = useState('');
  
  const recieveFromInput = (value)=> {
      setInputValue(value);
      sendData(value);
  }
  
  console.log(inputValue);
  return (
    <div className="absolute inset-0 flex items-start justify-center p-10">
      <div className="relative w-full max-w-md text-center">
        <div className="flex justify-between items-center mb-4 sm:mb-10 p-4">
          <h1 className="text-3xl font-bold">TODO</h1>
          <DarkLight />
        </div>
        <div>
          <InputTodo placeholder="Enter Todo ..." sendData= {recieveFromInput}/>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
