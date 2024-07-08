import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, position }) => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg bg-base-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <Link to="/comingSoon">
        <div className="relative z-10 p-4 flex flex-col justify-end h-full bg-gradient-to-t from-gray-900 to-transparent">
          <h3 className="text-white text-lg font-semibold">The {position}</h3>
          <a
            href="#_"
            className="mt-2 inline-block px-4 py-2 text-sm font-bold text-black bg-secondary rounded-lg transition-transform duration-300 hover:scale-110"
          >
            More Info
          </a>
        </div>
      </Link>
    </div>
  );
};

export default Card;
