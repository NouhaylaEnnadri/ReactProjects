import React from "react";

const PopularCarasoul = ({ img, text, onClick }) => {
  return (
    <div className="carousel-item relative w-1/2 max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" onClick={onClick}>
      <img src={img} className="rounded-box" alt={text} />
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center p-4">
        <h2 className="bg-accent bg-opacity-20 text-white p-2 rounded-sm text-xs sm:text-sm md:text-sm lg:text-xs xl:text-xs font-medium truncate">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default PopularCarasoul;
