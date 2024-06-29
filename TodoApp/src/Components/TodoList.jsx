import React, { useState, useEffect } from "react";

const TodoList = ({ todo }) => {
  // State variables
  const [list, setList] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  // Initialize list and checkedItems when todo prop changes
  useEffect(() => {
    setList((prevList) => [...prevList, todo]);
    setCheckedItems((prevState) => ({ ...prevState, [todo]: false }));
  }, [todo]);

  // Clear list on initial mount
  useEffect(() => {
    setList([]);
    setCheckedItems({});
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (todo) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [todo]: !prevState[todo],
    }));
  };

  // Delete a task from the list and its corresponding checked item
  const deleteTask = (todoToDelete) => {
    setList((prevList) => prevList.filter((todo) => todo !== todoToDelete));

    const newCheckedItems = { ...checkedItems };
    delete newCheckedItems[todoToDelete];
    setCheckedItems(newCheckedItems);
  };

  // Handle filter button click
  const displayFilter = (filter) => {
    if (filter === "Active") {
      const filteredList = Object.keys(checkedItems).filter(
        (todo) => !checkedItems[todo]
      );
      setList(filteredList);
    } else if (filter === "completed") {
      const filteredList = Object.keys(checkedItems).filter(
        (todo) => checkedItems[todo]
      );
      setList(filteredList);
    } else if (filter === "all") {
      setList(Object.keys(checkedItems));
    } else if (filter === "clear completed") {
      const filteredList = Object.keys(checkedItems).filter(
        (todo) => checkedItems[todo]
      );
      filteredList.forEach((todo) => deleteTask(todo));
    }
  };

  // UI details
  const bgColor = ["bg-primary", "bg-accent", "bg-secondary"];
  const details = [
    `${list.length} items left`,
    "",
    "",
    "all",
    "Active",
    "completed",
    "",
    "clear completed",
  ];

  return (
    <div className="w-full max-w-md mt-52 sm:mt-44 z-0 mx-auto">
      {list.map((todo, todoIndex) => (
        <div
          key={todoIndex}
          className={`p-4 mb-4 ${bgColor[todoIndex % bgColor.length]}`}
        >
          <div className="flex items-center justify-between rounded text-primary-content">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="checkbox mr-2 border-neutral"
                checked={checkedItems[todo]}
                onChange={() => handleCheckboxChange(todo)}
              />
              <span className={checkedItems[todo] ? "line-through" : ""}>
                {todo}
              </span>
            </div>
            <button
              className="btn btn-circle p-3"
              onClick={() => deleteTask(todo)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between p-4 border-t border-primary mt-4">
        {list.length > 0
          ? details.map((detail, detailIndex) => (
              <button
                key={detailIndex}
                onClick={() => displayFilter(detail)}
                className="hover:text-primary hover-shadow hover:rounded-xl"
              >
                {detail}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default TodoList;
