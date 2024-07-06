/*

* Url =https://api.jikan.moe/v4/anime
 ?search by name : 
 https://api.jikan.moe/v4/anime?q=Naruto


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

    console.log(data);
  } catch (err) {
    console.error("Error fetching quote:", err.message);
    throw err;
  }
};
