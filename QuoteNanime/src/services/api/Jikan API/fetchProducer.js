/**
 * *Jikan API*.
 * Fetches the producer (staff member) for a given anime from the *Jikan API*.
 *
 * @param {string} id - The ID of the anime for which to fetch the producer.
 *
 * @throws {Error} - Throws an error if the fetch request fails, the response is not OK, or no suitable staff member is found.
 *
 * @description
 * This function performs an API request to the Jikan API to retrieve the staff members for a given anime.
 * It constructs the API request URL by encoding the anime ID and handles HTTP errors by checking the response status.
 *
 * The function then searches through the staff list to find a person with a relevant position (e.g., Director).
 * If a suitable staff member is found, it returns their position, name, and image URL.
 *
 * @returns {Object} An object containing the position, name, and imageUrl of the staff member.
 *
 * @see [Jikan API Documentation](https://jikan.docs.apiary.io/)
 */
export const getProducer = async (id) => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${encodeURIComponent(id)}/staff`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const staffList = data.data; // Extract the staff list from the data

    // Define a list of positions to search for
    const positionsToFind = ["Director"];
    let staffMember = null;
    let position = null;

    // Find the first person with a relevant position
    for (const staff of staffList) {
      for (const pos of staff.positions) {
        if (positionsToFind.includes(pos)) {
          staffMember = staff.person;
          position = pos;
          break;
        }
      }
      if (staffMember) break;
    }

    if (staffMember && position) {
      // Return the position, image URL, and name of the person
      return {
        position,
        name: staffMember.name,
        imageUrl: staffMember.images.jpg.image_url,
      };
    } else {
      throw new Error("No suitable staff member found.");
    }
  } catch (err) {
    console.error("Error fetching staff:", err.message);
    throw err;
  }
};
