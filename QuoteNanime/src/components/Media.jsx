import React from "react";
import { QuoteNanime_banner, QuoteNanime_logo, test } from "../assets"; // Ensure this path is correct
import { Buttons, MediaCard } from "../components";

const Media = () => {
  return (
    <div className="relative w-full max-w-[800px] mx-auto my-20 px-4">
      {/* Media Card */}
      <div className="relative w-full h-[350px] overflow-hidden rounded-lg transition-transform duration-400 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-lg bg-secondary">
        {/* Background Image on the Right */}
        <div
          className="absolute inset-y-0 right-0 w-[60%] bg-cover bg-center rounded-lg z-1"
          style={{ backgroundImage: `url(${test})` }}
        ></div>
        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-[45%_55%] bg-gradient-to-r from-base-100 via-base-300 to-transparent rounded-lg">
          {/* Text Section */}
          <div className="p-6 flex flex-col justify-center">
            <blockquote className="relative border-l-4 pl-4 sm:pl-6 border-secondary text-center">
              <p className="font-montserrat text-lg ">
                I just wanted to say that I'm very happy with my purchase so
                far. The documentation is outstanding - clear and detailed. I
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-center mt-4 p-6 space-x-4">
        {/* New filter button  */}
        <Buttons text="New Filter" />
        {/* Randomize Button */}
        <Buttons text="Randomize" />
      </div>
      {/* Movie Cards */}
      <MediaCard />
    </div>
  );
};

export default Media;
