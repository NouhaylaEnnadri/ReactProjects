/**
 * Fetches a character by name from the specified anime or returns a random character if not found.
 *
 * @param {number} animeId - The ID of the anime to fetch characters from.
 * @param {string} characterName - The name of the character to search for.
 *
 * @throws {Error} - Throws an error if the fetch request fails or if there is an issue during character retrieval.
 */
export const getCharacterByName = async (animeId, characterName) => {
  try {
    // Fetch all characters for the specified anime
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${animeId}/characters`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to JSON format
    const data = await response.json();
    const characters = data.data; // Extract the list of characters from the response

    // Normalize the search characterName for comparison
    const normalizedCharacterName = characterName.toLowerCase().trim();

    // Find the character with a direct name comparison
    const foundCharacter = characters.find(character => 
      character.character.name.toLowerCase().trim() === normalizedCharacterName
    );

    // If no character is found, select a random character from the list
    const characterToReturn = foundCharacter
      ? foundCharacter.character
      : characters.length > 0
        ? characters[Math.floor(Math.random() * characters.length)].character
        : null;

    console.log("foundCharacter", characterToReturn ? characterToReturn.name : "Character not found");

    // Return the character's name and image URL if found
    if (characterToReturn) {
      return {
        name: characterToReturn.name, // Character's name
        imageUrl: characterToReturn.images?.jpg?.image_url, // Character's image URL or default image
      };
    } else {
      console.error("Character not found.");
      return null; // Return null if no character is found
    }
  } catch (err) {
    console.error("Error fetching character:", err.message);
    throw err; // Re-throw the error for further handling
  }
};
