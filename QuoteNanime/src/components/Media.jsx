import React, { useEffect, useState } from "react";
import { Buttons, MediaCard } from "../components";
import { Link, useLocation } from "react-router-dom";
import { getImage } from "../services/api/Jikan API/fetchAnimeImage";
import { getQuote } from "../services/api/Waifu Api/FetchQuote";

const Media = () => {
  const location = useLocation();
  const { quote, author, animeTitle } = location.state || {}; // Destructure quote and author from state
  const [bgImage, setBgImage] = useState("");
  const [animeQuote, setAnimeQuote] = useState(quote || ""); // Initialize with default value
  const [animeAuthor, setAnimeAuthor] = useState(author || ""); // Initialize with default value
  const [isLoading, setIsLoading] = useState(false);
  const [producer, setProducer] = useState(null); // Initialize with null
  const [animeId, setAnimeId] = useState(null); // Initialize with null

  // Fetch a new quote and update state
  const fetchNewQuote = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const { quote, author } = await getQuote(animeTitle);
      setAnimeQuote(quote);
      setAnimeAuthor(author);
    } catch (err) {
      console.error("Failed to fetch new quote:", err);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  console.log(animeAuthor);

  // Fetch the background image and producer ID
  const fetchImage = async () => {
    try {
      if (animeTitle) {
        const { id, animeImage } = await getImage(animeTitle);
        setProducer(id);
        setAnimeId(id);
        setBgImage(animeImage || "default-image-url"); // Set a default image if none is provided
      }
    } catch (err) {
      console.error("Failed to fetch image or producer:", err);
    }
  };

  console.log(animeAuthor);

  useEffect(() => {
    fetchImage();
  }, [animeTitle]);

  return (
    <div className="relative w-full max-w-[800px] mx-auto my-20 px-4">
      {/* Media Card */}
      <div className="relative w-full h-[350px] overflow-hidden rounded-lg transition-transform duration-400 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-lg bg-secondary">
        {/* Background Image on the Right */}
        <div
          className="absolute inset-y-0 right-0 w-[60%] bg-cover bg-center rounded-lg z-1"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-[45%_55%] bg-gradient-to-r from-base-100 via-base-300 to-transparent rounded-lg">
          {/* Text Section */}
          <div className="p-6 flex flex-col justify-center">
            <blockquote className="relative border-l-4 pl-4 sm:pl-6 border-secondary text-center">
              <p className="font-montserrat text-lg">{animeQuote}</p>
              <footer className="mt-2 text-sm text-gray-500">
                {animeAuthor}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-center mt-4 p-6 space-x-4">
        {/* New filter button  */}
        <Link to="/">
          <Buttons text="New Filter" />
        </Link>
        {/* Randomize Button */}
        <Buttons text="Randomize" onClick={fetchNewQuote} />
      </div>
      {/* Movie Cards */}
      {producer && animeAuthor && animeTitle && (
        <MediaCard
          producer_id={producer}
          animeAuthor={animeAuthor}
          animeTitle={animeTitle}
        />
      )}
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}
    </div>
  );
};

export default Media;
