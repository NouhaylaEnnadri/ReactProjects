/**
 * *Waifu API*.
 * Fetches a quote for a given anime from the *Waifu API*.
 *
 * @param {string} anime - The title of the anime for which to fetch a quote.
 *
 * @throws {Error} - Throws an error if the fetch request fails or the response is not OK.
 *
 * @description
 * This function performs an API request to the Waifu API to retrieve a quote for a given anime.
 * It constructs the API request URL by encoding the anime title and includes an authorization header with a fixed API key.
 *
 * The function handles HTTP errors by checking the response status and throws an error if the status indicates a failure.
 *
 * TODO: Import the API key from the .env file for better security and flexibility.
 *
 *
 * @see [Waifu API Documentation](https://waifu.it/docs)
 */
export const getQuote = async (anime) => {
  try {
    const response = await fetch(
      `https://waifu.it/api/v4/quote/?anime=${encodeURIComponent(anime)}`,
      {
        headers: {
          Authorization:
            "MTI1ODgwNjg2ODIxODc0MDgzMA--.MTcyMDE5NDE2MA--.91567b48ff97",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const { quote } = data;

    return quote;
  } catch (err) {
    console.error("Error fetching quote:", err.message);
    throw err;
  }
};
