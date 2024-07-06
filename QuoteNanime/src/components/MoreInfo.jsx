import React from "react";
import { test } from "../assets";

const MoreInfo = () => {
  // Replace the sample data with the actual actor details
  const actor = {
    name: "Leonardo DiCaprio",
    birthDate: "November 11, 1974",
    birthPlace: "Los Angeles, California, USA",
    biography:
      "Leonardo DiCaprio is an American actor and film producer. He has received numerous awards, including an Academy Award and three Golden Globe Awards. DiCaprio began his career by appearing in television commercials in the late 1980s and had recurring roles in various television series in the early 1990s. He achieved international fame as a star in Titanic (1997), and has since worked in a wide range of genres.",
    imageUrl: test, // Replace with the actual image URL
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center p-6">
      {/* Actor Image Card */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
          <img
            src={actor.imageUrl}
            alt={actor.name}
            className="object-cover w-full h-96"
          />
        </div>
      </div>

      {/* Actor Details */}
      <div className="w-full md:w-2/3 md:pl-12 ">
        <div className="bg-secondary bg-opacity-25 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">{actor.name}</h1>
          <p className="text-gray-600 mb-2">
            <strong>Birth Date:</strong> {actor.birthDate}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Birth Place:</strong> {actor.birthPlace}
          </p>
          <p className="text-gray-600">
            <strong>Biography:</strong> {actor.biography}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
