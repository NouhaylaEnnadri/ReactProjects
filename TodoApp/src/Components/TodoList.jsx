import React, { useState, useEffect } from 'react';

const TodoList = ({ todo }) => {
  const [list, setList] = useState([]);

   useEffect(() => {
    setList(prevList => [...prevList, todo]);
  }, [todo]);

  useEffect(() => {
    setList([]);
  }, []); 


  const bgColor = ['bg-primary', 'bg-accent', 'bg-secondary'];

  const details = [`${list.length} items left`, " ", " ", 'all', 'Active', 'completed', ' ', 'clear completed'];

  return (
    <div className="w-full max-w-md mt-52 sm:mt-44 z-0 mx-auto">
      {list.map((todo, todoIndex) => (
        <div key={todoIndex} className={`p-4 mb-4 ${bgColor[todoIndex % bgColor.length]}`}>
          <div className="flex items-center justify-between rounded text-primary-content">
            <div className="flex items-center">
              <input type="checkbox" className="checkbox mr-2 border-neutral" />
              <span>{todo}</span>
            </div>
            <button className="btn btn-circle p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between p-4 border-t border-primary mt-4">
        {details.map((detail, detailIndex) =>  list.length>0 ?(
          
            <button key={detailIndex} className="hover:text-primary hover-shadow hover:rounded-xl">
            {detail}
          </button>
          
        
        ) : null)}
      </div>
    </div>
  );
}

export default TodoList;
