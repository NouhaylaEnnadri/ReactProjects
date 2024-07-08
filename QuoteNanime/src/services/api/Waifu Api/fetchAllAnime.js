/*
 !Not Done it is not fucntional 
 * the purpose of this fucntion is to be able to load all the anime titles that the api provides

*/

export const getAllAnime = async () => {
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
