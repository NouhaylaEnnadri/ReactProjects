import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { getProducer } from "../services/api/Jikan API/fetchProducer";
import { getCharacterByName } from "../services/api/Jikan API/fetchCharacter";
import { getImage } from "../services/api/Jikan API/fetchAnimeImage";
import Card from "./Card";

const MediaCard = ({ producer_id, animeAuthor, animeTitle }) => {
  const [producerName, setProducerName] = useState(null);
  const [producerImage, setProducerImage] = useState(null); // Default image
  const [producerPosition, setProducerPosition] = useState(null);
  const [character, setCharacter] = useState(null);
  const [animeImage, setAnimeImage] = useState(null); // Default image

  // Fetch Producer Data
  const fetchProducer = useCallback(async () => {
    try {
      if (producer_id) {
        const { name, imageUrl, position } = await getProducer(producer_id);
        setProducerPosition(position);
        setProducerImage(imageUrl); // Set default image if none is provided
        setProducerName(name);
      }
    } catch (err) {
      console.error("Error fetching producer:", err.message);
    }
  }, [producer_id]);

  // Fetch Character Data
  const fetchCharacter = useCallback(async () => {
    try {
      if (producer_id && animeAuthor) {
        console.log(animeAuthor);
        const character = await getCharacterByName(producer_id, animeAuthor);
        console.log(character);
        setCharacter(character);
      }
    } catch (err) {
      console.error("Error fetching character:", err.message);
    }
  }, [producer_id, animeAuthor]);

  // Fetch Anime Image
  const fetchAnimeImage = useCallback(async () => {
    try {
      if (animeTitle) {
        const { animeImage } = await getImage(animeTitle);
        setAnimeImage(animeImage); // Set default image if none is provided
      }
    } catch (err) {
      console.error("Error fetching anime image:", err.message);
    }
  }, [animeTitle]);

  useEffect(() => {
    fetchProducer();
    fetchAnimeImage();
    fetchCharacter();
  }, [fetchProducer, fetchAnimeImage, fetchCharacter]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {/* Producer Card */}
      {producer_id && (
        <Card
          key={producer_id}
          image={producerImage}
          position={producerPosition ? `The ${producerPosition}` : "Producer"} // Default to 'Producer'
        />
      )}
      {/* Character Card */}
      {character && <Card image={character.imageUrl} position="Character" />}
      {/* Anime Poster Card */}
      {animeImage && <Card image={animeImage} position="Anime" />}
    </div>
  );
};

export default MediaCard;
