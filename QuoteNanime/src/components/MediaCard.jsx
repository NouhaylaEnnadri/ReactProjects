import React from "react";

const MediaCard = () => {
  const movieCards = [
    {
      id: 1,
      title: "Inception",
      imageUrl:
        "https://image.tmdb.org/t/p/original/50rRT2Kf8NQ1zeD2y5KTQDEp8FX.jpg",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
    },
    {
      id: 2,
      title: "Interstellar",
      imageUrl:
        "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      imageUrl:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    },
  ];

  return (
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
              className="mt-2 inline-block px-4 py-2 text-sm font-bold text-black bg-secondary rounded-lg transition-transform duration-300 hover:scale-110"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaCard;
