import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ img, projectName, tags, id }) => {
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
              alt={projectName}
              className="object-cover w-full h-full"
            />
            {isHovered && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition duration-300">
                <Link to={`/details/${id}`}>
                  <button className="bg-primary text-white px-4 py-2 rounded-md z-10">
                    More Details
                  </button>
                </Link>

               
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
