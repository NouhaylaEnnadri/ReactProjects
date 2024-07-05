import React, { useState } from "react";
import { QuoteNanime_logo, Totoro } from "../assets";
import { Link } from "react-router-dom";
import Input from "./Input";

const Hero = () => {
  const [Additional, setAdditional] = useState(false);
  const setOptional = () => {
    setAdditional((prev) => !prev);
    console.log(Additional);
  };
  return (
    <div className="px-6 py-12 pt-24 max-w-screen-lg mx-auto text-center">
      {/* Main Header */}
      <h1 className="text-center font-kanit font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8">
        Anime Quote Generator: Is your next anime Binge Worth it!
      </h1>

      {/* Subheader */}
      <h3 className="text-center font-montserrat text-lg sm:text-xl leading-relaxed mb-12 text-gray-600 mx-auto max-w-2xl">
        Looking for your next Anime to Binge? Our quote Generator helps you
        decide if your anime is worth watching based on its most memorable
        quote.
      </h3>

      {/* Main Input Field */}
      <div className="relative mx-auto w-full max-w-lg">
        <Input placeholder="Enter the Title of The Anime" color="primary" />
        <a
          className="cursor-pointer absolute bottom-[-30px] right-0 text-accent text-sm font-medium hover:underline"
          onClick={() => {
            setOptional();
          }}
        >
          Advanced Search
        </a>
      </div>

      {/* Additional Input Fields */}
      {Additional && (
        <div className="flex flex-col gap-4 mt-12 mx-auto max-w-lg">
          <Input
            placeholder="Enter the name of the character (Optional)"
            color="secondary"
          />

          <Input
            placeholder="Enter the name of the Author (Optional)"
            color="secondary"
          />
        </div>
      )}

      {/* Generate Quote Button */}
      <Link to="Quote">
        <button className=" w-full max-w-lg p-4 mt-12 border-2 border-secondary rounded-lg shadow-md bg-secondary text-white font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
          Generate Quote
        </button>
      </Link>

      {/* Totoro Image */}
      <div className="mb-8">
        <img
          src={Totoro}
          alt="Totoro"
          className="mx-auto w-48 h-auto sm:w-64 md:w-80 lg:w-96 pt-6 rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
