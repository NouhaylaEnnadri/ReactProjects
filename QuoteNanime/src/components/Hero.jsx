import React from "react";

const Hero = () => {
  return (
    <div className="pl-12 pt-12 pr-12 max-w-screen-lg mx-auto text-center">
      {/* Main Header */}
      <h1 className="text-justify font-kanit font-bold text-5xl leading-tight mb-8 pl-12 pr-12 pt-12">
        Anime Quote Generator: Find Quotes to Decide Your Next Anime
      </h1>

      {/* Subheader */}
      <h3 className="text-center font-kanit font-montserrat text-xl leading-relaxed mb-12 text-gray-600 mx-auto max-w-2xl">
        Looking for your next Anime to Binge? Our quote Generator Helps you
        decide if your anime is worth watching based on its most Memorable
        Quote.
      </h3>

      {/* Main Input Field */}
      <div className="relative mx-auto w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter the Title of The Anime"
          className="w-full p-4 border-2 border-primary rounded-lg shadow-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
        />
        <a className="absolute bottom-[-30px] right-0 text-accent text-sm font-medium hover:underline">
          Advanced Search
        </a>
      </div>

      {/* Additional Input Fields */}
      <div className="flex flex-col gap-4 mt-12 mx-auto max-w-lg">
        <input
          type="text"
          placeholder="Enter the Title of The Anime"
          className="w-full p-4 border-2 border-accent rounded-lg shadow-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent"
        />
        <input
          type="text"
          placeholder="Enter the Title of The Anime"
          className="w-full p-4 border-2 border-accent rounded-lg shadow-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-secondary"
        />
      </div>

      {/* Button */}
      <button className="w-full max-w-lg p-4 mt-8 border-2 border-primary rounded-lg shadow-md bg-primary text-white font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
        Info
      </button>
    </div>
  );
};

export default Hero;
