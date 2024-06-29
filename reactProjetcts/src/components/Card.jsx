import React, { useState } from "react";

const Card = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-auto h-full">
      <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden">
        <div className="mockup-window border bg-base-300">
          <div
            className="flex justify-center items-center bg-base-200 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={img}
              alt="Project 1"
              className="object-cover w-full h-full"
            />
            {isHovered && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition duration-300">
                <button className="bg-primary text-white px-4 py-2 rounded-md z-10">
                  More Details
                </button>
                <div className="absolute bottom-0 left-0 p-4 text-xs text-gray-500">
                  <span className="inline-block bg-gray-200 px-2 py-1 rounded-md mr-1">
                    ReactJs
                  </span>
                  <span className="inline-block bg-gray-200 px-2 py-1 rounded-md mr-1">
                    Tailwind
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
