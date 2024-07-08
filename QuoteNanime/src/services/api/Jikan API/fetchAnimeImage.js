/**
 * Fetches the image and ID of an anime by its title.
 * 
 * @param {string} anime - The title of the anime to search for.
 * @returns {Promise<{id: number, animeImage: string}>} - An object containing the anime ID and image URL.
 * @throws {Error} - Throws an error if the fetch request fails.
 */
export const getImage = async (anime) => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(anime)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.data && data.data.length > 0) {
      const { images, mal_id } = data.data[0];
      const animeImage = images.jpg.image_url;

      return { id: mal_id, animeImage: animeImage };
    } else {
      throw new Error("No anime found for the given title.");
    }
  } catch (err) {
    console.error("Error fetching anime image:", err.message);
    throw err;
  }
};
