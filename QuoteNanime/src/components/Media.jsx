import React from "react";
import "./MediaCard.css"; // Import your global CSS file
import { QuoteNanime_banner } from "../assets"; // Ensure this path is correct

const Media = () => {
  const movieCards = [
    {
      id: 1,
      title: "Inception",
      imageUrl: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
    },
    {
      id: 2,
      title: "Interstellar",
      imageUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    },
  ];

  return (
    <div className="relative w-full max-w-[800px] mx-auto my-20 px-4">
      {/* Media Card */}
      <div className="relative w-full h-[350px] overflow-hidden rounded-lg transition-transform duration-400 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-lg bg-secondary">
        {/* Background Image on the Right */}
        <div
          className="absolute inset-y-0 right-0 w-[80%] bg-cover bg-center rounded-lg z-1"
          style={{ backgroundImage: `url(${QuoteNanime_banner})` }}
        ></div>
        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-[35%_65%] bg-gradient-to-r from-neutral via-base-200 to-transparent rounded-lg">
          {/* Text Section */}
          <div className="p-6 flex flex-col justify-center">
            <blockquote className="relative border-l-4 pl-4 sm:pl-6 border-secondary text-center">
              <p className="text-gray-800 sm:text-xl italic">
                I just wanted to say that I'm very happy with my purchase so far.
                The documentation is outstanding - clear and detailed.
              </p>
              <footer className="mt-4 flex flex-col items-center">
                <div className="flex-shrink-0"></div>
                <div className="mt-2">
                  <div className="text-base font-semibold text-accent ">
                    Josh Grazioso
                  </div>
                  <div className="text-xs text-accent">Source title</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-4 p-6 space-x-4">
        {/* Left Button */}
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border-2 border-accent rounded-lg">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-base-100"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-secondary group-hover:-rotate-180 ease"></span>
            <span className="relative">New Filter</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
        {/* Right Button */}
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border-2 border-accent rounded-lg">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-base-100"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-secondary group-hover:-rotate-180 ease"></span>
            <span className="relative">Randomize</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {movieCards.map((movie) => (
          <div
            key={movie.id}
            className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg bg-base-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${movie.imageUrl})` }}
            ></div>
            <div className="relative z-10 p-4 flex flex-col justify-end h-full bg-gradient-to-t from-gray-900 to-transparent">
              <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
                <a
                href="#_"
                className="mt-2 inline-block px-4 py-2 text-sm font-bold text-black bg-secondary  rounded-lg transition-transform duration-300 hover:scale-110"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
